app.component("sidenav", {
    templateUrl: "./components/sidenav/sidenavTemplate.html",
    controller: ["UserService", "RouteService", "TranslationService", "$mdSidenav", SidenavController]
});

function SidenavController(UserService, RouteService, TranslationService, $mdSidenav) {

    var ctrl = this;

    ctrl.isUserSelected = function () {
        if(UserService.getSelectedUser()){
            return true;
        }
    };
    
    ctrl.routes = function () {
        return RouteService.getRoutes();
    };
    ctrl.isActiveRoute = function (route) {
        if(RouteService.getCurrentRoute() && route.id === RouteService.getCurrentRoute().id){
            return true;
        }
    };

    ctrl.changeRoute = function (route) {

        $mdSidenav("left").close();
        RouteService.changeRoute(route);
    };
    
    ctrl.languages = function () {
        return TranslationService.getLanguages();
    };

    ctrl.currentLanguage = function () {
        return TranslationService.getLanguage();
    };

    ctrl.selectLanguage = function (language) {
        TranslationService.setLanguage(language);
    }
}