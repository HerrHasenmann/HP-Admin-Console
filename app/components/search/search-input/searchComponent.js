app.component("search", {
    templateUrl: "./components/search/search-input/searchTemplate.html",
    controller: ["UserSearchService", SearchController]
});

function SearchController(UserSearchService) {
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
        console.log(searchText);
        return UserSearchService.getUsers();
    };
}