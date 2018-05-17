/*
* Filter for converting an object to an array
*/

app.filter('toArray', function() {
    return function(obj) {
        const result = [];
        angular.forEach(obj, function(val) {
            result.push(val);
        });
        return result;
    }
});