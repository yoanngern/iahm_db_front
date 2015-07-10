'use strict';

angular.module('iahmDBApp.contactView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact/:id?', {
            templateUrl: 'contactView/view.html',
            controller: 'contactCtrl'
        });
    }])

    .controller('contactCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {


        $scope.contact = {
            id: $routeParams.id
        };

        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };


        $http.get('http://iahmdb.local/app_dev.php/api/contacts/' + $scope.contact.id, req).success(function (data, status, headers, config) {
            $scope.contact = data;
            $scope.message = "";
        }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

    }]);

