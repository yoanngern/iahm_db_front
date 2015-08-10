iahmDBApp.factory('rest', ['$http', '$rootScope', 'secure', function ($http, $rootScope, secure) {


    var rest = {};

    rest.Contact = {};
    rest.Entity = {};
    rest.Donation = {};
    rest.Group = {};
    rest.Location = {};
    rest.Event = {};


    rest.Contact.getContacts = function () {
        rest.getRest('contacts/', "ContactsReceived");
    };

    rest.Contact.getContact = function (contact_id) {
        rest.getRest('contacts/' + contact_id, "ContactReceived");
    };

    rest.Contact.getDonations = function (contact_id) {
        rest.getRest('contacts/' + contact_id + '/donations', "ContactDonationsReceived");
    };

    rest.Contact.getEvents = function (contact_id) {
        rest.getRest('contacts/' + contact_id + '/events', "ContactEventsReceived");
    };

    rest.Contact.getGroups = function (contact_id) {
        rest.getRest('contacts/' + contact_id + '/groups', "ContactGroupsReceived");
    };

    rest.Contact.getLeaders = function (contact_id) {
        rest.getRest('contacts/' + contact_id + '/leaders', "ContactLeadersReceived");
    };

    rest.Contact.getMembers = function (contact_id) {
        rest.getRest('contacts/' + contact_id + '/members', "ContactMembersReceived");
    };

    rest.Entity.getEntities = function () {
        rest.getRest('entities/', "EntitiesReceived");
    };

    rest.Entity.getEntity = function (entity_id) {
        rest.getRest('entities/' + entity_id, "EntityReceived");
    };

    rest.Entity.getDonations = function (entity_id) {
        rest.getRest('entities/' + entity_id + '/donations', "EntityDonationsReceived");
    };

    rest.Entity.getGroups = function (entity_id) {
        rest.getRest('entities/' + entity_id + '/groups', "EntityGroupsReceived");
    };

    rest.Location.getLocations = function () {
        rest.getRest('locations/', "LocationsReceived");
    };

    rest.Location.getLocation = function (location_id) {
        rest.getRest('locations/' + location_id, "LocationReceived");
    };

    rest.Group.getGroup = function (group_id) {
        rest.getRest('groups/' + group_id, "GroupReceived");
    };

    rest.Group.getGroups = function () {
        rest.getRest('groups/', "GroupsReceived");
    };

    rest.Location.getLocation = function (location_id) {
        rest.getRest('locations/' + location_id, "LocationReceived");
    };

    rest.Event.getEvents = function () {
        rest.getRest('events/', "EventsReceived");
    };

    rest.Event.getEvent = function (event_id) {
        rest.getRest('events/' + event_id, "EventReceived");
    };

    rest.Event.getGroups = function (event_id) {
        rest.getRest('events/' + event_id + '/groups', "EventGroupsReceived");
    };

    rest.Contact.putContact = function (contact) {

        if (contact == null) {
            return false;
        }

        var contactToSave = {
            contact: {
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
            }
        };

        rest.putRest('contacts/' + contact.id, contactToSave, "ContactUpdated");
    };

    rest.Contact.putDonations = function (contact, donations) {

        if (contact == null || donations == null) {
            return false;
        }

        var contactToSave = {
            contact: {
                donations: donations
            }
        };

        rest.putRest('contacts/' + contact.id + '/donations', contactToSave, "ContactDonationsUpdated");
    };


    rest.Donation.putDonation = function (donation) {

        if (donation == null) {
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

        rest.putRest('donations/' + donation.id, donationToSave, "DonationUpdated");
    };


    rest.getRest = function (rest_path, event) {

        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.get('http://iahmdb.local/app_dev.php/api/' + rest_path + "?access_token=" +
            secure.oauth.access_token, req)
            .success(function (data, status, headers, config) {

                $rootScope.$broadcast(event, data);

            }).
            error(function (data, status, headers, config) {

                console.log(data);

                if (data.error == "invalid_grant") {

                    if(secure.updateAccess()) {
                        rest.getRest(rest_path, event);
                    }

                }

                return false;

            });

    };

    rest.putRest = function (rest_path, data, event) {

        var config = {
            dataType: "json",
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.put('http://iahmdb.local/app_dev.php/api/' + rest_path + "?access_token=" +
            secure.oauth.access_token, JSON.stringify(data), config)
            .success(function (data, status, headers, config) {

                //$location.path('/doc/' + rest.doc_type + '/' + rest.doc.id);

                $rootScope.$broadcast(event, data);

            }).
            error(function (data, status, headers, config) {

                return false;
            });

    }


    return rest;

}]);