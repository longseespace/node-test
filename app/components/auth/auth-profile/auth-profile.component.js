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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var shared_1 = require('../../../shared');
var profile_1 = require('../../profile');
var _1 = require('../');
var AuthProfileComponent = (function () {
    function AuthProfileComponent(router, profileService, authService) {
        this.router = router;
        this.profileService = profileService;
        this.authService = authService;
        this.categories = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.categoriesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }];
        this.categorySelected = '';
        this.categoriesSelected = [];
    }
    AuthProfileComponent.prototype.typeaheadOnSelect = function (e) {
        if (this.categoriesSelected.length >= 3)
            this.categoriesSelected.shift();
        this.categorySelected = '';
        this.categoriesSelected.push(e.item);
    };
    AuthProfileComponent.prototype.continue = function () {
        var _this = this;
        var profile = {
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company,
            categories: this.categoriesSelected,
            address1: this.address1,
            address2: this.address2,
            phone: this.phone
        };
        // The second parameter is the User object
        this.profileService.create(this.authService.getToken(), profile)
            .then(function (succeed) {
            if (succeed)
                _this.router.navigate(['home']);
        });
    };
    AuthProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '.l-auth--profile',
            templateUrl: './auth-profile.component.html',
            directives: [
                router_2.ROUTER_DIRECTIVES,
                ng2_bootstrap_1.TYPEAHEAD_DIRECTIVES,
                shared_1.CzInputText,
                shared_1.CzAutocomplete
            ],
            providers: [
                profile_1.ProfileService,
                _1.AuthService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, profile_1.ProfileService, _1.AuthService])
    ], AuthProfileComponent);
    return AuthProfileComponent;
}());
exports.AuthProfileComponent = AuthProfileComponent;
//# sourceMappingURL=auth-profile.component.js.map