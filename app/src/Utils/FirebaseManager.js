// Firebase App (the core Firebase SDK) is always required and
        // must be listed before other Firebase SDKs
        import { firebase } from '@firebase/app';

        // Add the Firebase products that you want to use
        require("firebase/auth");
        require("firebase/firestore");

class FirebaseManager {

    constructor () {

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyBcfxz80OLEXeDWWFyJUw30nSOldxA08_o",
            authDomain: "culie-88088.firebaseapp.com",
            databaseURL: "https://culie-88088-default-rtdb.firebaseio.com",
            projectId: "culie-88088",
            storageBucket: "culie-88088.appspot.com",
            messagingSenderId: "876071240737",
            appId: "1:876071240737:web:0f309f25c48cf37b260f60",
            measurementId: "G-X8JW6HS7W1"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }else {
            firebase.app(); // if already initialized, use that one
         }

        this.db = firebase.firestore()
    }

    async getPasswordForUID(uid) {
        if (uid.length == 0) {
            return false
        }
        const ref = this.db.collection('users').doc(uid);
        const doc = await ref.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
            return doc.data().password;
        }
    }

    async getName(uid) {
        const ref = this.db.collection('users').doc(uid);
        const doc = await ref.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          return doc.data().name.split(" ", 1);
        }
    }

    async registerNewUser(uid, obj) {
        const doc = this.db.collection('users').doc(uid);
        await doc.set(obj)
    }

    async userCompletedOnboarding(uid) {
        const ref = this.db.collection('users').doc(uid);
        const doc = await ref.get();
        if (!doc.exists) {
          console.log('No such document!');
          return false
        } else {
          return doc.data().completedOnboarding;
        }
    }


}

export default FirebaseManager