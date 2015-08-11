<?php

$client_id = "19_64bxhmfwc8g8c4s0w8w04g4s004o00o44wswg8csw8cgc4cksk";
$client_secret = "5ng8wly82nc4o8kcocokskcw4www80ksw0ckcsgo44s0ko8oko";
$refresh_token = $_GET['refresh_token'];


$url = "http://iahmdb.local/app_dev.php/oauth/v2/token?client_id=" . $client_id
                . "&client_secret=" . $client_secret
                . "&grant_type=" . "refresh_token"
                . "&refresh_token=" . $refresh_token;

//var_dump($url);

function parseHeaders( $headers )
{
    $head = array();
    foreach( $headers as $k=>$v )
    {
        $t = explode( ':', $v, 2 );
        if( isset( $t[1] ) )
            $head[ trim($t[0]) ] = trim( $t[1] );
        else
        {
            $head[] = $v;
            if( preg_match( "#HTTP/[0-9\.]+\s+([0-9]+)#",$v, $out ) )
                $head['reponse_code'] = intval($out[1]);
        }
    }
    return $head;
}

$json = file_get_contents($url);

if(parseHeaders($http_response_header)['reponse_code'] == 400) {

	$arr = array();
	$arr['error'] = 400;

	//var_dump($arr);

	$json = json_encode($arr);
}

$data = json_decode($json, TRUE);

//var_dump($json);

header(parseHeaders($http_response_header)[0]);
header('Content-Type: application/json');
echo $json;
