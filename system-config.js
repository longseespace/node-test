// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
* User Configuration.
**********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
};
/** User packages configuration. */
var packages = {
    'ng2-bootstrap': {
        main: 'ng2-bootstrap/ng2-bootstrap.js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
* Everything underneath this line is managed by the CLI.
**********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/components',
    'app/components/user',
    'app/components/profile',
    'app/components/auth',
    'app/components/home',
    'app/components/welcome',
    'app/shared',
    'app/shared/autocomplete',
    'app/shared/input'
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        'moment': 'vendor/moment/moment.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map