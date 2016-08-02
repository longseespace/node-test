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
var router_1 = require('@angular/router');
var components_1 = require('./components');
var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = null;
        // We need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cz-app',
            templateUrl: 'app.component.html',
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [
                components_1.AuthService,
                components_1.ProfileService,
                components_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map