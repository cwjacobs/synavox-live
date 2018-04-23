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
//# sourceMappingURL=language.js.map