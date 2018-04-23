"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medicine_1 = require("./medicine");
var medicineCategory_1 = require("./medicineCategory");
$(document).ready(function () {
    var medicineCategory = new medicineCategory_1.MedicineCategory('Cholesterol');
    console.log(medicineCategory.name);
    console.log('\n');
    var atorvastatin = new medicine_1.Medicine('Atorvastatin');
    var rosuvastatin = new medicine_1.Medicine('Rosuvastatin');
    var crestor = new medicine_1.Medicine('Crestor');
    var lipitor = new medicine_1.Medicine('Lipitor');
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
    });
});
//# sourceMappingURL=app.js.map