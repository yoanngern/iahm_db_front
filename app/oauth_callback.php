<?php

$client_id = "18_3lhluvpto6g48www8k0swsckcssocs488kooswkoogc4wgcs0";
$client_secret = "jwyab4rlfv48so84ko8kog4go04kgk4g4ow48okgk0s8gs8g8";
$redirect_uri = "http://iahmdb-front.local/oauth_callback.php";
$code = $_GET['code'];

$url = "http://iahmdb.local/app_dev.php/oauth/v2/token?client_id=" . $client_id
                . "&client_secret=" . $client_secret
                . "&grant_type=" . "authorization_code"
                . "&redirect_uri=" . $redirect_uri
                . "&code=" . $code;


//var_dump($url);

$json = file_get_contents($url);
$data = json_decode($json, TRUE);

//var_dump($data);

$url = "http://iahmdb-front.local/oauth_callback.html?"
."access_token="	. $data["access_token"]
."&refresh_token="	. $data["refresh_token"]
."&expires_in="		. $data["expires_in"]
."&token_type="		. $data["token_type"]
."&scope="			. $data["scope"];

header( "Location: $url" );