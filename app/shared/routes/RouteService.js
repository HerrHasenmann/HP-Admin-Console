app.service("RouteService", ["$location", function ($location) {

    var serv = this;

    var routes = {
        "users": {
            "id": "users",
            "name": "menu.users",
            "icon": "account-group"
        },
        "settings": {
            "id": "settings",
            "name": "menu.settings",
            "icon": "settings"
        },
        "mappings": {
            "id": "mappings",
            "name": "menu.mappings",
            "icon": "chart-gantt"
        },
        "exclusions": {
            "id": "exclusions",
            "name": "menu.exclusions",
            "icon": "file-tree"
        }
    };

    serv.getRoutes = function () {
        return routes;
    };

    serv.changeRoute = function (route) {
        $location.path('/'+route.id);
    };

    serv.changeRouteById = function (id) {
        var route = routes[id];
        serv.changeRoute(route);
    };

    serv.getCurrentRoute = function () {
        var routeId = $location.path().replace("/", "");
        return routes[routeId];
    }
}]);