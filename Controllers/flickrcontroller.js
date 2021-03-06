app.controller("FlickrController", function FlickrController($scope, $http) {
    $scope.searchImage = function () {
        displayBusy();

        $http.get('https://api.flickr.com/services/rest', {
                    params: {
                        method: "flickr.photos.search",
                        api_key: "17c2d82e29e9e9ab2858f1b7bfadb446",
                        text: $scope.description,
                        format: "json",
                        page: 1,
                        per_page:200
                    }
                })
                .success(function (response, status) {
                    $scope.images = parseFlickrJson(response);
                    $.magnificPopup.close();
                });
    };

});

function parseFlickrJson(jsonstring) {
    var data = null;
    var jsonFlickrApi = function (d) {
        data = d;
    }
    eval(jsonstring);
    return data;
}

function displayBusy() {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup">' +
                    '<div style="padding-top:10px;padding-bottom:10px;padding-left:30px;font-size:40pt">Getting Images..</div>' +
                '</div>',
            type: 'inline',
        }
    });
}