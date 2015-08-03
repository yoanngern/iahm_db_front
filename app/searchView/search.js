'use strict';

angular.module('iahmDBApp.searchView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'searchView/search.html',
            controller: 'searchCtrl'
        });
    }])

    .controller('searchCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.results = [];

        $scope.searchRequest = "";

        $scope.filterSearch = function (param) {
            console.log(param);

            $scope.searchConstructor.entity = param;

            if (param == "all") {
                $scope.searchConstructor.entity = "";
            }

            console.log($scope.searchConstructor);

        };

        $scope.showView = function (doc_type, id) {

            $scope.message = "loading...";
            $location.path(doc_type + "/" + id);

        };

        $scope.$watch('searchConstructor', function () {



            $scope.searchRequest = $scope.searchConstructor.q;

            if ($scope.searchConstructor.entity) {
                $scope.searchRequest += " AND doc_type:" + $scope.searchConstructor.entity;
            }

        }, true);

        $scope.$watch('searchRequest', function () {

            var req = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/javascript'
                },
                params: {
                    q: $scope.searchRequest
                }
            };

            $scope.message = "loading...";
            $http.get('http://iahmdb.local/app_dev.php/api/search', req).success(function (data, status, headers, config) {
                $scope.results = data;
                $scope.message = "";
            }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }, true);

    }]);