// Declare app level module which depends on views, and components
angular.module('iahmDBApp', [
    'ngRoute',
    'ngStorage',
    'LocalStorageModule',
    'xeditable',
    'iahmDBApp.secure',
    'iahmDBApp.oauth_callback',
    'iahmDBApp.searchView',
    'iahmDBApp.showView',
    'iahmDBApp.editView',
    'iahmDBApp.view2',
    'iahmDBApp.version'
])

    .config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider', function ($routeProvider, $locationProvider, localStorageServiceProvider) {

        $routeProvider.otherwise({redirectTo: '/search'});

        localStorageServiceProvider
            .setPrefix('iahm_db_front')
            .setStorageType('sessionStorage');

        //$routeProvider.otherwise({redirectTo: '/login'});

        //$locationProvider.html5Mode(true).hashPrefix('!');
    }])
    .controller('appCtrl', ['$scope', "$timeout", '$location', '$http', 'localStorageService', '$filter', function ($scope, $timeout, $location, $http, localStorageService, $filter) {


        $scope.isLogged = false;

        $scope.oauth = {
            client_id: "19_64bxhmfwc8g8c4s0w8w04g4s004o00o44wswg8csw8cgc4cksk",
            redirect_uri: "http://iahmdb-front.local/oauth_callback.php",
            response_type: "token",
            expires_in: null,
            access_token: "",
            refresh_token: "",
            code: "",
            scope: "",
            token_type: ""
        };

        $scope.refreshToken = function () {

            $http.get('http://iahmdb-front.local/refresh_token.php?'
                + "refresh_token=" + $scope.oauth.refresh_token
            )

                .success(function (data, status, headers, config) {

                    $scope.oauth.access_token = data.access_token;
                    $scope.oauth.expires_in = data.expires_in;
                    $scope.oauth.refresh_token = data.refresh_token;
                    $scope.oauth.scope = data.scope;
                    $scope.oauth.token_type = data.token_type;

                    $scope.isLogged = true;


                }).error(function (data, status, headers, config) {
                    $scope.isLogged = false;
                });
        };

        if (JSON.parse(window.localStorage.getItem("iahm_api")) != null) {

            $scope.oauth.access_token = JSON.parse(window.localStorage.getItem("iahm_api")).oauth.access_token;
            $scope.oauth.refresh_token = JSON.parse(window.localStorage.getItem("iahm_api")).oauth.refresh_token;
            $scope.oauth.code = JSON.parse(window.localStorage.getItem("iahm_api")).oauth.code;

            window.localStorage.removeItem("iahm_api");

            var oauth = {
                access_token: $scope.oauth.access_token,
                refresh_token: $scope.oauth.refresh_token
            };

            localStorageService.set('oauth', oauth);
        }

        if (localStorageService.get('oauth')) {

            $scope.oauth.access_token = localStorageService.get('oauth').access_token;
            $scope.oauth.refresh_token = localStorageService.get('oauth').refresh_token;

            $scope.refreshToken();
        }

        $scope.$watch('oauth', function () {
            var oauth = {
                access_token: $scope.oauth.access_token,
                refresh_token: $scope.oauth.refresh_token
            };

            localStorageService.set('oauth', oauth);
        }, true);

        $scope.login = function () {
            window.location.href = "http://iahmdb.local/app_dev.php/oauth/v2/auth?"
                + "client_id=" + $scope.oauth.client_id
                + "&response_type=" + "code"
                + "&redirect_uri=" + $scope.oauth.redirect_uri;
        };

        $scope.logout = function () {
            $scope.isLogged = false;
        };


        $scope.message = "";

        $scope.searchValue = "";

        $scope.searchConstructor = {
            q: "*:*",
            entity: ""
        };

        $scope.searchAll = function () {

            //if ($scope.searchValue == "") {
            //    $scope.searchConstructor.q = "*:*";
            //} else {
            //
            //}

            $scope.searchConstructor.q = $scope.searchValue;

            if ($scope.isLogged) {
                //$scope.message = "searching...";

                $location.path("search");
            }

        };

        $scope.calculateAge = function (birthday) { // pass in player.dateOfBirth

            var year = $filter('date')(birthday, "yyyy");
            var month = $filter('date')(birthday, "MM");
            var day = $filter('date')(birthday, "dd");

            var ageDifMs = Date.now() - new Date(year, month, day);
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        };


        $scope.restContact = {};
        $scope.restEntity = {};
        $scope.restDonation = {};
        $scope.restGroup = {};
        $scope.restLocation = {};
        $scope.restEvent = {};


        $scope.restContact.getContact = function (contact_id) {
            $scope.getRest('contacts/' + contact_id, "ContactReceived");
        };


        $scope.restContact.getDonations = function (contact_id) {
            $scope.getRest('contacts/' + contact_id + '/donations', "DonationsReceived");
        };


        $scope.restContact.getEvents = function (contact_id) {
            $scope.getRest('contacts/' + contact_id + '/events', "EventsReceived");
        };

        $scope.restContact.getGroups = function (contact_id) {
            $scope.getRest('contacts/' + contact_id + '/groups', "GroupsReceived");
        };

        $scope.restContact.putContact = function (contact) {

            if(contact == null) {
                return false;
            }

            var contactToSave = {
                firstname: contact.firstname,
                lastname: contact.lastname,
                title: contact.title,
                gender: contact.gender,
                dateOfBirth: contact.date_of_birth,
                languages: [],
                events: contact.events,
                phones: contact.phones,
                emails: [],
                memberOfs: [],
                leaderOfs: [],
                comment_txt: contact.comment,
                type: contact.type
            };

            $scope.putRest('contacts/' + contact.id, contactToSave, "ContactUpdated");
        };


        $scope.restDonation.putDonation = function (donation) {

            if(donation == null) {
                return false;
            }

            console.log(donation);

            var donationToSave = {
                donation: {
                    date: "2011-06-05 12:15:00",//donation.date,
                    amount: donation.amount,
                    currency: donation.currency,
                    type: donation.type,
                    person: donation.contact_id,
                    comment_txt: donation.comment.text,
                    entity: null
                }
            };

            $scope.putRest('donations/' + donation.id, donationToSave, "DonationUpdated");
        };


        $scope.getRest = function (rest_path, event) {

            var req = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            $http.get('http://iahmdb.local/app_dev.php/api/' + rest_path + "?access_token=" +
                $scope.oauth.access_token, req)
                .success(function (data, status, headers, config) {

                    $scope[event] = data;

                }).
                error(function (data, status, headers, config) {

                    return false;

                });

        };

        $scope.putRest = function (rest_path, data, event) {

            var config = {
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            $http.put('http://iahmdb.local/app_dev.php/api/' + rest_path + "?access_token=" +
                $scope.oauth.access_token, JSON.stringify(data), config)
                .success(function (data, status, headers, config) {

                    //$location.path('/doc/' + $scope.doc_type + '/' + $scope.doc.id);

                    $scope[event] = data;

                }).
                error(function (data, status, headers, config) {

                    return false;
                });

        }


    }]);



