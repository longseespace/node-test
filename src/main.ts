import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent, environment } from './app';

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    provideForms(),
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
