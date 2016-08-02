"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./app/app.routes');
var app_1 = require('./app');
if (app_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map