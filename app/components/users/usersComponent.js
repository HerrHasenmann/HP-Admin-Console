app.component("users", {
    templateUrl: "./components/users/usersTemplate.html",
    controller: ["UserService", "$scope", UsersController]
});

function UsersController(UserService, $scope) {
    var ctrl = this;

    ctrl.users = function () {
        return UserService.getSearchResults();
    };

    // Data-Table
    ctrl.selectedlected = [];

    ctrl.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    ctrl.getUsers = function () {
        console.log("getUsers called...")
    }
}