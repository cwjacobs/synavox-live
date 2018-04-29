import { PharmcistDashboardController } from "./controllers/pharmcistDashboardController"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let pharmcistDashboardController = new PharmcistDashboardController();
    
    pharmcistDashboardController.buildPharmacistDashboardAsync();

    $(document).on('click', '.medicine-selector', function (e) {
        pharmcistDashboardController.selectMedicine(e);
    });

    $(document).on('click', '.language-selector', function (e) {
        let language: string | null = e.target.textContent !== null ? e.target.textContent : "null";
        pharmcistDashboardController.selectLanguage(language);
    });

    $('#restore-data').click(function (e) {
        // firestore_db.restoreDefaultData(medicineCategoriesRef);
    });
});

