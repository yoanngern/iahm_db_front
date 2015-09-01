iahmDBApp.factory('rest', ['$http', '$rootScope', '$moment', 'secure', function ($http, $rootScope, $moment, secure) {


    var rest = {};

    rest.apiURL = 'http://iahmdb.local/app_dev.php/api/';

    rest.Contact = {};
    rest.Entity = {};
    rest.Donation = {};
    rest.Group = {};
    rest.Location = {};
    rest.Event = {};

    rest.Search = {};

    rest.setArrayObject = function (objects) {

        angular.forEach(objects, function (object, key) {
            delete object.$$hashKey;
        });

        return objects;
    };

    rest.setArrayId = function (objects, id_label) {

        var newArray = [];

        angular.forEach(objects, function (object, key) {

            newArray.push(object[id_label]);
        });

        return newArray;
    };


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

    rest.Donation.getDonations = function () {
        rest.getRest('donations/', "DonationsReceived");
    };

    rest.Donation.getDonation = function (donation_id) {
        rest.getRest('donations/' + donation_id, "DonationReceived");
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
                dateOfBirth: $moment(contact.date_of_birth).format('YYYY-MM-DD'),
                languages: rest.setArrayId(contact.languages, "ref"),
                events: rest.setArrayId(contact.events, "id"),
                phones: rest.setArrayObject(contact.phones),
                emails: rest.setArrayObject(contact.emails),
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
                date: $moment(donation.date).format('YYYY-MM-DD HH:mm:ss'),
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


    rest.Entity.postContact = function (entity, contact) {

        if (entity == null || contact == null) {
            return false;
        }

        console.log(contact);

        var contactToSave = {
            contact: {
                firstname: contact.firstname,
                lastname: contact.lastname,
                title: contact.title,
                gender: contact.gender,
                dateOfBirth: contact.date_of_birth,
                languages: rest.setArrayId(contact.languages, "ref"),
                phones: rest.setArrayObject(contact.phones),
                emails: rest.setArrayObject(contact.emails),
                comment_txt: contact.comment,
                type: contact.type
            }
        };

        rest.postRest('entities/' + entity.id + '/contacts', contactToSave, "ContactCreated");

    };


    rest.Entity.postEntity = function (entity) {

        if (entity == null) {
            return false;
        }

        console.log(entity);

        var entityToSave = {
            entity: {
                name: entity.name,
                type: entity.type,
                locations: rest.setArrayObject(entity.locations),
                phones: rest.setArrayObject(entity.phones),
                emails: rest.setArrayObject(entity.emails),
                comment_txt: entity.comment
            }
        };

        rest.postRest('entities', entityToSave, "EntityCreated");

    };


    rest.Donation.postDonation = function (donation) {

        if (donation == null) {
            return false;
        }

        console.log(donation);

        var donationToSave = {
            donation: {
                date: $moment(donation.date).format('YYYY-MM-DD HH:mm:ss'),
                amount: donation.amount,
                currency: donation.currency,
                type: donation.type,
                comment_txt: donation.comment
            }
        };

        rest.postRest('donations', donationToSave, "DonationCreated");

    };


    rest.Contact.postDonation = function (contact, donation) {

        if (donation == null || contact == null) {
            return false;
        }

        console.log(donation);

        var donationToSave = {
            donation: {
                date: $moment(donation.date).format('YYYY-MM-DD HH:mm:ss'),
                amount: donation.amount,
                currency: donation.currency,
                type: donation.type,
                comment_txt: donation.comment
            }
        };

        rest.postRest('contacts/' + contact.id + '/donations', donationToSave, "DonationCreated");

    };

    rest.Entity.postDonation = function (entity, donation) {

        if (donation == null || entity == null) {
            return false;
        }

        console.log(donation);

        var donationToSave = {
            donation: {
                date: $moment(donation.date).format('YYYY-MM-DD HH:mm:ss'),
                amount: donation.amount,
                currency: donation.currency,
                type: donation.type,
                comment_txt: donation.comment
            }
        };

        rest.postRest('entities/' + entity.id + '/donations', donationToSave, "DonationCreated");

    };

    rest.Event.postEvent = function (event) {

        if (event == null) {
            return false;
        }

        console.log(event);

        var eventToSave = {
            event: {
                title: event.title,
                start: $moment(event.start).format('YYYY-MM-DD HH:mm:ss'),
                end: $moment(event.end).format('YYYY-MM-DD HH:mm:ss'),
            }
        };

        rest.postRest('events', eventToSave, "EventCreated");

    };

    rest.Group.postGroup = function (group) {

        if (group == null) {
            return false;
        }

        console.log(group);

        var groupToSave = {
            group: {
                title: group.title
            }
        };

        rest.postRest('groups', groupToSave, "GroupCreated");

    };


    rest.Search.search = function (query, event) {

        rest.getRest('search?' + query, event);
    };


    rest.getURL = function (url, event) {

        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                access_token: secure.oauth.access_token
            }
        };

        $http.get(url, req).
            then(function (response) {

                secure.isConnected = true;

                $rootScope.$broadcast(event, response.data);

            }, function (response) {

                return false;

            });

    };


    rest.getRest = function (rest_path, event) {

        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                access_token: secure.oauth.access_token
            }
        };

        $http.get('http://iahmdb.local/app_dev.php/api/' + rest_path, req)
            .success(function (data, status, headers, config) {

                secure.isConnected = true;

                $rootScope.$broadcast(event, data);

            }).
            error(function (data, status, headers, config) {

                if (data.error == "invalid_grant" || status == 401) {

                    if (secure.updateAccess()) {
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
            },
            params: {
                access_token: secure.oauth.access_token
            }
        };

        $http.put('http://iahmdb.local/app_dev.php/api/' + rest_path, JSON.stringify(data), config)
            .success(function (data, status, headers, config) {

                secure.isConnected = true;

                //$location.path('/doc/' + rest.doc_type + '/' + rest.doc.id);

                $rootScope.$broadcast(event, data);

            }).
            error(function (data, status, headers, config) {

                return false;
            });

    };

    rest.postRest = function (rest_path, data, event) {

        var config = {
            dataType: "json",
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                access_token: secure.oauth.access_token
            }
        };


        $http.post('http://iahmdb.local/app_dev.php/api/' + rest_path, JSON.stringify(data), config).
            then(function (response) {

                secure.isConnected = true;

                var location = response.headers("Location");

                rest.getURL('http://iahmdb.local' + location, event);

            }, function (response) {

                return false;

            });

    };


    return rest;

}]);