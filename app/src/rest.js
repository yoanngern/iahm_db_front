
/*
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

    */