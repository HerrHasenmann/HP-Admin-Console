app.controller("SidenavController", ["$scope","$mdSidenav", function ($scope, $mdSidenav) {

    $scope.isOpen = true;

    $scope.toggleSidenav = function () {
        $mdSidenav('left').toggle();
    }
}]);