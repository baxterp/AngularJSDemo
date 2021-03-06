app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

app.directive('script', function () {
    return {
        restrict: 'E',
        scope: false,
        link: function (scope, elem, attr) {
            if (attr.type === 'text/javascript-lazy') {
                var code = elem.text();
                var f = new Function(code);
                f();
            }
        }
    };
});

app.directive('dateKeys', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            element.on('keypress', function (event) {

                if (isNumericKeyCode(event.keyCode)
                    || isForwardSlashKeyCode(event.keyCode)) {
                    return true;
                }
                return false;
            });
        }
    }

    function isNumericKeyCode(keyCode) {
        return (keyCode >= 48 && keyCode <= 57);
    }
    function isForwardSlashKeyCode(keyCode) {
        return keyCode == 191 || keyCode == 111 || keyCode == 47;
    }
});

app.directive('emailKeys', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            element.on('keypress', function (event) {

                if (isAlphaNumberic(event.keyCode)
                    || isAtSign(event.keyCode)
                    || isPeriod(event.keyCode)
                    || IsDashUnderScore(event.keyCode)) {
                    return true;
                }
                return false;
            });
        }
    }

    function IsDashUnderScore(keyCode) {
        return (keyCode == 45 || keyCode == 95)
    }

    function isAlphaNumberic(keyCode) {
        return (keyCode >= 65 && keyCode <= 90)
            || (keyCode >= 97 && keyCode <= 122)
            || (keyCode >= 48 && keyCode <= 57)
    }
    function isAtSign(keyCode) {
        if (keyCode == 64)
            return true;
    }
    function isPeriod(keyCode) {
        if (keyCode == 46)
            return true;
    }
});

app.directive('imageonload', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('load', function () {
                $('.image-link').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    showCloseBtn: false,
                    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

                    zoom: {
                        enabled: true, // By default it's false, so don't forget to enable it

                        duration: 300, // duration of the effect, in milliseconds
                        easing: 'ease-in-out', // CSS transition easing function 

                        // The "opener" function should return the element from which popup will be zoomed in
                        // and to which popup will be scaled down
                        // By defailt it looks for an image tag:
                        opener: function (openerElement) {
                            // openerElement is the element on which popup was initialized, in this case its <a> tag
                            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                            return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                    }

                });
            });
        }
    };
});