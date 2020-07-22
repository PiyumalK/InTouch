import React from 'react'
import Firebase from 'firebase'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { YellowBox } from 'react-native';
import _ from 'lodash';

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
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            this.props.navigation.navigate("Login", {name: this.state.name})
        })
        .catch(() => {
            console.log("Authentication failed")
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{ marginTop: 64 }}>
                    <Image style={styles.image} source={require("../assets/chat.png")} />
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>InTouch</Text>
                    <View style={{ height: 20 }} />
                    <Text>Enter your details...</Text>
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
                        onChangeText={password => {
                            this.setState({password})}
                        }
                        value={this.state.password}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        onChangeText={confirmPassword => {
                            this.setState({confirmPassword})}
                        }
                        value={this.state.confirmPassword}
                    />

                    <View style={{ alignItems: "flex-end", marginTop: 64 }}>
                        <TouchableOpacity style={styles.continue} onPress={this.signUp}>
                            <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                         </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    image: {
        height: 100,
        width: 100,
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
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        
    }
});