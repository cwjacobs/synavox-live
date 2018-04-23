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
//# sourceMappingURL=medicine.js.map