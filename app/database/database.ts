import { Firestore_db } from "./firestore_db"
import { Local_TestData } from "./local_TestData"
import { MedicineDataModel } from "../models/medicineDataModel"

import { MedicinePanelViewFactory } from "../factories/medicinePanelViewFactory"

export class Database {

    // This is a mess because we need to implement a promise, or wait/async....
    database: Firestore_db | Local_TestData;

    getMedicineCollection(): void {

        this.database = new Firestore_db();

        if (!this.database) {
            this.database = new Local_TestData();
            return; // this.database.getTestCollection();
        }

        let medicineCollection: Array<MedicineDataModel> = new Array<MedicineDataModel>();

        let medicineCollectionRef = this.database.initialize();

        medicineCollectionRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let medicineCategory: MedicineDataModel = new MedicineDataModel(doc.get("category"), doc.get("medicines"));
                medicineCollection.push(medicineCategory);
            });
            // This is where the complication comes in, we need async or promise here...
            let medicinePanelViews: HTMLElement[] = new MedicinePanelViewFactory().createMedicinePanelViews_Model(medicineCollection);

            medicinePanelViews.forEach(view => {
                $('#medicine-panel').append(view);
            });
        });
        //return medicineCollection;
    };

    getMedicineCollectionAsync(): Promise<Array<MedicineDataModel>> {

        return new Promise<Array<MedicineDataModel>>(function (resolve) {
            let database = new Firestore_db();

            if (!database) {
                resolve(new Local_TestData().getTestCollection());
            }

            let medicineCollection: Array<MedicineDataModel> = new Array<MedicineDataModel>();

            let medicineCollectionRef = database.initialize();

            medicineCollectionRef.get().then((querySnapshot: any) => {
                querySnapshot.forEach((doc: any) => {
                    let medicineCategory: MedicineDataModel = new MedicineDataModel(doc.get("category"), doc.get("medicines"));
                    medicineCollection.push(medicineCategory);
                });
                resolve(medicineCollection);
            });
        })
    };
};
