'use strict';

angular.module('iahmDBApp.editView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:doc_type?/:id?/edit', {
            templateUrl: 'editView/edit.html',
            controller: 'editCtrl'
        });
    }])

    .controller('editCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

        $scope.doc_type = $routeParams.doc_type;

        console.log($scope.doc_type);

        var api_path = "";
        $scope.doc = {
            id: $routeParams.id,
        };

        if ($scope.doc_type == "contact") {
            api_path = "contacts";

            $scope.doc = {
                id: $routeParams.id,
                contact: {
                    firstname: "Yoann",
                    lastname: "nom",
                    title: "title",
                    gender: "man",
                    dateOfBirth: "1993-05-06",
                    phones: [
                        {
                            number: "376418972365987",
                            type: "mobile"
                        }
                    ],
                    emails: [
                        {
                            value: "yoann@yoanngern.ch",
                            type: "private"
                        }
                    ],
                    languages: [
                        "fr", "en"
                    ],
                    comment_txt: "test blabla",
                    type: "father",
                    memberOfs: [],
                    leaderOfs: [],
                    events: [],
                }
            };

        }
        if ($scope.doc_type == "event") {
            api_path = "events";

            $scope.doc = {
                id: $routeParams.id,
                event: {
                    title: "Mon super event2",
                    start: '2011-06-05 12:15:00',
                    end: '2012-06-05 12:15:00',
                    parent: 2,
                    persons: [
                        2
                    ],
                    groups: [
                        {
                            group: {
                                title: "test",
                            }
                        }]
                }
            };
        }


        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };


        $http.get('http://iahmdb.local/app_dev.php/api/' + api_path + '/' + $scope.doc.id, req).success(function (data, status, headers, config) {
            //$scope.doc = data;

            $scope.doc.event.title = data.title;
            $scope.doc.event.end = data.end;
            $scope.doc.event.start = data.start;
            $scope.doc.event.groups = data.groups;
            $scope.doc.event.persons = data.participants;

            $scope.message = "";
        }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        console.log("edit: " + $scope.doc.id);

        $scope.saveDoc = function () {

            var data = {
                event: $scope.doc.event
            };

            var req = {
                method: 'PUT',
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            console.log(data);

            $http.put('http://iahmdb.local/app_dev.php/api/' + api_path + '/' + $scope.doc.id, data, req).success(function (data, status, headers, config) {
                console.log("success");

            }).
                error(function (data, status, headers, config) {

                    console.log(data);
                });
        }


    }]);