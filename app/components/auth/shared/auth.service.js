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
var http_1 = require('@angular/http');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.registerUrl = 'https://polar-sierra-94874.herokuapp.com/users/register';
        this.loginUrl = 'https://polar-sierra-94874.herokuapp.com/users/login';
        this.resetPasswordUrl = 'https://polar-sierra-94874.herokuapp.com/users/resetpassword';
    }
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AuthService.prototype.persistToken = function (token) {
        localStorage.setItem('jwtToken', token);
    };
    AuthService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('jwtToken') && localStorage.getItem('jwtToken').length > 0;
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('jwtToken');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('jwtToken');
    };
    /**
     * Look for already registered single user
     */
    AuthService.prototype.login = function (provider, email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /**
             * This is where you should talk with your API
             * See the Angular 2 Http Client Documentation for more information
             * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
             */
            switch (provider) {
                case 'linkedin':
                    // `email` now contains token
                    _this.persistToken(email);
                    resolve(true);
                    break;
                default:
                    console.log(email);
                    console.log(password);
                    var body = JSON.stringify({ email: email, password: password });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    _this.http.post(_this.loginUrl, body, options)
                        .toPromise()
                        .then(function (res) {
                        var user = _this.extractData(res);
                        _this.persistToken(user.token);
                        console.log(user);
                        resolve(true);
                    })
                        .catch(function (error) {
                        _this.handleError(error);
                        resolve(false);
                    });
                    break;
            }
            // resolve(false); // Must be false in case of failure
        });
    };
    /**
     * Verify if user already exists and register
     */
    AuthService.prototype.register = function (provider, email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            /**
             * This is where you should talk with your API
             * See the Angular 2 Http Client Documentation for more information
             * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
             */
            switch (provider) {
                case 'linkedin':
                    console.log(provider);
                    break;
                default:
                    console.log(email);
                    console.log(password);
                    var body = JSON.stringify({ email: email, password: password });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    _this.http.post(_this.registerUrl, body, options)
                        .toPromise()
                        .then(function (res) {
                        var user = _this.extractData(res);
                        _this.persistToken(user.token);
                        console.log(user);
                        resolve(true);
                    })
                        .catch(function (error) {
                        _this.handleError(error);
                        resolve(false);
                    });
                    break;
            }
            // resolve(true); // Must be false in case of failure
        });
    };
    /**
     * Send email to user
     */
    AuthService.prototype.forgotPassword = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            /**
             * This is where you should talk with your API
             * See the Angular 2 Http Client Documentation for more information
             * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
             */
            var body = JSON.stringify({ email: email });
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            _this.http.post(_this.resetPasswordUrl, body, options)
                .toPromise()
                .then(function (res) {
                resolve(true);
            })
                .catch(function (error) {
                _this.handleError(error);
                resolve(false);
            });
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map