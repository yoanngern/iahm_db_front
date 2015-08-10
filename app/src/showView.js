'use strict';

angular.module('iahmDBApp.showView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:doc_type/:id', {
            templateUrl: 'views/show.html',
            controller: 'showCtrl'
        });
    }])

    .controller('showCtrl', ['$scope', '$http', '$routeParams', '$location', 'rest', function ($scope, $http, $routeParams, $location, rest) {


        $scope.doc_type = $routeParams.doc_type;
        var api_path = "";

        if (typeof($routeParams.doc_type) === 'undefined' || typeof($routeParams.id) === 'undefined') {
            $location.path('/search');
        }

        $scope.doc = {
            id: $routeParams.id
        };


        if ($scope.doc_type == "contact") {
            rest.Contact.getContact($scope.doc.id);
        }
        if ($scope.doc_type == "event") {
            api_path = "events";
        }


        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $scope.$on('ContactReceived', function(event, data) {
            $scope.doc = data;
        });

        /*
         $http.get('http://iahmdb.local/app_dev.php/api/' + api_path + '/' + $scope.doc.id, req).success(function (data, status, headers, config) {
         $scope.doc = data;
         $scope.message = "";
         }).
         error(function (data, status, headers, config) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         });
         */

    }]);