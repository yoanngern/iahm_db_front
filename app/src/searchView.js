'use strict';

angular.module('iahmDBApp.searchView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'views/search.html',
            controller: 'searchCtrl'
        });
    }])

    .controller('searchCtrl', ['$scope', '$http', '$routeParams', '$location', 'secure', 'rest', function ($scope, $http, $routeParams, $location, secure, rest) {

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

        $scope.$on('SearchFound', function(event, data) {
            $scope.results = data;
        });

        $scope.$watch('searchRequest', function () {

            var query = "q=" + $scope.searchRequest;

            rest.Search.search(query);

        }, true);

    }]);