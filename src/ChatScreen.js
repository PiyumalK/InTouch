import React from 'react'
import { Platform, KeyboardAvoidingView, SafeAreaView, } from 'react-native'
import { GiftedChat, Send } from 'react-native-gifted-chat'
import Firebase from '../Firebase'
import { Ionicons } from '@expo/vector-icons'
// import firebase from 'firebase'

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

    renderSend = (props) => {
        return (
            <Send
                {...props}
                containerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 20
                }}
            >
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
                        // loadEarlier={true}
                        renderUsernameOnMessage={true}
                        renderSend={this.renderSend}
                        renderAvatarOnTop={true}
                    />;

        if(Platform.OS === 'android') {
            return(
                <KeyboardAvoidingView
                    style={{ flex: 1, marginTop: 30, }}
                    // behavior="padding"
                    keyboardVerticalOffset={30}
                    enabled
                >
                    {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={{ flex:1, }}>{chat}</SafeAreaView>
    }
}