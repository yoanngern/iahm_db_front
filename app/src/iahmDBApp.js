'use strict';

// Declare app level module which depends on views, and components
angular.module('iahmDBApp', [
    'ngRoute',
    'iahmDBApp.showView',
    'iahmDBApp.searchView'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/search'});
    }])

    /*
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    */

    .controller('appCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.message = "";

        $scope.searchValue = "";

        $scope.searchConstructor = {
            q: "*:*",
            entity: ""
        };

        $scope.searchAll = function () {

            if ($scope.searchValue == "") {
                $scope.searchConstructor.q = "*:*";
            } else {
                $scope.searchConstructor.q = $scope.searchValue;
            }

            //$scope.message = "searching...";

            $location.path("search");

        }

    }]);

