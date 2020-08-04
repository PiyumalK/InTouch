import React from 'react'
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Firebase from '../Firebase'
import firebase from 'firebase'
// import 'firebase/firestore'

import { YellowBox } from 'react-native';
import _ from 'lodash';

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
            // name: firebase.database().ref("users/" + Firebase.uid + "name")
            // name: this.readUserData()
            // name: firebase
            //         .database()
            //         .ref("users/" + firebase.auth().currentUser.uid)
            //         .on("value", (snapshot) => snapshot.val().name)
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

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Firebase.send} user={this.user} />;

        if(Platform.OS === 'android') {
            return(
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
    }
}

