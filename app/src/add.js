'use strict';

angular.module('iahmDBApp.add', [])

    .controller('addCtrl', ['$scope', 'rest', function ($scope, rest) {

        $scope.addItem_type = "";

        $scope.contactToCreate = {};
        $scope.entityToCreate = {};
        $scope.donationToCreate = {};
        $scope.groupToCreate = {};
        $scope.eventToCreate = {};

        $scope.openView = function () {

            console.log("addView()");

        };

        $scope.addItem = function (item_type) {
            $scope.addItem_type = item_type;

            switch (item_type) {
                case 'entity':
                    $scope.setEntity();

                    break;

                case 'contact':
                    $scope.setContact();

                    break;

                case 'event':
                    $scope.setEvent();

                    break;

                case 'group':
                    $scope.setGroup();

                    break;

                case 'donation':
                    $scope.setDonation();

                    break;
            }
        };

        $scope.saveNew = function (item_type) {

            switch (item_type) {
                case 'entity':
                    rest.Entity.postEntity($scope.entityToCreate);

                    break;

                case 'contact':
                    $scope.setContact();

                    break;

                case 'event':
                    $scope.setEvent();

                    break;

                case 'group':
                    $scope.setGroup();

                    break;

                case 'donation':
                    $scope.setDonation();

                    break;
            }
        };

        $scope.setEntity = function () {
            $scope.entityToCreate.locations = [];
            $scope.entityToCreate.locations.push({});
        };

        $scope.setContact = function () {

        };

        $scope.setGroup = function () {

        };

        $scope.setDonation = function () {

        };

        $scope.setEvent = function () {

        };

        $scope.$on('EntityCreated', function (event, data) {
            var entity = data;

            console.log(entity);

        });

    }]);