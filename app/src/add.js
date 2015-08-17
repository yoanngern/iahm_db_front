'use strict';

angular.module('iahmDBApp.add', [])

    .controller('addCtrl', ['$scope', function ($scope) {

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
        };

    }]);