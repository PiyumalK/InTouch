import firebase from 'firebase'

class Firebase {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDQh_hRn0crczLdXdfdl5aCXnu_Jv0JF0g",
                authDomain: "chatapp-3a71c.firebaseapp.com",
                databaseURL: "https://chatapp-3a71c.firebaseio.com",
                projectId: "chatapp-3a71c",
                storageBucket: "chatapp-3a71c.appspot.com",
                messagingSenderId: "1053255271333",
                appId: "1:1053255271333:web:f7eaaadbe7d8aaea485e4c",
                measurementId: "G-P9S9076TWJ"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };
            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    }

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    // get name() {
    //     return firebase.database().ref("users/" +  + "name")
    // }
}

export default new Firebase();