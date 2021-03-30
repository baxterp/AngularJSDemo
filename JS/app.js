'use strict';

var app = angular.module('WebAPIDemo', ['ngRoute', 'ngTouch', 'ui.grid', 'me-lazyload', 'angular-carousel', 'ui.chart'])
    .value('charting', {
        pieChartOptions: {
            seriesDefaults: {
                // Make this a pie chart.
                //PieLegendRenderer,PieRenderer
                renderer: jQuery.jqplot.PieRenderer,
                rendererOptions: {
                    // Put data labels on the pie slices.
                    // By default, labels show the percentage of the slice.
                    showDataLabels: true
                }
            },
            legend: { show: true, location: 'e' }
        }
    })
    .filter('currencyFilter', function () {
        return function (value) {
            return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '&,');

        }
    });

app.config(function ($routeProvider) {
    $routeProvider.
        when('/products', {
            templateUrl: 'Partials/ViewProducts.html'
        }).
        when('/editable', {
            templateUrl: 'Partials/EditableTable.html'
        }).
        when('/images', {
            templateUrl: 'Partials/LazyImages.html'
        }).
        when('/flickrimages', {
            templateUrl: 'Partials/FlickrImages.html'
        }).
        when('/bindingfilters', {
            templateUrl: 'Partials/BindingsFilters.html'
        }).
        when('/uigrid', {
            templateUrl: 'Partials/UIGrid.html'
        }).
        when('/uichart', {
            templateUrl: 'Partials/UIChart.html'
        }).
        when('/barchart', {
            templateUrl: 'Partials/Jqplot.Barchart.html'
        }).
        when('/carousel', {
            templateUrl: 'Partials/AngularCarousel.html'
        }).
        when('/', {
            templateUrl: 'Partials/Start.html'
        });
});

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


