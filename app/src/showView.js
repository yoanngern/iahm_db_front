'use strict';

angular.module('iahmDBApp.showView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:doc_type/:id', {
            templateUrl: 'views/show.html',
            controller: 'showCtrl'
        });
    }])

    .controller('showCtrl', ['$scope', '$http', '$routeParams', '$location', 'rest', 'language', '$moment', 'message', function ($scope, $http, $routeParams, $location, rest, language, $moment, message) {

        if (typeof($routeParams.doc_type) === 'undefined' ||
            typeof($routeParams.id) === 'undefined') {

            $location.path('/search');

        } else {
            $scope.doc_type = $routeParams.doc_type;
            $scope.doc_id = $routeParams.id;
        }


        $scope.doc = {};

        $scope.code_langues = language.getAll();

        $scope.cancelItem = function (doc, section) {
            $scope[section] = false;
        };

        $scope.addEditItem = function (items) {

            var item = {};

            items.push(item);
        };

        $scope.saveItem = function (doc, section) {

            console.log("saveItem");

            if ((doc === "contact" && section === "editTitle") ||
                (doc === "contact" && section === "editInfos") ||
                (doc === "contact" && section === "editCoord") ||
                (doc === "contact" && section === "editComm")) {
                rest.Contact.putContact($scope.contact);
            }

            if (doc === "contact" && section === "editLocation") {

                angular.forEach($scope.contact.entities, function (personType, key) {

                    angular.forEach(personType.entity.locations, function (location, key) {

                        rest.Location.putLocation(location);

                    });
                });
            }

            $scope[section] = false;
        };

        $scope.editItem = function (section) {
            $scope[section] = true;
        };

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

            if (typeof $scope.doc.date_of_birth !== "undefined") {
                $scope.doc.date_of_birth = $moment($scope.doc.date_of_birth);
            }

            $scope.contact = $scope.doc;

            rest.Contact.getDonations($scope.contact.id);
            rest.Contact.getEvents($scope.contact.id);
            rest.Contact.getGroups($scope.contact.id);

        });

        $("html").on('click', "div.tags div.results", function () {
            var elem = $(this)[0];

            $("input", elem).focus();

        }).on('focus', "div.tags div.results input", function () {

            $("div.tags ul.found").show();

        }).mouseup(function (e) {
            var container = $("div.tags");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                $("ul.found", container).hide();
            }
        });

        $scope.removeToResults = function (type, data) {
            if (type == "language") {

                angular.forEach($scope.contact.languages, function (language, key) {

                    if (language.ref == data.ref) {

                        $scope.contact.languages.splice(key, 1);
                    }

                });

            }
        };

        $scope.addToResults = function (type, data) {

            if (type == "language") {

                var inLanguages = false;

                angular.forEach($scope.contact.languages, function (language, key) {

                    if (language.ref == data.id) {
                        inLanguages = true;
                    }

                });

                if (!inLanguages) {

                    var language = {
                        ref: data.id
                    };

                    $("div.tags div.results input").val("").focus();

                    $scope.contact.languages.push(language);
                }
            }

        };

        $scope.$on('EntityReceived', function (event, data) {
            $scope.doc = data;
            $scope.entity = $scope.doc;
        });


        $scope.$on('ContactUpdated', function (event, data) {

            rest.Contact.getContact($scope.contact.id);

        });

        $scope.$on('ContactDonationsReceived', function (event, data) {
            $scope.donations = data.donations;
        });

        $scope.$on('ContactEventsReceived', function (event, data) {
            $scope.events = data.events;
        });

        $scope.$on('ContactGroupsReceived', function (event, data) {
            $scope.groups = data.groups;
        });




    }])

    .filter('ageFilter', function () {
        function calculateAge(birthday) { // birthday is a date

            birthday = new Date(birthday);

            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        function monthDiff(d1, d2) {
            if (d1 < d2) {
                var months = d2.getMonth() - d1.getMonth();
                return months <= 0 ? 0 : months;
            }
            return 0;
        }

        return function (birthdate) {
            var age = calculateAge(birthdate);
            if (age == 0)
                return monthDiff(birthdate, new Date()) + ' months';
            return age;
        };
    })

    .filter('tel', function () {
        return function (tel) {
            if (!tel) {
                return '';
            }

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
    })

    .filter('language', ['language', function (language) {
        return function (val) {
            if (!val) {
                return '';
            }

            var return_val = "";

            var languages = language.getAll();

            angular.forEach(languages, function (language, key) {

                if (language.id == val) {
                    return_val = language.fr_name;
                }

            });

            return return_val;

        };
    }]);