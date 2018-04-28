import { Language } from "./language";
import { Local_TestData } from "./database/local_TestData";
import { MedicinePanelViewFactory } from "./factories/medicinePanelViewFactory"
import { Medicine } from "./medicine"
import { MedicinePanelController } from "./controllers/medicinePanelController"
import { Firestore_db } from "./database/firestore_db"
import { MedicineDataModel } from "./models/medicineDataModel"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let firestore_db = new Firestore_db();
    let medicineCategoriesRef = firestore_db.initialize();

    let medicineArray: Array<MedicineDataModel> = new Array<MedicineDataModel>();

    let medicinePanelViews: Array<HTMLElement>;

    let medicinePanelController: MedicinePanelController = new MedicinePanelController();

    let medicineViewFactory: MedicinePanelViewFactory = new MedicinePanelViewFactory();

    medicineCategoriesRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`id: ${doc.id}`);
            // console.log(`data: ${doc.data}`);
            console.log(`Get category: ${doc.get("category")}`);
            console.log(`Get medicines: ${doc.get("medicines")}`);
            console.log();

            console.log(`building medicine model`);
            let medicine: MedicineDataModel = new MedicineDataModel(doc.get("category"), doc.get("medicines"));
            console.log(medicine);
            
            // let view = medicineViewFactory.createMedicinePanelView_Model(medicine);
            // $('#medicine-panel').append(view);

            medicineArray.push(medicine);
        });

        medicinePanelViews = medicineViewFactory.createMedicinePanelViews_Model(medicineArray);
        //medicinePanelViews = new MedicinePanelViewFactory().createMedicinePanelViews_Model(medicineArray);
        // console.log(medicinePanelViews);

        medicinePanelViews.forEach(view => {
            $('#medicine-panel').append(view);
        });

        console.log("Medicine Panel Created");
    });

    // let testData: Local_TestData = new Local_TestData();
    // let json: string = testData.getJsonData();
    // medicinePanelViews = new MedicinePanelViewFactory().createMedicinePanelViews_Json(json);


    // medicinePanelViews.forEach(view => {
    //     $('#medicine-panel').append(view);
    // })

    let english: Language = new Language('English', 'bg-primary');
    let spanish: Language = new Language('Spanish', 'bg-warning');
    let mandarin: Language = new Language('Mandarin', 'bg-danger');

    $(document).on('click', '.medicine-selector', function (e) {
        medicinePanelController.selectMedicine(e);
    });

    $('#Warfarin').click(function (e) {
        medicinePanelController.selectMedicine(e);
    });

    $('#SelectEnglish').click(function (e) {
        english.select(e);
    });

    $('#SelectSpanish').click(function (e) {
        spanish.select(e);
    });

    $('#SelectMandarin').click(function (e) {
        mandarin.select(e);
    });

    $('#restore-data').click(function (e) {
        firestore_db.restoreDefaultData(medicineCategoriesRef);
    });

    // $('#selected-medicine-info').click(function (e) {
    //        e.preventDefault();

    //        let audio: any = [];
    //        audio["walk"] = new Audio();
    //        audio["walk"].src = "C:/Users/cjaco/source/repos/Synavox/Synavox Live/resources/audio/Atorvastatin.mp3";
    //        audio["walk"].addEventListener('load', function () {
    //            audio["walk"].load();
    //            audio["walk"].play();
    //        });
    // });

});

