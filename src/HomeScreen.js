import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, } from 'react-native'
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
        // return (
        //     <SafeAreaView style={styles.container}>
        //         {/* <Image style={styles.background} source={require("../assets/background.jpg")}></Image> */}
        //         {/* <View style={styles.circle} /> */}

        //         <View style={{ backgroundColor: "skyblue"}}>
        //             <View>
        //                 <Image style={styles.image} source={require("../assets/logo.png")} />
        //             </View>
        //             <View style={styles.owner}>
        //                 <Text>Presented by:</Text>
        //                 <Text>D.M.P.P.B. Karunathilaka</Text>
        //                 <Text>17000793</Text>
        //             </View>
        //         </View>

        //         {/* <View style={styles.textContainer}> */}
        //             {/* <Text style={styles.text}>Welcome to In-Touch!</Text> */}
        //             {/* <View style={{ height: 40 }}></View> */}
        //             {/* <Text style={styles.text}>Let's get you started</Text>
        //             <Text style={styles.text}>Sign up to stay in touch with your loved ones</Text> */}
        //         {/* </View> */}
        //         <View style={styles.buttonContainer}>
        //             <TouchableOpacity style={styles.button} onPress={this.Login}>
        //                 <Text style={{
        //                     fontSize: 20,
        //                     textAlign: "center",
        //                     color: "#FFF"
        //                 }}>Login</Text>
        //             </TouchableOpacity>
        //             <View style={{ width: 20 }} />
        //             <TouchableOpacity style={styles.button} onPress={this.SignUp}>
        //                 <Text style={{
        //                     fontSize: 20,
        //                     textAlign: "center",
        //                     color: "#FFF"
        //                 }}>Sign Up</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </SafeAreaView>
        // )

        return (
            <View style={{
                height: Dimensions.get("window").height,
                width: Dimensions.get("window").width,
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "column",
                // backgroundColor: "#81bdca",
                marginTop: getStatusBarHeight(),
            }}>
                <View style={{ flex: 3, backgroundColor: "powderblue"}}>
                    <View style={{flex:2}}>
                        <Image style={styles.image} source={require("../assets/logo.png")} />
                    </View>
                    <View style={{flex:1, flexDirection: "row"}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:1}}>
                            <Text>Presented by:</Text>
                            <Text>D.M.P.P.B. Karunathilaka</Text>
                            <Text>17000793</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 3, backgroundColor: "skyblue", textAlignVertical: "center" }}>
                    <Text h5 italic style={styles.text}>Welcome to InTouch...</Text>
                </View>

                <View style={{ flex: 2, flexDirection: "row", backgroundColor: "powderblue", alignItems: "center"}}>
                    <View style={{flex:1}}>
                        <Button 
                            onPress={this.Login}
                            style={styles.button}
                            color= "#50C7C7"
                            round
                            size= "large"
                            uppercase= "true"
                            >
                            Log In
                        </Button>
                    </View>

                    <View style={{flex:1}}>
                        <Button 
                            onPress={this.SignUp}
                            style={styles.button}
                            color= "#50C7C7"
                            round
                            size= "large"
                            uppercase= "true"
                        >
                            Sign Up
                        </Button>
                    </View>
                </View>

            </View>
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
        height: responsiveHeight(100),
        width: responsiveWidth(100),
    },
    circle: {
        // width: 500,
        width: responsiveWidth(120),
        height: 500,
        borderRadius: 250,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20,
        marginTop: getStatusBarHeight()
    },
    image: {
        // height: 150,
        // width: 200,
        // marginTop: 20,
        width: "75%",
        alignSelf: "center",
    },
    button: {
        // width: "50%",
        // height: 50,
        // backgroundColor: "#4ea2b5",
        // borderRadius: 30,
        // paddingHorizontal: 16,
        // alignSelf: "center",
        // textAlignVertical: "center"
        // height: "50%",
        width: "75%",
        alignSelf: "center"
    },
    buttonContainer: {
        // flex: 1,
        marginTop: 100,
        // marginHorizontal: 32,
        flexDirection: "row",
        // alignSelf: "center",
        backgroundColor: "powderblue",
        width: Dimensions.get("screen").width,
        alignItems: "center"
    },
    textContainer: {
        alignItems: "center",
        // padding: 20,
        paddingHorizontal: 30,
        // marginTop: 40,
    },
    text: {
        textAlign: "center",
        lineHeight: 50,
        alignContent: "center"
    },
    owner: {
        fontSize: 20,
        marginLeft: 25,
        marginTop: -50,
        marginLeft: 230,
    }
});