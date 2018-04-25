import { Language } from "./language";
import { TestData } from "./testData";
import { MedicinePanelViewFactory } from "./factories/medicinePanelViewFactory"
import { Medicine } from "./medicine"
import { MedicinePanelController } from "./controllers/medicinePanelController"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let MedicineController: MedicinePanelController = new MedicinePanelController();

    let testData: TestData = new TestData();
    let json: string = testData.getJsonData();
    let medicinePanelViews: Array<HTMLElement> = new MedicinePanelViewFactory().createMedicinePanelViews(json);

    medicinePanelViews.forEach(view => {
        $('#medicine-panel').append(view);
    })

    let english: Language = new Language('English', 'bg-primary');
    let spanish: Language = new Language('Spanish', 'bg-warning');
    let mandarin: Language = new Language('Mandarin', 'bg-danger');

    $('.medicine-selector').click(function (e) {
        MedicineController.select(e);
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

    $('#x').click(function (e) {
        //    e.preventDefault();

        //    var audio = [];
        //    audio["walk"] = new Audio();
        //    audio["walk"].src = "C:/Users/cjaco/source/repos/Synavox/Synavox Live/resources/audio/Atorvastatin.mp3";
        //    audio["walk"].addEventListener('load', function () {
        //        audio["walk"].load();
        //        audio["walk"].play();
        //    });
    });

});

