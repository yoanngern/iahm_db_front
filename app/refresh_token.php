<?php

$client_id = "19_64bxhmfwc8g8c4s0w8w04g4s004o00o44wswg8csw8cgc4cksk";
$client_secret = "5ng8wly82nc4o8kcocokskcw4www80ksw0ckcsgo44s0ko8oko";
$refresh_token = $_GET['refresh_token'];


$url = "http://iahmdb.local/app_dev.php/oauth/v2/token?client_id=" . $client_id
                . "&client_secret=" . $client_secret
                . "&grant_type=" . "refresh_token"
                . "&refresh_token=" . $refresh_token;

//var_dump($url);

$json = file_get_contents($url);
$data = json_decode($json, TRUE);

echo $json;
