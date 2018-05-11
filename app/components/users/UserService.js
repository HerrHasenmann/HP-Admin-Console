app.service("UserService", ["$rootScope", "$http", "toArrayFilter", "$timeout", function ($rootScope, $http, toArrayFilter, $timeout) {

    var serv = this;

    // Mock data
    var users = {
        "4d4a9c51-7b43-4fed-b9e4-57ce1b259687": {
            "id": "4d4a9c51-7b43-4fed-b9e4-57ce1b259687",
            "name": "Daimler AG",
            "country": "DE",
            "ociCustomerNumber": "12345678",
            "username": "daimler@oci-conrad.de",
            "password": "test123",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Wilfried",
                    "lastName": "Müller",
                    "function": "Strategischer Einkäufer",
                    "telefon": "+497543304253",
                    "email": "wilfried.mueller@bmw.de"
                },
                "sales": {
                    "responsibleInternal": "Andrea Wagner",
                    "responsibleExternal": "Holm Lehmann",
                    "keycode": "daimler",
                    "serviceProvider": "Onventis",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "Generell ist Herr Müller ein freundlicher und angenehmer Ansprechpartner.",
                    "files": {
                        "0": ""
                    }
                }
            }
        },
        "34ab3c33-b669-41ad-88de-92f83cba2259": {
            "id": "34ab3c33-b669-41ad-88de-92f83cba2259",
            "name": "Netur",
            "country": "LR",
            "ociCustomerNumber": 72948566,
            "username": "danielwynn@genesynk.com",
            "password": "test321",
            "discount": "14%",
            "fixedPricelist": false,
            "marginCheck": false,
            "exclusions": false,
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Carla",
                    "lastName": "Perry",
                    "function": "Strategischer Einkäufer",
                    "telefon": 9545282361,
                    "email": "youngcannon@bluegrain.com"
                },
                "sales": {
                    "responsibleInternal": "Gallagher Frazier",
                    "responsibleExternal": "HSharp Robinson",
                    "keycode": "Spears",
                    "serviceProvider": "Sexton",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "Nulla ad qui mollit Lorem duis minim et. Aliqua enim consectetur laboris minim. Duis aliqua magna magna ut incididunt incididunt in labore.",
                    "files": {
                        "0": "/content/file/b8919a1b-e6c0-432c-a9bf-6c70ec5170b5"
                    }
                }
            }
        },
        "33d17df1-604b-4861-bbe2-4ebd8d084b37": {
            "id": "33d17df1-604b-4861-bbe2-4ebd8d084b37",
            "name": "Medicroix",
            "country": "NE",
            "ociCustomerNumber": 53333205,
            "username": "wallsmaynard@empirica.com",
            "password": "test12345",
            "discount": "10%",
            "fixedPricelist": false,
            "marginCheck": false,
            "exclusions": false,
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Downs",
                    "lastName": "Lang",
                    "function": "Strategischer Einkäufer",
                    "telefon": 9664832060,
                    "email": "janelledoyle@tetak.com"
                },
                "sales": {
                    "responsibleInternal": "Eloise Gross",
                    "responsibleExternal": "HRivas Puckett",
                    "keycode": "Sims",
                    "serviceProvider": "England",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "Exercitation ullamco nisi sit dolor do excepteur proident enim. Veniam sint et tempor magna exercitation fugiat est adipisicing Lorem consectetur consequat. Voluptate consectetur quis irure officia consequat sunt reprehenderit quis ipsum elit qui laborum.",
                    "files": {
                        "0": "/content/file/f1fe74db-fa8e-4f2b-85d7-e4145709efc4"
                    }
                }
            }
        }
    };

    var data = {
        searchText: "",
        searchResults: [],
        selectedUser: null
    };

    serv.searchUsers = function (searchText) {

        data.searchText = searchText;

        return new Promise(function (resolve, reject) {

            $rootScope.safeApply(function () {
                $timeout(function () {
                    data.searchResults = toArrayFilter(users).filter(createUserFilter(searchText));
                    resolve(toArrayFilter(users).filter(createUserFilter(searchText)));
                }, getRandom(200, 1000));
            });
        });

    };

    serv.getSearchText = function () {
        return data.searchText;
    };

    serv.getSearchResults = function () {
        return data.searchResults;
    };
    
    serv.getSelectedUser = function () {
        return data.selectedUser;
    };
    
    serv.setSelectedUser = function (user) {
        data.selectedUser = user;
    };

    function getRandom(lowerBound, upperBound) {
        return (Math.random() * (upperBound - lowerBound)) + lowerBound;
    }

    function createUserFilter(searchText){

        searchText = searchText.toLowerCase();

        return function (user) {
            var properties = ["name", "username", "ociCustomerNumber"];

            var property;
            for(var i = 0; i < properties.length; i++){

                property = properties[i];
                if(user[property].toString().toLowerCase().indexOf(searchText) != -1){
                    return true;
                }
            }
        }
    }

    function init() {
        serv.searchUsers("");
    }
    init();
}]);