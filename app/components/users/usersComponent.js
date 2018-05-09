app.component("users", {
    templateUrl: "./components/users/usersTemplate.html",
    controller: ["UserService", "$scope", UsersController]
});

function UsersController(UserService, $scope) {
    var ctrl = this;

    ctrl.users = function () {
        return UserService.results;
    };

    ctrl.userService = UserService;

    // $scope.$watch(function () {
    //     return UserService.search.results
    // }, function (newResult) {
    //     console.log(newResult);
    //     ctrl.users = newResult;
    // });
}