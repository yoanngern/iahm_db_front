iahmDBApp.factory('secure', ['$http', '$rootScope', function ($http, $rootScope) {


    var secure = {};


    secure.oauth = {
        client_id: "19_64bxhmfwc8g8c4s0w8w04g4s004o00o44wswg8csw8cgc4cksk",
        redirect_uri: "http://iahmdb-front.local/oauth_callback.php",
        oauth_url: "http://iahmdb.local/app_dev.php/oauth/v2/auth",
        access_token: null,
        refresh_token: null,
        expires_in: null,
        token_type: null,
        scope: null
    };

    secure.resetOauth = function () {
        window.localStorage.setItem("iahm_api", null);

        secure.updateOauth();
    };

    secure.badAccessToken = function () {
        secure.oauth.access_token = "eurcgnxiurzgizg2i453gnit78zg324t78z2483tn92847t298";
    };

    secure.updateOauth = function () {
        var iahm_api = JSON.parse(window.localStorage.getItem("iahm_api"));

        if (iahm_api == null) {
            iahm_api = {
                oauth: {
                    access_token: null,
                    refresh_token: null,
                    expires_in: null,
                    token_type: null,
                    scope: null
                }
            };
        }

        secure.oauth.access_token = iahm_api.oauth.access_token;
        secure.oauth.refresh_token = iahm_api.oauth.refresh_token;
        secure.oauth.expires_in = iahm_api.oauth.expires_in;
        secure.oauth.token_type = iahm_api.oauth.token_type;
        secure.oauth.scope = iahm_api.oauth.scope;
    };

    secure.connect = function () {

        window.location.href = secure.oauth.oauth_url
            + "?client_id=" + secure.oauth.client_id
            + "&response_type=" + "code"
            + "&redirect_uri=" + secure.oauth.redirect_uri;
    };

    secure.updateAccess = function () {

        console.log("updateAccess");

        var req = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.get('http://iahmdb-front.local/refresh_token.php'
            + "?refresh_token=" + secure.oauth.refresh_token, req)
            .success(function (data, status, headers, config) {

                console.log(data);

                secure.oauth.access_token = data.access_token;
                secure.oauth.refresh_token = data.refresh_token;
                secure.oauth.expires_in = data.expires_in;
                secure.oauth.token_type = data.token_type;
                secure.oauth.scope = data.scope;

                return true;


            }).
            error(function (data, status, headers, config) {

                console.log("error");

                return false;

            });

    };

    return secure;

}]);