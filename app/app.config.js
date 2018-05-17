app.config(["$mdIconProvider", function ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('./assets/icons/mdi.svg')
}]);

// Disable aria warnings
app.config(["$mdAriaProvider", function ($mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
}]);

// Fix for not working inputs on mobile devices
app.config(["$mdGestureProvider", function ($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
}]);

// Sets the theme for the app
app.config(["$mdThemingProvider", function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette("light-blue", {
            'default': "A700"
        })
        .accentPalette("yellow", {
            'default': "A200"
        });
}]);

// Sets the different routes for the app
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            redirectTo: "/users"
        }).when("/users", {
            template: "<users></users>"
        }).when("/settings", {
            template: "<settings></settings>"
        }).when("/mappings", {
            template: "<mappings></mappings>"
        }).when("/exclusions", {
            template: "<exclusions></exclusions>"
        });

    $routeProvider.otherwise("/");
}]);

// Settings for the translation service
app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: './i18n/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

    $translateProvider.useSanitizeValueStrategy(null);
}]);