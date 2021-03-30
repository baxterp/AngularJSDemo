app.controller('JSONUIGridController', function JSONUIGridController($scope, JsonServiceGrid, appSettings) {

    //$scope.data = [
    //{
    //    "firstName": "Cox",
    //    "lastName": "Carney",
    //    "company": "Enormo",
    //    "employed": true
    //},
    //{
    //    "firstName": "Lorraine",
    //    "lastName": "Wise",
    //    "company": "Comveyer",
    //    "employed": false
    //},
    //{
    //    "firstName": "Nancy",
    //    "lastName": "Waters",
    //    "company": "Fuelton",
    //    "employed": false
    //}];

    $scope.cellClass =
        function (grid, row, col, rowRenderIndex, colRenderIndex) {
            if (rowRenderIndex % 2 == true) 
                return 'even';
            else
                return 'odd';
        }


    var setGridOptions = function () {
        $scope.gridOptions = {
            enableFiltering: true,
            data: $scope.data,
            columnDefs: [
                {
                    name: 'Product Name', field: 'ProductName', headerCellClass: 'HeaderCell', cellClass: $scope.cellClass,
                    filter: {
                        condition: function (searchTerm, cellValue) {
                            return cellValue.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
                        }, placeholder: 'Product name contains'
                    }
                },
                {
                    name: 'Supplier Name', field: 'SupplierName', headerCellClass: 'HeaderCell', cellClass: $scope.cellClass,
                    filter: {
                        condition: function (searchTerm, cellValue) {
                            return cellValue.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
                        }, placeholder: 'Supplier name contains'
                    }
                },
                { name: 'Unit Price', field: 'UnitPrice', headerCellClass: 'HeaderCell', cellClass: $scope.cellClass, enableFiltering: false, cellFilter : 'currencyFilter'},
                { name: 'Units In Stock', field: 'UnitsInStock', headerCellClass: 'HeaderCell', cellClass: $scope.cellClass, enableFiltering: false }
            ]
        };
    }

    $scope.rowColor = function (row, grid) {
        var idx = grid.renderContainers.body.visibleRowCache.indexOf(row)
        return idx % 2 === 0 ? 'is-even' : 'is-odd';
    };

    var url = '';
    var host = window.location.host;

    if (host.indexOf('brpsoft') > -1)
        url = appSettings.serverPathLive + '/api/products';
    else
        url = appSettings.serverPathTest + '/api/products';

    if (!$scope.gridOption)
        setGridOptions();

    JsonServiceGrid.async(url).then(function () {
        $scope.data = JsonServiceGrid.data();
        setGridOptions();

        console.log('File data' + $scope.data);
        console.log('Passed in File Controller');
        console.log('End of File request');
    });

});