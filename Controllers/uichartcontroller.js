app.controller('UIChartController', function UIChartController($scope, charting, JsonServiceChart, appSettings) {
    $scope.someData = [[
      ['Heavy Industry', 12], ['Retail', 9], ['Light Industry', 14],
      ['Out of home', 16], ['Commuting', 7], ['Orientation', 9]
    ]];

    var url = '';
    var host = window.location.host;

    if (host.indexOf('brpsoft') > -1)
        url = appSettings.serverPathLive + '/api/products';
    else
        url = appSettings.serverPathTest + '/api/products';

    JsonServiceChart.async(url).then(function () {
        var data = JsonServiceChart.data();

        $scope.chartData = [[]];
        angular.forEach(data, function (key, value) {
            if (value < 8) {
                var productname = key.ProductName;
                var unitsinstock = key.UnitsInStock;
                var localdata = [productname, unitsinstock];
                $scope.chartData[0][value] = localdata;
            }
        });
        console.log($scope.chartData)
        console.log($scope.someData);
    });

    $scope.myChartOpts = charting.pieChartOptions;
});