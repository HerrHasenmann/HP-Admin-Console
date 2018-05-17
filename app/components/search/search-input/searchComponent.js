/*
* Component for searching for a user, can be used with an autocompletion dropdown or without
*/

app.component("searchInput", {
    templateUrl: "./components/search/search-input/searchInputTemplate.html",
    controller: ["UserService", "$mdMedia", "$translate", SearchController],
    bindings: {
        noDropdown: "<"
    }
});

function SearchController(UserService, $mdMedia, $translate) {
    var ctrl = this;

    ctrl.setSelectedUser = function (item) {
        console.log("triggered setselectedUser");
        if (item) {
            UserService.setSelectedUser(item);
        }else{
            UserService.searchUsers("");
        }
    };

    ctrl.querySearch = function (searchText) {
        return UserService.searchUsers(searchText);
    };

    ctrl.getPlaceholder = function () {
        return $mdMedia('xs') ? $translate.instant("search.searchHintShort") : $translate.instant("search.searchHintLong")
    };

    ctrl.getStyle = function () {
        return $mdMedia('xs') ? {'width':'inherit'} : {'width': '400px'};
    };

}