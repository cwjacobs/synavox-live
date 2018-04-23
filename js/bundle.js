(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./language":2,"./medicine":3,"./medicineCategory":4}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language = (function () {
    function Language(name, cssClass) {
        this.name = name;
        this.cssClass = cssClass;
    }
    ;
    Language.prototype.select = function (e) {
        var self = this;
        e.preventDefault();
        $('.selected-medicine-language').removeClass('bg-primary').removeClass('bg-warning').removeClass('bg-danger').addClass(self.cssClass).text(self.name).show();
        $('#download').removeClass('bg-primary').removeClass('bg-warning').removeClass('bg-danger').addClass(self.cssClass).text(self.name).show();
    };
    return Language;
}());
exports.Language = Language;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medicine = (function () {
    function Medicine(name) {
        this.name = name;
    }
    Medicine.prototype.select = function (e) {
        e.preventDefault();
        var self = this;
        $('.selected-medicine-name').fadeOut(500)
            .promise()
            .progress(function (data) {
            alert('progress');
        });
        $('.selected-medicine-name').fadeOut(500)
            .promise()
            .done(function (data) {
            $('.selected-medicine-name').text(self.name);
            $('.selected-medicine-name').fadeIn(500);
        })
            .fail(function (data) {
            alert('fail');
        })
            .progress(function (data) {
            alert('progress');
        });
    };
    ;
    return Medicine;
}());
exports.Medicine = Medicine;
;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MedicineCategory = (function () {
    function MedicineCategory(name) {
        this.name = name;
    }
    return MedicineCategory;
}());
exports.MedicineCategory = MedicineCategory;
;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLnRzIiwiYXBwL2xhbmd1YWdlLnRzIiwiYXBwL21lZGljaW5lLnRzIiwiYXBwL21lZGljaW5lQ2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FDLHVDQUFzQztBQUN2Qyx1REFBc0Q7QUFDdEQsdUNBQXNDO0FBS3RDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFZCxJQUFJLGdCQUFnQixHQUFxQixJQUFJLG1DQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTdFLElBQUksWUFBWSxHQUFhLElBQUksbUJBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxJQUFJLFlBQVksR0FBYSxJQUFJLG1CQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsSUFBSSxPQUFPLEdBQWEsSUFBSSxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELElBQUksT0FBTyxHQUFhLElBQUksbUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVoRCxJQUFJLE9BQU8sR0FBYSxJQUFJLG1CQUFRLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlELElBQUksT0FBTyxHQUFhLElBQUksbUJBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsSUFBSSxRQUFRLEdBQWEsSUFBSSxtQkFBUSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUUvRCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDaEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FB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LHlCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO2FBRUQsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBRUQsUUFBUSxDQUFDLFVBQVUsSUFBSTtZQUNwQixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQUEsQ0FBQztJQUNOLGVBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLDRCQUFRO0FBcUNwQixDQUFDOzs7O0FDckNGO0lBQ0ksMEJBQXFCLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQ2pDLENBQUM7SUFDTCx1QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksNENBQWdCO0FBRzVCLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCLvu79pbXBvcnQgeyBNZWRpY2luZSB9IGZyb20gXCIuL21lZGljaW5lXCI7XHJcbmltcG9ydCB7IE1lZGljaW5lQ2F0ZWdvcnkgfSBmcm9tIFwiLi9tZWRpY2luZUNhdGVnb3J5XCI7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSBcIi4vbGFuZ3VhZ2VcIjtcclxuXHJcbi8vLy8gPHJlZmVyZW5jZSBwYXRoID1cIi4vbWVkaWNpbmVDYXRlZ29yeS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aCA9XCIuLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIvPlxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBtZWRpY2luZUNhdGVnb3J5OiBNZWRpY2luZUNhdGVnb3J5ID0gbmV3IE1lZGljaW5lQ2F0ZWdvcnkoJ0Nob2xlc3Rlcm9sJyk7XHJcblxyXG4gICAgbGV0IGF0b3J2YXN0YXRpbjogTWVkaWNpbmUgPSBuZXcgTWVkaWNpbmUoJ0F0b3J2YXN0YXRpbicpO1xyXG4gICAgbGV0IHJvc3V2YXN0YXRpbjogTWVkaWNpbmUgPSBuZXcgTWVkaWNpbmUoJ1Jvc3V2YXN0YXRpbicpO1xyXG4gICAgbGV0IGNyZXN0b3I6IE1lZGljaW5lID0gbmV3IE1lZGljaW5lKCdDcmVzdG9yJyk7XHJcbiAgICBsZXQgbGlwaXRvcjogTWVkaWNpbmUgPSBuZXcgTWVkaWNpbmUoJ0xpcGl0b3InKTtcclxuXHJcbiAgICBsZXQgZW5nbGlzaDogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoJ0VuZ2xpc2gnLCAnYmctcHJpbWFyeScpO1xyXG4gICAgbGV0IHNwYW5pc2g6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCdTcGFuaXNoJywgJ2JnLXdhcm5pbmcnKTtcclxuICAgIGxldCBtYW5kYXJpbjogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoJ01hbmRhcmluJywgJ2JnLWRhbmdlcicpO1xyXG5cclxuICAgICQoJyNhdG9ydmFzdGF0aW4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGF0b3J2YXN0YXRpbi5zZWxlY3QoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjcm9zdXZhc3RhdGluJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByb3N1dmFzdGF0aW4uc2VsZWN0KGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2NyZXN0b3InKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNyZXN0b3Iuc2VsZWN0KGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2xpcGl0b3InKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxpcGl0b3Iuc2VsZWN0KGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI1NlbGVjdEVuZ2xpc2gnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGVuZ2xpc2guc2VsZWN0KGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI1NlbGVjdFNwYW5pc2gnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNwYW5pc2guc2VsZWN0KGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI1NlbGVjdE1hbmRhcmluJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBtYW5kYXJpbi5zZWxlY3QoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjeCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyAgICB2YXIgYXVkaW8gPSBbXTtcclxuICAgICAgICAvLyAgICBhdWRpb1tcIndhbGtcIl0gPSBuZXcgQXVkaW8oKTtcclxuICAgICAgICAvLyAgICBhdWRpb1tcIndhbGtcIl0uc3JjID0gXCJDOi9Vc2Vycy9jamFjby9zb3VyY2UvcmVwb3MvU3luYXZveC9TeW5hdm94IExpdmUvcmVzb3VyY2VzL2F1ZGlvL0F0b3J2YXN0YXRpbi5tcDNcIjtcclxuICAgICAgICAvLyAgICBhdWRpb1tcIndhbGtcIl0uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgICAgYXVkaW9bXCJ3YWxrXCJdLmxvYWQoKTtcclxuICAgICAgICAvLyAgICAgICAgYXVkaW9bXCJ3YWxrXCJdLnBsYXkoKTtcclxuICAgICAgICAvLyAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcbmZ1bmN0aW9uIG5ld0Z1bmN0aW9uKG1lZGljaW5lQ2F0ZWdvcnk6IE1lZGljaW5lQ2F0ZWdvcnkpIHtcclxuICAgIGNvbnNvbGUubG9nKG1lZGljaW5lQ2F0ZWdvcnkubmFtZSk7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBuYW1lOiBzdHJpbmcsIHJlYWRvbmx5IGNzc0NsYXNzOiBzdHJpbmcpIHtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZWN0KGU6IEpRdWVyeS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJy5zZWxlY3RlZC1tZWRpY2luZS1sYW5ndWFnZScpLnJlbW92ZUNsYXNzKCdiZy1wcmltYXJ5JykucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKS5yZW1vdmVDbGFzcygnYmctZGFuZ2VyJykuYWRkQ2xhc3Moc2VsZi5jc3NDbGFzcykudGV4dChzZWxmLm5hbWUpLnNob3coKTtcclxuICAgICAgICBcclxuICAgICAgICAkKCcjZG93bmxvYWQnKS5yZW1vdmVDbGFzcygnYmctcHJpbWFyeScpLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2JnLWRhbmdlcicpLmFkZENsYXNzKHNlbGYuY3NzQ2xhc3MpLnRleHQoc2VsZi5uYW1lKS5zaG93KCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTWVkaWNpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGU6IEpRdWVyeS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gVXNpbmcgdGhlbiAobm90IGFzIGNsZWFyIHRvIG1lKVxyXG4gICAgICAgICQoJy5zZWxlY3RlZC1tZWRpY2luZS1uYW1lJykuZmFkZU91dCg1MDApXHJcbiAgICAgICAgICAgIC5wcm9taXNlKClcclxuXHJcbiAgICAgICAgICAgIC5wcm9ncmVzcyhmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVc2luZyBkb25lLCBmYWlsIGFuZCBwcm9ncmVzcyAobXVjaCBtb3JlIGNsZWFyIHRvIG1lKVxyXG4gICAgICAgICQoJy5zZWxlY3RlZC1tZWRpY2luZS1uYW1lJykuZmFkZU91dCg1MDApXHJcbiAgICAgICAgICAgIC5wcm9taXNlKClcclxuXHJcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlbGVjdGVkLW1lZGljaW5lLW5hbWUnKS50ZXh0KHNlbGYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0ZWQtbWVkaWNpbmUtbmFtZScpLmZhZGVJbig1MDApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdmYWlsJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAucHJvZ3Jlc3MoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdwcm9ncmVzcycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcbn07IiwiZXhwb3J0IGNsYXNzIE1lZGljaW5lQ2F0ZWdvcnkge1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB9XHJcbn07Il19
