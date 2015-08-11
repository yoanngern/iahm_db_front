'use strict';

angular.module('iahmDBApp.showView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:doc_type/:id', {
            templateUrl: 'views/show.html',
            controller: 'showCtrl'
        });
    }])

    .controller('showCtrl', ['$scope', '$http', '$routeParams', '$location', 'rest', function ($scope, $http, $routeParams, $location, rest) {

        if (typeof($routeParams.doc_type) === 'undefined' ||
            typeof($routeParams.id) === 'undefined') {

            $location.path('/search');

        } else {
            $scope.doc_type = $routeParams.doc_type;
            $scope.doc_id = $routeParams.id;
        }

        $scope.doc = {};

        $scope.getDoc = function (type, id) {
            switch (type) {
                case "contact":

                    rest.Contact.getContact(id);

                    break;

                case "entity":

                    rest.Entity.getEntity(id);

                    break;

                case "donation":

                    rest.Donation.getDonation(id);

                    break;

                case "group":

                    rest.Group.getGroup(id);

                    break;

                case "event":

                    rest.Event.getEvent(id);

                    break;
            }
        };

        $scope.getDoc($scope.doc_type, $scope.doc_id);

        $scope.$on('ContactReceived', function (event, data) {
            $scope.doc = data;
            $scope.contact = $scope.doc;
        });

        $scope.$on('EntityReceived', function (event, data) {
            $scope.doc = data;
            $scope.entity = $scope.doc;
        });

    }])

    .filter('tel', function () {
        return function (tel) {
            if (!tel) { return ''; }

            var value = tel.toString().trim().replace(/^\+/, '');

            if (value.match(/[^0-9]/)) {
                return tel;
            }

            var country, city, number;

            switch (value.length) {
                case 10: // +1PPP####### -> C (PPP) ###-####
                    country = 1;
                    city = value.slice(0, 3);
                    number = value.slice(3);
                    break;

                case 11: // +CPPP####### -> CCC (PP) ###-####
                    country = value[0];
                    city = value.slice(1, 4);
                    number = value.slice(4);
                    break;

                case 12: // +CCCPP####### -> CCC (PP) ###-####
                    country = value.slice(0, 3);
                    city = value.slice(3, 5);
                    number = value.slice(5);
                    break;

                default:
                    return tel;
            }

            if (country == 1) {
                country = "";
            }

            number = number.slice(0, 3) + '-' + number.slice(3);

            return (country + " (" + city + ") " + number).trim();
        };
    });