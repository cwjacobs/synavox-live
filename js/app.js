"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medicine_1 = require("./medicine");
var medicineCategory_1 = require("./medicineCategory");
var language_1 = require("./language");
$(document).ready(function () {
    var medicineCategory = new medicineCategory_1.MedicineCategory('Cholesterol');
    var atorvastatin = new medicine_1.Medicine('Atorvastatin');
    var rosuvastatin = new medicine_1.Medicine('Rosuvastatin');
    var crestor = new medicine_1.Medicine('Crestor');
    var lipitor = new medicine_1.Medicine('Lipitor');
    var english = new language_1.Language('English', 'bg-primary');
    var spanish = new language_1.Language('Spanish', 'bg-warning');
    var mandarin = new language_1.Language('Mandarin', 'bg-danger');
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
        english.select(e);
    });
    $('#SelectSpanish').click(function (e) {
        spanish.select(e);
    });
    $('#SelectMandarin').click(function (e) {
        mandarin.select(e);
    });
    $('#x').click(function (e) {
    });
});
function newFunction(medicineCategory) {
    console.log(medicineCategory.name);
}
//# sourceMappingURL=app.js.map