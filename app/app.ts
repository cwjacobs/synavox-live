import { Language } from "./language";
import { PharmcistDashboardController } from "./controllers/pharmcistDashboardController"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let pharmcistDashboardController = new PharmcistDashboardController();
    //pharmcistDashboardController.buildPharmacistDashboard();
    pharmcistDashboardController.buildPharmacistDashboardAsync();

    let english: Language = new Language('English', 'bg-primary');
    let spanish: Language = new Language('Spanish', 'bg-warning');
    let mandarin: Language = new Language('Mandarin', 'bg-danger');

    $(document).on('click', '.medicine-selector', function (e) {
        pharmcistDashboardController.selectMedicine(e);
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
        // firestore_db.restoreDefaultData(medicineCategoriesRef);
    });
});

