app.controller('MainController', function MainController($scope, JsonService, appSettings) {

    var url = '';
    var host = window.location.host;

    if (host.indexOf('brpsoft') > -1)
        url = appSettings.serverPathLive + '/api/products';
    else
        url = appSettings.serverPathTest + '/api/products';

    JsonService.async(url).then(function() {
        $scope.data = JsonService.data();
        console.log('File data' + $scope.data);
        console.log('Passed in File Controller');
        console.log('End of File request');
    });
});

