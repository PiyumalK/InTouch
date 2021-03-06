import React, { useState } from 'react'
import Firebase from 'firebase'
import { 
    Text,
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Image,
    KeyboardAvoidingView,
    Dimensions,
    ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height'


import { YellowBox } from 'react-native';
import _ from 'lodash';
// import { ScrollView } from 'react-native-gesture-handler'

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class SignUpScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        
    }

    signUp = () => {
        const { name, email, password, confirmPassword } = this.state
        if(!name) {
            alert("Name is required!")
        } else if(!email) {
            alert("Email is required!")
        } else if(!password) {
            alert("Password is required!")
        } else if(!confirmPassword) {
            alert("Please confirm password")
        } else if(password !== confirmPassword) {
            alert("Passwords do not match!")
        } else {
            Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                Firebase.database().ref('users/' + Firebase.auth().currentUser.uid).set({
                    name: this.state.name,
                    email: this.state.email
                })
                this.setState({name: ""})
                this.setState({email: ""})
                this.setState({password: ""})
                this.setState({confirmPassword: ""})
                this.props.navigation.navigate("Login")
            })
            .catch((err) => {
                alert(err)
                console.log("Authentication failed")
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
            {/* <ScrollView style={{ flex: 1,  }} > */}
                <KeyboardAwareScrollView style={{ flex: 1, }}>
                        <View style={styles.circle} />

                        <View style={{ flex: 2, }}>
                            <Image style={styles.image} source={require("../assets/logo.png")} />
                        </View>
                        <View style={{ marginHorizontal: 32, flex: 4, }}>
                            <Text style={{ fontSize: 20 }}>Enter your details...</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                onChangeText={name => {
                                    this.setState({name})}
                                }
                                value={this.state.name}
                                />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={email => {
                                    this.setState({email})}
                                }
                                value={this.state.email}
                                />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={password => {
                                    this.setState({password})}
                                }
                                value={this.state.password}
                                />
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                onChangeText={confirmPassword => {
                                    this.setState({confirmPassword})}
                                }
                                value={this.state.confirmPassword}
                                />
                        </View>
                        
                        <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1}}></View>
                                <View style={{ flex: 1, alignItems: "center", marginTop: 30}}>
                                    <TouchableOpacity style={styles.continue} onPress={this.signUp}>
                                        <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                                    </TouchableOpacity>
                                </View>
                        </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        marginTop: getStatusBarHeight(),
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: "#FFF",
        position: "absolute",
        right: -120,
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
    }
});