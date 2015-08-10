'use strict';

// Declare app level module which depends on views, and components
var iahmDBApp = angular.module('iahmDBApp', [
    'ngRoute',
    'LocalStorageModule',
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

    .controller('appCtrl', ['$scope', '$location', 'localStorageService', 'secure', function ($scope, $location, localStorageService, secure) {


        $scope.connect = function () {
            secure.connect();
        };

        secure.updateOauth();

        $scope.getOauth = function () {
            return secure.oauth
        };

        $scope.updateAccess = function() {
            secure.updateAccess();
        };

        $scope.resetOauth = function () {
            secure.resetOauth();
        };

        $scope.badAccessToken = function () {
          secure.badAccessToken();
        };

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

