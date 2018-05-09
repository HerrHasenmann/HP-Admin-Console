app.component("search", {
    templateUrl: "./components/search/search-input/searchTemplate.html",
    controller: ["UserService", "$mdMedia", SearchController]
});

function SearchController(UserService, $mdMedia) {
    var ctrl = this;

    ctrl.selectedItem;
    ctrl.searchText;

    ctrl.setSelectedUser = function (item) {
        UserService.setSelectedUser(item);
    };

    ctrl.querySearch = function (searchText) {
        return UserService.searchUsers(searchText);
    };

    ctrl.placaholder="test";

    ctrl.getPlaceholder = function () {
        return $mdMedia('xs') ? 'Search for User' : 'Search for User by Name, Username, OCI-Number'
    };

    ctrl.getStyle = function () {
        return $mdMedia('xs') ? {'width':'inherit'} : {'width': '380px'};
    }
}