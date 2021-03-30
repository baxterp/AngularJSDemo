app.controller('BindingFiltersController', function BindingFiltersController($scope, $http) {

    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    $scope.dateColorValid = 'lightpink';
    $scope.dateVaild = false;

    $scope.emailColorValid = 'lightpink';
    $scope.emailValid = false;

    $scope.inputEmail = 'bax@bax.com';
    $scope.inputDate = '01/01/2009';

    $scope.submit = function () {
        var formData = {
            email: $scope.inputEmail,
            date: $scope.inputDate
        };

        var encodedData = $.param(formData);

        $.ajax({
            type: "POST",
            url: 'http://posttestserver.com/post.php?dump',
            success: function (result) {
                console.log('Received data : ' + result);
                displayData(result);
            },
            data: encodedData,
            dataType: 'html'
        });

        //$http.post({
        //    url: 'http://posttestserver.com/post.php',
        //    method: 'POST',
        //    data: encodedData,
        //    headers: {
        //        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        //    }
        //}).success(function(response) {
        //    alert('Received : ' + response)
        //});
    }

    $scope.disableButton = function () {
        //console.log('emailValid' + $scope.emailValid);
        //console.log('dateValid' + $scope.dateVaild);

        return $scope.emailValid == false || $scope.dateVaild == false;
    }

    $scope.testDate = function (inputDate) {
        var dateValid = validateDate(inputDate);
        if (dateValid) {
            $scope.dateColorValid = 'lightyellow';
            $scope.dateVaild = true;
        }
        else {
            $scope.dateColorValid = 'lightpink';
            $scope.dateVaild = false;
        }
    }

    $scope.testEmail = function (inputEmail) {
        var emailValid = validateEmail(inputEmail);
        if (emailValid) {
            $scope.emailColorValid = 'lightyellow';
            $scope.emailValid = true;
        }
        else {
            $scope.emailColorValid = 'lightpink';
            $scope.emailValid = false;
        }
    }
});

function displayData(data) {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup">' +
                    '<div style="font-size: 14pt;padding-bottom: 2px;padding-left: 100px" >Response back from post server</div>' +
                    '<div style="padding:10px" >' + data + '</div>' +
                '</div>'
            , type: 'inline'
        }
    });
}

function validateDate(testdate) {
    var date_regex = /(0[1-9]|[12][0-9]|3[01])[\/.](0[1-9]|1[012])[\/.](19|20)\d\d/;
    return date_regex.test(testdate);
}

function validateEmail(testemail) {
    var email_regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return email_regex.test(testemail);
}