/*
* Component for the exclusion feature
*/

app.component("exclusions", {
    templateUrl: "./components/exclusions/exclusionsTemplate.html",
    controller: ["UserService", ExclusionsController]
});

function ExclusionsController(UserService) {

    var ctrl = this;

    ctrl.selectedUser = function () {
        return UserService.getSelectedUser();
    }
}