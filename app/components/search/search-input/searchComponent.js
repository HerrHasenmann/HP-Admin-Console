app.component("search", {
    templateUrl: "./components/search/search-input/searchTemplate.html",
    controller: ["UserSearchService", "$mdMedia", SearchController]
});

function SearchController(UserSearchService, $mdMedia) {
    var ctrl = this;

    ctrl.selectedItem;
    ctrl.searchText;

    ctrl.selectedItemChange = function (item) {
        console.log(item);
    };

    ctrl.seachTextChange = function (searchText) {
        console.log(searchText);
    };

    ctrl.querySearch = function (searchText) {
        return UserSearchService.getUsers(searchText);
    };

    ctrl.placaholder="test";

    ctrl.getPlaceholder = function () {
        return $mdMedia('xs') ? 'Search for User' : 'Search for User by Name, Username, OCI-Number'
    }

    ctrl.getStyle = function () {
        return $mdMedia('xs') ? {'width':'inherit'} : {'width': '380px'};
    }
}