import React from 'react'
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
                    <Image style={styles.image} source={require("../assets/chat.png")} />
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>InTouch</Text>
                    <View style={{ height: 20 }} />
                    <TouchableOpacity style={styles.button} onPress={this.Login}>
                        <Text style={{
                            fontSize: 25,
                            textAlign: "center",
                        }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ height: 20 }} />
                    <TouchableOpacity style={styles.button} onPress={this.SignUp}>
                        <Text style={{
                            fontSize: 25,
                            textAlign: "center",
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
    button: {
        height: 50,
        backgroundColor: "#9075E3",
        borderRadius: 30,
        paddingHorizontal: 16,
    }
});