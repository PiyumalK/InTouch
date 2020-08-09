import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, ImageBackground } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions'
import { Button, Text } from 'galio-framework'

import { YellowBox, Dimensions } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class HomeScreen extends React.Component {

    Login = () => {
        this.props.navigation.navigate("Login")
    }

    SignUp = () => {
        this.props.navigation.navigate("SignUp")
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
                <View style={styles.container}>
                    <View style={{ flex: 3,}}>
                        <View style={styles.circle} />
                        <View style={{flex:2, alignItems: "baseline"}}>
                            <Image style={styles.image} source={require("../assets/logo.png")} />
                        </View>
                        <View style={{flex:1, flexDirection: "row"}}>
                            <View style={{flex:1}}></View>
                            <View style={{flex:1, alignContent: "flex-start"}}>
                                <Text style={styles.owner}>Presented by:</Text>
                                <Text style={styles.owner}>D.M.P.P.B. Karunathilaka</Text>
                                <Text style={styles.owner}>17000793</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 3, textAlignVertical: "center" }}>
                        <Text h5 italic style={styles.text}>Welcome to InTouch...</Text>
                    </View>

                    <View style={{ flex: 2, flexDirection: "row", alignItems: "center"}}>
                        <View style={{flex:1}}>
                            <Button 
                                onPress={this.Login}
                                style={styles.button}
                                color= "#50C7C7"
                                round
                                size= "large"
                                >
                                LOG IN
                            </Button>
                        </View>

                        <View style={{flex:1}}>
                            <Button 
                                onPress={this.SignUp}
                                style={styles.button}
                                color= "#50C7C7"
                                round
                                size= "large"
                                >
                                SIGN UP
                            </Button>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        // backgroundColor: "#81bdca",
        marginTop: getStatusBarHeight(),
    },
    background: {
        flex: 1,
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        marginTop: getStatusBarHeight(),
    },
    circle: {
        width: responsiveWidth(120),
        height: responsiveHeight(60),
        borderRadius: 250,
        backgroundColor: "#FFF",
        position: "absolute",
        right: -120,
        
    },
    image: {
        width: "75%",
        alignSelf: "center",
    },
    button: {
        width: "75%",
        alignSelf: "center"
    },
    textContainer: {
        alignItems: "center",
        // padding: 20,
        paddingHorizontal: 30,
        // marginTop: 40,
    },
    text: {
        textAlign: "center",
        alignContent: "center",
        marginTop: 50
    },
    owner: {
        fontSize: 14,
    }
});