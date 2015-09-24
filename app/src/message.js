iahmDBApp.factory('message', ['$rootScope', '$interval', function ($rootScope, $interval) {


    var message = {};


    message.display = function (text) {

        $rootScope.message = text;

    };

    message.pop = function (text) {

        $rootScope.message = text;

        var stop;

        stop = $interval(function() {
            $rootScope.message = "";
        }, 1500);

    };

    return message;

}]);