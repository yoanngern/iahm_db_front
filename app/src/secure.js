iahmDBApp.factory('secure', function () {


    var secure = {};


    secure.oauth = {
        client_id: "18_3lhluvpto6g48www8k0swsckcssocs488kooswkoogc4wgcs0",
        redirect_uri: "http://iahmdb-front.local/oauth_callback.php",
        oauth_url: "http://iahmdb.local/app_dev.php/oauth/v2/auth",
        access_token: null,
        refresh_token: null,
        expires_in: null,
        token_type: null,
        scope: null
    };

    secure.updateOauth = function() {
        var iahm_api = JSON.parse(window.localStorage.getItem("iahm_api"));

        secure.oauth.access_token   = iahm_api.oauth.access_token;
        secure.oauth.refresh_token  = iahm_api.oauth.refresh_token;
        secure.oauth.expires_in     = iahm_api.oauth.expires_in;
        secure.oauth.token_type     = iahm_api.oauth.token_type;
        secure.oauth.scope          = iahm_api.oauth.scope;
    };

    secure.connect = function () {

        window.location.href = secure.oauth.oauth_url
            + "?client_id=" + secure.oauth.client_id
            + "&response_type=" + "code"
            + "&redirect_uri=" + secure.oauth.redirect_uri;
    };

    return secure;

});