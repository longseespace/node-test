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
var router_2 = require('@angular/router');
var _1 = require('../');
var AuthPasswordComponent = (function () {
    function AuthPasswordComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthPasswordComponent.prototype.continue = function () {
        var _this = this;
        this.authService.forgotPassword(this.email)
            .then(function (succeed) {
            if (succeed) {
                alert('Email sent. Please check your inbox.');
                _this.router.navigate(['welcome/auth/login']);
            }
            else {
                _this.message = 'Email not found';
            }
        });
    };
    AuthPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '.l-auth--forgot-password',
            templateUrl: './auth-password.component.html',
            directives: [
                router_2.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, _1.AuthService])
    ], AuthPasswordComponent);
    return AuthPasswordComponent;
}());
exports.AuthPasswordComponent = AuthPasswordComponent;
//# sourceMappingURL=auth-password.component.js.map