import * as firebase from 'firebase';
import 'firebase/firestore';

export class Firestore_db {

    mainApp: firebase.app.App;

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

        this.mainApp = firebase.initializeApp(firebaseConfig, "synavox-live");

        const firestore = firebase.firestore(this.mainApp);
        firestore.settings(settings);

        var medicineCategoriesRef = firestore.collection("medicineCategories");

        console.log(`Firebase app name: ${this.mainApp.name}`);

        const setOptions = {
            merge: true
        };

        medicineCategoriesRef.doc("Cholesterol").set({
            category: "Cholesterol",
            medicines: ["Atorvastatin", "Rosuvastatin", "Lipitor", "Crestor"],
        }, setOptions);

        medicineCategoriesRef.doc("Hypertension").set({
            category: "Hypertension",
            medicines: ["Lisinopril", "Amlodipine", "Benicar", "Losartan", "Carvedilol"],
        }, setOptions);

        medicineCategoriesRef.doc("Diabetes-Type1").set({
            category: "Diabetes-Type1",
            medicines: ["Apidra", "Lantus", "Humalog", "Novalog"],
        }, setOptions);

        medicineCategoriesRef.doc("Diabetes-Type2").set({
            category: "Diabetes-Type2",
            medicines: ["Victoza", "Januvia", "Metformin", "Glucophage"],
        }, setOptions);

        medicineCategoriesRef.doc("Anticoagulants").set({
            category: "Anticoagulants",
            medicines: ["Warfarin", "Acenocoumarol ", "Phenprocoumon", "Dabigatran", "Apixaban"],
        }, setOptions);
    }
}

