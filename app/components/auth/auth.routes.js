"use strict";
var _1 = require('./');
exports.AuthRoutes = [
    { path: '' },
    {
        path: 'auth',
        component: _1.AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                component: _1.AuthLoginComponent
            },
            {
                path: 'password',
                component: _1.AuthPasswordComponent
            },
            {
                path: 'profile',
                component: _1.AuthProfileComponent
            },
            {
                path: 'register',
                component: _1.AuthRegisterComponent
            },
        ]
    }
];
//# sourceMappingURL=auth.routes.js.map