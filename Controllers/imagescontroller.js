app.controller('ImagesController', function ImagesController($scope, JsonService) {

    $scope.getImages = function () {

        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

        $.getJSON(flickerAPI, {
            tags: $scope.imgsearch,
            tagmode: "any",
            format: "json"
        })
          .done(function (data) {
              $scope.data = data;
              $scope.$apply();
              console.log($scope.data);
          });
    }

    //$scope.getdata = function () {
    //    $.get('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=fuzzy%20monkey', function (data) {
    //        $scope.data = data;
    //        $scope.showtable = true;
    //        $scope.$apply();
    //        console.log($scope.data);
    //    });
    //}
});

