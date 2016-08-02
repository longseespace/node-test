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
var shared_1 = require('../../../shared');
var _1 = require('../');
var AuthLoginComponent = (function () {
    function AuthLoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = window.location.search.replace('?token=', '');
        if (token.length > 0) {
            this.authService.login('linkedin', token, null)
                .then(function (succeed) {
                if (succeed)
                    _this.router.navigate(['home'], { queryParams: {} });
            });
        }
    };
    /**
     * Handles the user authentication then redirects to home if succeed
     * @param {string} provider - Optional provider parameter
     */
    AuthLoginComponent.prototype.authenticate = function (provider) {
        var _this = this;
        this.authService.login(provider, this.email, this.password)
            .then(function (succeed) {
            if (succeed) {
                _this.router.navigate(['home']);
            }
            else {
                _this.error = 'Invalid Username/Password';
            }
        });
    };
    AuthLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '.l-auth--login',
            templateUrl: './auth-login.component.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                shared_1.CzInputText
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, _1.AuthService])
    ], AuthLoginComponent);
    return AuthLoginComponent;
}());
exports.AuthLoginComponent = AuthLoginComponent;
//# sourceMappingURL=auth-login.component.js.map