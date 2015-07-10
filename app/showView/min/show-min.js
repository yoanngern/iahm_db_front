'use strict';

angular.module('iahmDBApp.showView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:doc_type?/:id?', {
            templateUrl: 'showView/show.html',
            controller: 'showCtrl'
        });
    }])

    .controller('showCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

        $scope.doc_type = $routeParams.doc_type;
        var api_path = "";

        if (typeof($routeParams.doc_type) === 'undefined' || typeof($routeParams.id) === 'undefined') {
            $location.path('/search');
        }



        if ($scope.doc_type == "contact") {
            api_path = "contacts";
        }
        if ($scope.doc_type == "event") {
            api_path = "events";
        }

        $scope.doc = {
            id: $routeParams.id
        };

        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.get('http://iahmdb.local/app_dev.php/api/' + api_path + '/' + $scope.doc.id, req).success(function (data, status, headers, config) {
            $scope.doc = data;
            $scope.message = "";
        }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

    }]);

