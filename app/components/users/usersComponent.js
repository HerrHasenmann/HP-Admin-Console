/*
* Component for the user list. Provides the ability to search for an user, select an user and add a new user. Displays
* the search results inside a data-table.
*/

app.component("users", {
    templateUrl: "./components/users/usersTemplate.html",
    controller: ["UserService", "$translate", UsersController]
});

function UsersController(UserService, $translate) {
    var ctrl = this;

    ctrl.selected = [];

    ctrl.query = {
        order: 'name',
        limit: 10,
        page: 1
    };

    ctrl.options = {
        autoSelect: true,
        rowSelect: true,
        pageSelect: true,
        limitOptions: [10, 20, 30]
    };

    ctrl.users = function () {
        return UserService.getSearchResults();
    };

    ctrl.selectUser = function (user) {
        UserService.setSelectedUser(user)
    };

    ctrl.selectedUser = function () {
        return UserService.getSelectedUser();
    };

    ctrl.paginationTranslation = function () {
        return {
            of: $translate.instant("dataTable.of"),
            page: $translate.instant("dataTable.page"),
            rowsPerPage: $translate.instant("dataTable.rowsPerPage")
        }
    }

}