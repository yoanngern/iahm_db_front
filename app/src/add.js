'use strict';

angular.module('iahmDBApp.add', [])

    .controller('addCtrl', ['$scope', 'rest', function ($scope, rest) {

        $scope.addItem_view = "choice";

        $scope.contactToCreate = {};
        $scope.entityToCreate = {};
        $scope.donationToCreate = {};
        $scope.groupToCreate = {};
        $scope.eventToCreate = {};

        $scope.openView = function () {

            console.log("openView()");

        };


        $scope.searchEntity = function (val) {

            if(val == "" || val == null) {

                $scope.foundEntities = [];

                return false;
            }

            var query = "q=" + val + "~* AND doc_type:entity";

            rest.Search.search(query, "SearchEntityFound");
        };

        $scope.selectEntity = function (entity_id) {

            rest.Entity.getEntity(entity_id);
        };

        $scope.$on('SearchEntityFound', function(event, data) {
            $scope.foundEntities = data.documents;
        });

        $scope.$on('EntityReceived', function(event, data) {

            $scope.currentEntity = data;
            $scope.addItem("entityAction");
        });


        $scope.searchContact = function (val) {

            if(val == "" || val == null) {

                $scope.foundContacts = [];

                return false;
            }

            var query = "q=" + val + "~* AND doc_type:contact";

            rest.Search.search(query, "SearchContactFound");
        };

        $scope.selectContact = function (contact_id) {

            rest.Contact.getContact(contact_id);
        };

        $scope.$on('SearchContactFound', function(event, data) {
            $scope.foundContacts = data.documents;
        });

        $scope.$on('ContactReceived', function(event, data) {

            $scope.currentContact = data;
            $scope.addItem("contactAction");
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
                    rest.Event.postEvent($scope.eventToCreate);

                    break;

                case 'group':
                    rest.Group.postGroup($scope.groupToCreate);

                    break;

                case 'donation':
                    rest.Donation.postDonation($scope.donationToCreate);

                    break;

                case 'donationContact':
                    rest.Contact.postDonation($scope.currentContact, $scope.donationToCreate);

                    break;

                case 'donationEntity':
                    rest.Entity.postDonation($scope.currentEntity, $scope.donationToCreate);

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

        $scope.$on('DonationCreated', function (event, data) {

            console.log("DonationCreated");

            $scope.closeAddView();
        });

        $scope.$on('EventCreated', function (event, data) {

            console.log("EventCreated");

            $scope.closeAddView();
        });

        $scope.$on('GroupCreated', function (event, data) {

            console.log("GroupCreated");

            $scope.closeAddView();
        });

    }]);