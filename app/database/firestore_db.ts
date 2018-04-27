import * as firebase from 'firebase';
import 'firebase/firestore';

export class Firestore_niq {

    app: firebase.app.App;

    initialize(): void {

        const settings = { timestampsInSnapshots: true };

        const firebaseConfig = {
            apiKey: "AIzaSyDWoBUhqcPPNNsHGPM1x5eI6gRRYTXNWPM",
            authDomain: "synavox-live.firebaseapp.com",
            databaseURL: "https://synavox-live.firebaseio.com",
            projectId: "synavox-live",
            storageBucket: "synavox-live.appspot.com",
            messagingSenderId: "341085923340"
        };

        this.app = firebase.initializeApp(firebaseConfig, "synavox-live");

        const firestore = firebase.firestore(this.app);
        firestore.settings(settings);

        var employeesRef = firestore.collection("employees");

        console.log(`Firebase app name: ${this.app.name}`);

        employeesRef.doc("A.Einstein").set({
            fName: "Albert",
            lName: "Einstein",
            email: "aeinstein@yale.edu",
            age: 39,
            gender: "Male",
            yearsOfExperience: 10,
            isFullTime: true,
        });
    }
}

