app.component("mappings", {
    templateUrl: "./components/mappings/mappingsTemplate.html",
    controller: ["UserService", "$scope", MappingsController]
});

function MappingsController(UserService) {

    var ctrl = this;

    ctrl.selectedUser = function () {
        return UserService.getSelectedUser();
    }
}