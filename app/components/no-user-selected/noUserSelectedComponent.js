app.component("noUserSelected", {
    templateUrl: "./components/no-user-selected/noUserSelectedTemplate.html",
    controller: ["RouteService", NoUserSelectedController]
});

function NoUserSelectedController(RouteService) {

    var ctrl = this;

    ctrl.gotoUsers = function () {
        RouteService.changeRoute("users");
    }
}