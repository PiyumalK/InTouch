import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Row } from 'react-native'
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

export default class HomeScreen extends React.Component {
    state = {
        name: ""
    }

    Login = () => {
        this.props.navigation.navigate("Login", {name: this.state.name})
    }

    SignUp = () => {
        this.props.navigation.navigate("SignUp", {name: this.state.name})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{ marginTop: 64 }}>
                    {/* <Image style={styles.image} source={require("../assets/chat.png")} /> */}
                    <Image style={styles.image} source={require("../assets/logo.png")} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Welcome to In-Touch!</Text>
                    <View style={{ height: 40 }}></View>
                    <Text style={styles.text}>Let's get you started</Text>
                    <Text style={styles.text}>Sign up to stay in touch with your loved ones</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{ height: 20 }} />
                    <TouchableOpacity style={styles.button} onPress={this.Login}>
                        <Text style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "#FFF"
                        }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ width: 20 }} />
                    <TouchableOpacity style={styles.button} onPress={this.SignUp}>
                        <Text style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "#FFF"
                        }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F4F5F7",
        backgroundColor: "#dbecf0"
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
        // height: 150,
        // width: 200,
        marginTop: 60,
        width: 300,
        alignSelf: "center"
    },
    button: {
        width: "35%",
        height: 50,
        backgroundColor: "#4ea2b5",
        borderRadius: 30,
        paddingHorizontal: 16,
        alignSelf: "center",
    },
    buttonContainer: {
        marginTop: 100,
        marginHorizontal: 32,
        flexDirection: "row",
        alignSelf: "center"
    },
    textContainer: {
        alignItems: "center",
        padding: 20,
        paddingHorizontal: 30
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        lineHeight: 50,
    }
});