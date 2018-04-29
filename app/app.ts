import { PharmcistDashboardController } from "./controllers/pharmcistDashboardController"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let pharmDashboardController = new PharmcistDashboardController();
    
    pharmDashboardController.buildPharmacistDashboardAsync();

    $(document).on('click', '.medicine-selector', function (e) {
        pharmDashboardController.selectMedicine(e);
    });

    $(document).on('click', '.language-selector', function (e) {
        let language: string | null = e.target.textContent !== null ? e.target.textContent : "null";
        pharmDashboardController.selectLanguage(language);
    });
});

