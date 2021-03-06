'use strict';

// Declare app level module which depends on views, and components
var iahmDBApp = angular.module('iahmDBApp', [
    'ngRoute',
    'angular-momentjs',
    'angularMoment',
    'sbDateSelect',
    'ngTagsInput',
    'internationalPhoneNumber',
    'LocalStorageModule',
    'iahmDBApp.showView',
    'iahmDBApp.add',
    'iahmDBApp.navigation',
    'iahmDBApp.searchView'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/search'});
    }])


    /*
     .run(function (amMoment) {
     amMoment.changeLocale('fr');
     })
     */

    /*
     .constant('angularMomentConfig', {
     preprocess: 'unix', // optional
     timezone: 'Europe/London' // optional
     })
     */

    /*
     .config(function ($locationProvider) {
     $locationProvider.html5Mode(true).hashPrefix('!');
     })
     */

    .controller('appCtrl', ['$scope', '$location', 'localStorageService', 'secure', '$moment', 'amMoment', function ($scope, $location, localStorageService, secure, $moment, amMoment) {

        //amMoment.changeLocale('fr');

        $scope.isConnected = function () {
            return secure.isConnected;
        };

        $scope.connect = function () {
            secure.connect();
        };

        secure.updateOauth();

        $scope.getOauth = function () {
            return secure.oauth
        };

        $scope.updateAccess = function () {
            secure.updateAccess();
        };

        $scope.resetOauth = function () {
            secure.resetOauth();
        };

        $scope.badAccessToken = function () {
            secure.badAccessToken();
        };

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

        };

        $scope.addView = function () {

            $scope.addViewStatus = true;

        };

        $scope.closeAddView = function () {

            $scope.addViewStatus = false;

        };


    }]);