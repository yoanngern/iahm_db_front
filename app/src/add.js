'use strict';

angular.module('iahmDBApp.add', [])

    .controller('addCtrl', ['$scope', 'rest', function ($scope, rest) {

        $scope.addItem_view = "choice";

        $scope.searchEntity_val = "vvv";

        $scope.contactToCreate = {};
        $scope.entityToCreate = {};
        $scope.donationToCreate = {};
        $scope.groupToCreate = {};
        $scope.eventToCreate = {};

        $scope.openView = function () {

            console.log("openView()");

        };


        $scope.searchEntity = function () {

            console.log($scope.searchEntity_val);

            var query = "q=" + $scope.searchEntity_value + " AND doc_type:entity";

            //rest.Search.search(query, "SearchEntityFound");
        };

        $scope.$on('SearchEntityFound', function(event, data) {
            $scope.foundEntities = data;
        });

        $scope.addItem = function (item_type) {
            $scope.addItem_view = item_type;

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
                    rest.Entity.postContact($scope.currentEntity, $scope.contactToCreate);

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
            $scope.entityToCreate = {};
            $scope.entityToCreate.locations = [];
            $scope.entityToCreate.locations.push({});
        };

        $scope.setContact = function () {
            $scope.contactToCreate = {};
        };

        $scope.setGroup = function () {

        };

        $scope.setDonation = function () {

        };

        $scope.setEvent = function () {

        };

        $scope.$on('EntityCreated', function (event, data) {

            $scope.currentEntity = data;

            $scope.addItem("choiceEntity");

        });


        $scope.$on('ContactCreated', function (event, data) {

            console.log("ContactCreated");

            $scope.currentContact = data;

            $scope.addItem("choiceEntity");
        });

    }]);