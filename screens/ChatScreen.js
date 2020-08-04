import React from 'react'
import { Platform, KeyboardAvoidingView, SafeAreaView, StyleSheet, View } from 'react-native'
import { GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import Firebase from '../Firebase'
import { Ionicons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from 'firebase'

import { YellowBox } from 'react-native';
import _ from 'lodash';
import { TouchableOpacity } from 'react-native-gesture-handler'

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class ChatScreen extends React.Component {
    state = {
        messages: []
    }
    
    // readUserData() {
    //     firebase
    //     .database()
    //     .ref("users/" + firebase.auth().currentUser.uid)
    //     .on("value", (snapshot) => {
    //         console.log(snapshot.val().name)
    //         return snapshot.val().name
    //     })
    // }

    // readUserData() {
    //     firebase.firestore()
    //     .collection("users")
    //     .doc("users")
    //     .get()
    //     .then((doc) => {
    //         if(doc.exists) console.log(doc.data())
    //         else console.log("Not found")
    //     })
    //     .catch((err) => {
    //         alert(err)
    //     })
    // }

    get user() {
        return {
            _id: Firebase.uid,
            name: this.props.navigation.state.params.name
        }
    }


    componentDidMount() {
        Firebase.get(message => 
            this.setState(previous => ({
                messages: GiftedChat.append(previous.messages, message)
            }))
        );
    }

    componentWillUnmount() {
        Firebase.off()
    }

    customInputToolbar = props => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    marginRight: 1
                }}
            />
        )
    }

    renderSend = (props) => {
        return (
            <Send {...props}>
                <TouchableOpacity>
                    <Ionicons
                        name="md-send"
                        size={35}
                        color="#81bdca"
                        />
                </TouchableOpacity>
            </Send>
        )
    }

    render() {
        const chat = <GiftedChat
                        messages={this.state.messages}
                        onSend={Firebase.send}
                        user={this.user}
                        alwaysShowSend={true}
                        loadEarlier={true}
                        renderUsernameOnMessage={true}
                        // renderInputToolbar={props => this.customInputToolbar(props)}
                        // renderSend={props => this.customSend(props)}
                        renderSend={this.renderSend}
                    />;

        // if(Platform.OS === 'android') {
        //     return(
        //         <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={30} enabled>
        //             {chat}
        //         </KeyboardAvoidingView>
        //         // <KeyboardAwareScrollView>
        //         //     {chat}
        //         // </KeyboardAwareScrollView>
        //     );
        // }

        return <SafeAreaView style={{ flex:1 }}>{chat}</SafeAreaView>
        // return <SafeAreaView style={styles.container}>{chat}</SafeAreaView>
        // return <View style={styles.container}>{chat}</View>
        
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#F4F5F7"
    }
})