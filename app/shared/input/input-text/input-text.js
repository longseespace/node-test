"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var CzInputText = (function () {
    function CzInputText() {
    }
    CzInputText.prototype.ngOnInit = function () {
        console.log(this.model);
    };
    CzInputText.prototype.onFocus = function () {
    };
    CzInputText.prototype.onBlur = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CzInputText.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CzInputText.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CzInputText.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CzInputText.prototype, "model", void 0);
    CzInputText = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cz-input-text',
            templateUrl: './input-text.html',
            directives: [
                forms_1.FORM_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CzInputText);
    return CzInputText;
}());
exports.CzInputText = CzInputText;
//# sourceMappingURL=input-text.js.map