import { Language } from "./language";
import { Local_TestData } from "./database/local_TestData";
import { MedicinePanelViewFactory } from "./factories/medicinePanelViewFactory"
import { Medicine } from "./medicine"
import { MedicinePanelController } from "./controllers/medicinePanelController"
import { Firestore_niq } from "./database/firestore_db"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let firestore_niq = new Firestore_niq();
    firestore_niq.initialize();

    let medicinePanelController: MedicinePanelController = new MedicinePanelController();

    let testData: Local_TestData = new Local_TestData();
    let json: string = testData.getJsonData();
    
    let medicinePanelViews: Array<HTMLElement> = new MedicinePanelViewFactory().createMedicinePanelViews(json);

    medicinePanelViews.forEach(view => {
        $('#medicine-panel').append(view);
    })

    let english: Language = new Language('English', 'bg-primary');
    let spanish: Language = new Language('Spanish', 'bg-warning');
    let mandarin: Language = new Language('Mandarin', 'bg-danger');

    $('.medicine-selector').click(function (e) {
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

