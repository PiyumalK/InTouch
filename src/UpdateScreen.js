import React, { useState } from 'react'
import Firebase from 'firebase'
import { 
    Text,
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Image,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { YellowBox } from 'react-native';
import _ from 'lodash';
import { ScrollView } from 'react-native-gesture-handler'

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class UpdateScreen extends React.Component {
    state = {
        name: "",
        email: "",
        
    }

    update = () => {
        const { name, email } = this.state
        if(!name) {
            alert("Name is required!")
        } else {
            Firebase.database().ref('users/' + Firebase.auth().currentUser.uid)
            .update({
                name: this.state.name
            })
            .then(() => {
                this.setState({name: ""})
                this.props.navigation.navigate("Dashboard", {name: this.state.name})
            })
            .catch((err) => {
                alert(err.message)
                console.log("Upadate failed")
            })
        }
    }

    componentDidMount() {
        Firebase.database().ref("users/" + Firebase.auth().currentUser.uid)
        .once("value", (snapshot) => {
            this.setState({name: snapshot.val().name})
            this.setState({email: snapshot.val().email})
            console.log(snapshot.val())
        })
    }

    render() {
        return (
            <ScrollView>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <View style={styles.circle} />
                        <View style={{ marginTop: 64 }}>
                            <Image style={styles.image} source={require("../assets/logo.png")} />
                        </View>
                        <View style={{ marginHorizontal: 32 }}>
                            <Text style={{ fontSize: 20 }}>Enter your details to update</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={this.state.name}
                                onChangeText={name => {
                                    this.setState({name})}
                                }
                                value={this.state.name}
                            />
                            <View style={{ alignItems: "flex-end", marginTop: 64 }}>
                                <TouchableOpacity style={styles.continue} onPress={this.update}>
                                    <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        marginTop: getStatusBarHeight()
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20,
        marginTop: getStatusBarHeight()
    },
    image: {
        marginTop: 30,
        height: 200,
        width: 200,
        alignSelf: "center"
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        fontWeight: "600"
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#81bdca",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        
    }
});