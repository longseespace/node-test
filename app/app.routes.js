"use strict";
var router_1 = require('@angular/router');
var components_1 = require('./components');
var routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: components_1.WelcomeComponent,
        children: components_1.AuthRoutes.slice()
    }
].concat(components_1.HomeRoutes, components_1.ProfileRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map