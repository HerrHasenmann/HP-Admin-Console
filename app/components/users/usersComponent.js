app.component("users", {
    templateUrl: "./components/users/usersTemplate.html",
    controller: ["UserService", "$scope", UsersController]
});

function UsersController(UserService) {
    var ctrl = this;

    ctrl.users = function () {
        return UserService.getSearchResults();
    };

    // Data-Table

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
        limitOptions: [10,20,30]
    };

    ctrl.selectUser = function(user){
        UserService.setSelectedUser(user)
    };
    
    ctrl.selectedUser = function () {
        return UserService.getSelectedUser();
    }
}