import React from 'react'
import Firebase from 'firebase'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Button } from 'galio-framework'

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class DashboardScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name})
    }

    update = () => {
        this.props.navigation.navigate("Update", {name: this.state.name})
    }

    componentDidMount() {
        Firebase.database().ref("users/" + Firebase.auth().currentUser.uid)
        .on("value", (snapshot) => {
            this.setState({name: snapshot.val().name})
            this.setState({email: snapshot.val().email})
            console.log(this.state.name)
            console.log(this.state.email)
        })
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.circle} />
                    <View style={{ marginTop: 64 }}>
                        <Image style={styles.image} source={require("../assets/logo.png")} />
                    </View>
                    <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Hello {this.state.name}</Text>
                        {/* <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={email => {
                                this.setState({email})}
                            }
                            value={this.state.email}
                        /> */}
                        {/* <TextInput	   
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={name => {
                            this.setState({name})}
                        }	                        
                        value={this.state.name}	                        
                        /> */}
                        {/* <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={password => {
                                this.setState({password})}
                            }
                            value={this.state.password}
                        /> */}
                        <View style={{ alignItems: "flex-start", marginTop: 64 }}>
                            <Button color="warning" onPress={this.update}>Update Account</Button>
                            <Button color="info" onPress={this.continue}>Continue to chat</Button>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
        marginTop: 60,
        height: 100,
        width: 200,
        alignSelf: "center"
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32
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
    icon: {
        color: "#FFF"
    },
    button: {
        
    }
});