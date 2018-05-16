app.component("searchInput", {
    templateUrl: "./components/search/search-input/searchInputTemplate.html",
    controller: ["UserService", "$mdMedia", SearchController],
    bindings: {
        noDropdown: "<"
    }
});

function SearchController(UserService, $mdMedia) {
    var ctrl = this;

    ctrl.selectedItem;
    ctrl.searchText;

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
        return $mdMedia('xs') ? 'Search for User' : 'Search for User by Name, Username, OCI-Number'
    };

    ctrl.getStyle = function () {
        return $mdMedia('xs') ? {'width':'inherit'} : {'width': '380px'};
    };

}