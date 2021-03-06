app.factory('JsonService', function ($http, $q) {

    var deferred = $q.defer();
    var data = [];
    var LocalService = {};

    LocalService.async = function (url) {
        $http.get(url,
            {
                headers:
                  { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' }
            })
            .success(function (d) {
                data = d;
                console.log(d);
                console.log('Passed in JSON service, with URL ' + url);
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                console.log("Error from JSON Service, status : " + status);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        return deferred.promise;
    };
    LocalService.data = function () {
        return data;
    };

    return LocalService;
});

app.factory('JsonServiceChart', function ($http, $q) {

    var deferred = $q.defer();
    var data = [];
    var LocalService = {};

    LocalService.async = function (url) {
        $http.get(url)
            .success(function (d) {
                data = d;
                console.log(d);
                console.log('Passed in service');
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        return deferred.promise;
    };
    LocalService.data = function () { return data; };

    return LocalService;
});

app.factory('JsonServiceGrid', function ($http, $q) {

    var deferred = $q.defer();
    var data = [];
    var LocalService = {};

    LocalService.async = function (url) {
        $http.get(url)
            .success(function (d) {
                data = d;
                console.log(d);
                console.log('Passed in service');
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        return deferred.promise;
    };
    LocalService.data = function () { return data; };

    return LocalService;
});
