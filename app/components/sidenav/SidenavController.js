app.controller("SidenavController", ["$scope","$mdSidenav", "UserService", function ($scope, $mdSidenav, UserService) {

    $scope.isOpen = true;

    $scope.toggleSidenav = function () {
        $mdSidenav('left').toggle();
    };
}]);