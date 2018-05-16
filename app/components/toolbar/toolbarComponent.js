app.component("toolbar", {
    templateUrl: "./components/toolbar/toolbarTemplate.html",
    controller: ["UserService", "RouteService", "$mdSidenav", ToolbarController]
});

function ToolbarController(UserService, RouteService, $mdSidenav) {

    var ctrl = this;

    ctrl.selectedUser = function () {
        return UserService.getSelectedUser();
    };

    ctrl.unSelectUser = function () {
        UserService.setSelectedUser(null);
    };

    ctrl.toggleSidenav = function () {
        $mdSidenav('left').toggle();
    };

    ctrl.showCreateButton = function () {
        if(RouteService.getCurrentRoute() && RouteService.getCurrentRoute().id !== "users"){
            return true;
        }
    };
    
    ctrl.title = function () {
        return RouteService.getCurrentRoute().name;
    }
}