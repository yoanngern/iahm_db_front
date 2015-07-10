'use strict';

// Declare app level module which depends on views, and components
angular.module('iahmDBApp', [
    'ngRoute',
    'iahmDBApp.searchView',
    'iahmDBApp.showView',
    'iahmDBApp.editView',
    'iahmDBApp.view2',
    'iahmDBApp.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/search'});
    }]).controller('appCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.message = "";

        $scope.searchValue = "";

        $scope.searchConstructor = {
            q: "*:*",
            entity: ""
        };

        $scope.searchAll = function () {

            if($scope.searchValue == "") {
                $scope.searchConstructor.q = "*:*";
            } else {
                $scope.searchConstructor.q = $scope.searchValue;
            }

            //$scope.message = "searching...";

            $location.path("searchView");

        }

    }]);

