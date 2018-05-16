app.component("settings", {
    templateUrl: "./components/settings/settingsTemplate.html",
    controller: ["UserService", SettingsController]
});

function SettingsController(UserService) {

    var ctrl = this;
    
    ctrl.selectedUser = function () {
        return UserService.getSelectedUser();
    }
}