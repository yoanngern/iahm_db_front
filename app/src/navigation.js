'use strict';

angular.module('iahmDBApp.navigation', [])

    .controller('navCtrl', ['$scope', function ($scope) {

        switch ($scope.doc_type) {
            case "contact":

                $scope.tabs = [{
                    title: 'Infos',
                    url: 'infos.tpl.html'
                }, {
                    title: 'Events',
                    url: 'events.tpl.html'
                }, {
                    title: 'Groups',
                    url: 'groups.tpl.html'
                }, {
                    title: 'Adresses',
                    url: 'locations.tpl.html'
                }, {
                    title: 'Dons',
                    url: 'donations.tpl.html'
                }, {
                    title: 'Entités',
                    url: 'entities.tpl.html'
                }];

                break;

            case "entity":

                $scope.tabs = [{
                    title: 'Infos',
                    url: 'infos.tpl.html'
                }];

                break;

            case "donation":

                $scope.tabs = [{
                    title: 'Infos',
                    url: 'infos.tpl.html'
                }];

                break;

            case "group":

                $scope.tabs = [{
                    title: 'Infos',
                    url: 'infos.tpl.html'
                }];

                break;

            case "event":

                $scope.tabs = [{
                    title: 'Infos',
                    url: 'infos.tpl.html'
                }];

                break;
        }


        $scope.currentTab = 'infos.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function (tabUrl) {
            return tabUrl == $scope.currentTab;
        };

    }]);