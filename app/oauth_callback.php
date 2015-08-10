<?php

$client_id = "19_64bxhmfwc8g8c4s0w8w04g4s004o00o44wswg8csw8cgc4cksk";
$client_secret = "5ng8wly82nc4o8kcocokskcw4www80ksw0ckcsgo44s0ko8oko";
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