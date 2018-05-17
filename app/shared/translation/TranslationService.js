/*
* Service for handling different languages
*/

app.service("TranslationService", ["$translate", function ($translate) {

    var serv = this;

    var languages = {
        "en": {
            "id": "en",
            "name": "English"
        },
        "de": {
            "id": "de",
            "name": "Deutsch"
        }
    };

    var selectedLanguage = languages["en"];
    
    serv.getLanguages = function () {
        return languages;
    };

    serv.getLanguage = function () {
        return selectedLanguage;
    };

    serv.setLanguage = function (language) {

        $translate.use(language.id);
        selectedLanguage = language;
    };
}]);