/*
* Component which can be used to inform the user that he needs to select a user first before he can proceed
*/

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