import { Medicine } from "./medicine";
import { MedicineCategory } from "./medicineCategory";

//// <reference path ="./medicineCategory.ts"/>
/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let medicineCategory: MedicineCategory = new MedicineCategory('Cholesterol');
    
    let atorvastatin: Medicine = new Medicine('Atorvastatin');
    let rosuvastatin: Medicine = new Medicine('Rosuvastatin');
    let crestor: Medicine = new Medicine('Crestor');
    let lipitor: Medicine = new Medicine('Lipitor');

    $('#atorvastatin').click(function (e) {
        atorvastatin.select(e);
    });

    $('#rosuvastatin').click(function (e) {
        rosuvastatin.select(e);
    });

    $('#crestor').click(function (e) {
        crestor.select(e);
    });

    $('#lipitor').click(function (e) {
        lipitor.select(e);
    });

    $('#SelectEnglish').click(function (e) {
        e.preventDefault();

        $('.selected-medicine-language').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-primary').text('English').show();
        $('#download').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-primary').show();
    });

    $('#SelectSpanish').click(function (e) {
        e.preventDefault();

        $('.selected-medicine-language').removeClass('bg-primary').removeClass('bg-danger').addClass('bg-warning').text('Spanish').show();
        $('#download').removeClass('bg-primary').removeClass('bg-danger').addClass('bg-warning').show();
    });

    $('#SelectMandarin').click(function (e) {
        e.preventDefault();

        $('.selected-medicine-language').removeClass('bg-primary').removeClass('bg-warning').addClass('bg-danger').text('Mandarin').show();
        $('#download').removeClass('bg-primary').removeClass('bg-warning').addClass('bg-danger').show();
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
function newFunction(medicineCategory: MedicineCategory) {
    console.log(medicineCategory.name);
}

