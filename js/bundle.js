(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./medicine":2,"./medicineCategory":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medicine = (function () {
    function Medicine(name) {
        this.name = name;
        console.log(this.name);
    }
    Medicine.prototype.select = function (e) {
        var self = this;
        e.preventDefault();
        $('.selected-medicine-name').fadeOut(500)
            .promise()
            .progress(function (data) {
            alert('progress');
        });
        $('.selected-medicine-name').fadeOut(500)
            .promise()
            .done(function (data) {
            console.log(self.name);
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
},{}],3:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLnRzIiwiYXBwL21lZGljaW5lLnRzIiwiYXBwL21lZGljaW5lQ2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FDLHVDQUFzQztBQUN2Qyx1REFBc0Q7QUFJdEQsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVkLElBQUksZ0JBQWdCLEdBQXFCLElBQUksbUNBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxCLElBQUksWUFBWSxHQUFhLElBQUksbUJBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxJQUFJLFlBQVksR0FBYSxJQUFJLG1CQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsSUFBSSxPQUFPLEdBQWEsSUFBSSxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELElBQUksT0FBTyxHQUFhLElBQUksbUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQXNCaEQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDaEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztJQUVILENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENB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LElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7YUFFRCxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ2hCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUM7YUFFRCxRQUFRLENBQUMsVUFBVSxJQUFJO1lBQ3BCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQSxDQUFDO0lBQ04sZUFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksNEJBQVE7QUFvQ3BCLENBQUM7Ozs7QUNwQ0Y7SUFFSSwwQkFBcUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFDakMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSw0Q0FBZ0I7QUFJNUIsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIu+7v2ltcG9ydCB7IE1lZGljaW5lIH0gZnJvbSBcIi4vbWVkaWNpbmVcIjtcclxuaW1wb3J0IHsgTWVkaWNpbmVDYXRlZ29yeSB9IGZyb20gXCIuL21lZGljaW5lQ2F0ZWdvcnlcIjtcclxuLy8vLyA8cmVmZXJlbmNlIHBhdGggPVwiLi9tZWRpY2luZUNhdGVnb3J5LnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoID1cIi4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIi8+XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IG1lZGljaW5lQ2F0ZWdvcnk6IE1lZGljaW5lQ2F0ZWdvcnkgPSBuZXcgTWVkaWNpbmVDYXRlZ29yeSgnQ2hvbGVzdGVyb2wnKTtcclxuICAgIGNvbnNvbGUubG9nKG1lZGljaW5lQ2F0ZWdvcnkubmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1xcbicpO1xyXG5cclxuICAgIGxldCBhdG9ydmFzdGF0aW46IE1lZGljaW5lID0gbmV3IE1lZGljaW5lKCdBdG9ydmFzdGF0aW4nKTtcclxuICAgIGxldCByb3N1dmFzdGF0aW46IE1lZGljaW5lID0gbmV3IE1lZGljaW5lKCdSb3N1dmFzdGF0aW4nKTtcclxuICAgIGxldCBjcmVzdG9yOiBNZWRpY2luZSA9IG5ldyBNZWRpY2luZSgnQ3Jlc3RvcicpO1xyXG4gICAgbGV0IGxpcGl0b3I6IE1lZGljaW5lID0gbmV3IE1lZGljaW5lKCdMaXBpdG9yJyk7XHJcblxyXG4gICAgLy8gbGV0IHNlbGY6IGFueSA9IHRoaXM7XHJcblxyXG4gICAgLy8gJCgnLmNhcmQnKS5kcmFnZ2FibGUoKTtcclxuXHJcblxyXG4gICAgLy8kKCcjYXRvcnZhc3RhdGluJykuaG92ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyAgICAkKCcjU2VsZWN0ZWRNZWRpY2luZUluZm8nKS5jc3MoJ2JhY2tncm91bmQnLCAncmVkJyk7XHJcblxyXG4gICAgLy99KTtcclxuXHJcbiAgICAvLyQoJyNhdG9ydmFzdGF0aW4nKS5tb3VzZWxlYXZlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gICAgJCgnI1NlbGVjdGVkTWVkaWNpbmVJbmZvJykuY3NzKCdiYWNrZ3JvdW5kJywgJ25vbmUnKTtcclxuXHJcbiAgICAvL30pO1xyXG5cclxuXHJcbiAgICAkKCcjYXRvcnZhc3RhdGluJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBhdG9ydmFzdGF0aW4uc2VsZWN0KGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3Jvc3V2YXN0YXRpbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcm9zdXZhc3RhdGluLnNlbGVjdChlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNjcmVzdG9yJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjcmVzdG9yLnNlbGVjdChlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNsaXBpdG9yJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsaXBpdG9yLnNlbGVjdChlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNTZWxlY3RFbmdsaXNoJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJy5zZWxlY3RlZC1tZWRpY2luZS1sYW5ndWFnZScpLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2JnLWRhbmdlcicpLmFkZENsYXNzKCdiZy1wcmltYXJ5JykudGV4dCgnRW5nbGlzaCcpLnNob3coKTtcclxuICAgICAgICAkKCcjZG93bmxvYWQnKS5yZW1vdmVDbGFzcygnYmctd2FybmluZycpLnJlbW92ZUNsYXNzKCdiZy1kYW5nZXInKS5hZGRDbGFzcygnYmctcHJpbWFyeScpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNTZWxlY3RTcGFuaXNoJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJy5zZWxlY3RlZC1tZWRpY2luZS1sYW5ndWFnZScpLnJlbW92ZUNsYXNzKCdiZy1wcmltYXJ5JykucmVtb3ZlQ2xhc3MoJ2JnLWRhbmdlcicpLmFkZENsYXNzKCdiZy13YXJuaW5nJykudGV4dCgnU3BhbmlzaCcpLnNob3coKTtcclxuICAgICAgICAkKCcjZG93bmxvYWQnKS5yZW1vdmVDbGFzcygnYmctcHJpbWFyeScpLnJlbW92ZUNsYXNzKCdiZy1kYW5nZXInKS5hZGRDbGFzcygnYmctd2FybmluZycpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNTZWxlY3RNYW5kYXJpbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKCcuc2VsZWN0ZWQtbWVkaWNpbmUtbGFuZ3VhZ2UnKS5yZW1vdmVDbGFzcygnYmctcHJpbWFyeScpLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJykuYWRkQ2xhc3MoJ2JnLWRhbmdlcicpLnRleHQoJ01hbmRhcmluJykuc2hvdygpO1xyXG4gICAgICAgICQoJyNkb3dubG9hZCcpLnJlbW92ZUNsYXNzKCdiZy1wcmltYXJ5JykucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKS5hZGRDbGFzcygnYmctZGFuZ2VyJykuc2hvdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3gnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gICAgdmFyIGF1ZGlvID0gW107XHJcbiAgICAgICAgLy8gICAgYXVkaW9bXCJ3YWxrXCJdID0gbmV3IEF1ZGlvKCk7XHJcbiAgICAgICAgLy8gICAgYXVkaW9bXCJ3YWxrXCJdLnNyYyA9IFwiQzovVXNlcnMvY2phY28vc291cmNlL3JlcG9zL1N5bmF2b3gvU3luYXZveCBMaXZlL3Jlc291cmNlcy9hdWRpby9BdG9ydmFzdGF0aW4ubXAzXCI7XHJcbiAgICAgICAgLy8gICAgYXVkaW9bXCJ3YWxrXCJdLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgIGF1ZGlvW1wid2Fsa1wiXS5sb2FkKCk7XHJcbiAgICAgICAgLy8gICAgICAgIGF1ZGlvW1wid2Fsa1wiXS5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iLCJleHBvcnQgY2xhc3MgTWVkaWNpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGU6IEpRdWVyeS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIFVzaW5nIHRoZW4gKG5vdCBhcyBjbGVhciB0byBtZSlcclxuICAgICAgICAkKCcuc2VsZWN0ZWQtbWVkaWNpbmUtbmFtZScpLmZhZGVPdXQoNTAwKVxyXG4gICAgICAgICAgICAucHJvbWlzZSgpXHJcblxyXG4gICAgICAgICAgICAucHJvZ3Jlc3MoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdwcm9ncmVzcycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXNpbmcgZG9uZSwgZmFpbCBhbmQgcHJvZ3Jlc3MgKG11Y2ggbW9yZSBjbGVhciB0byBtZSlcclxuICAgICAgICAkKCcuc2VsZWN0ZWQtbWVkaWNpbmUtbmFtZScpLmZhZGVPdXQoNTAwKVxyXG4gICAgICAgICAgICAucHJvbWlzZSgpXHJcblxyXG4gICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3RlZC1tZWRpY2luZS1uYW1lJykudGV4dChzZWxmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlbGVjdGVkLW1lZGljaW5lLW5hbWUnKS5mYWRlSW4oNTAwKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnZmFpbCcpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLnByb2dyZXNzKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgncHJvZ3Jlc3MnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59OyIsImV4cG9ydCBjbGFzcyBNZWRpY2luZUNhdGVnb3J5IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBuYW1lOiBzdHJpbmcpIHtcclxuICAgIH1cclxufTsiXX0=
