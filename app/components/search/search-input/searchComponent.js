app.component("search", {
    templateUrl: "./components/search/search-input/searchTemplate.html",
    controller: ["UserService", "$mdMedia", SearchController]
});

function SearchController(UserService, $mdMedia) {
    var ctrl = this;

    ctrl.selectedItem;
    ctrl.searchText;

    ctrl.setSelectedUser = function (item) {
        console.log("setSelectedItem called..." + item);
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
    }
}