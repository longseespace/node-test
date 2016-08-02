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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var AuthComponent = (function () {
    function AuthComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.modal.config = {
            backdrop: false,
            keyboard: true,
            focus: true,
            show: true
        };
        // Show the modal
        this.modal.show();
    };
    /**
     * Redirect to parent route when the modal is closed
     * @param [event] - Bootstrap Event
     */
    AuthComponent.prototype.onHidden = function (event) {
        var parent = this.router.routerState.parent(this.route).url['value'][0].path;
        this.router.navigate([parent]);
    };
    __decorate([
        core_1.ViewChild('authModal'), 
        __metadata('design:type', Object)
    ], AuthComponent.prototype, "modal", void 0);
    AuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '.l-auth',
            templateUrl: './auth.component.html',
            directives: [
                ng2_bootstrap_1.MODAL_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES
            ],
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map