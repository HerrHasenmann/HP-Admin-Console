/*
* Controller which is available in the hole application
*/

app.controller("RootController", ["$rootScope", "$mdMedia", function ($rootScope, $mdMedia) {

    $rootScope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    /*
    * Make the media query service available in the html
    */
    $rootScope.$mdMedia = $mdMedia;

}]);