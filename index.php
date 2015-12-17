<?php

$street = $city = $state = $temp_unit = "";

date_default_timezone_set('America/Los_Angeles');
//$server_tz = date_default_timezone_get();

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['street_name']) && isset($_GET['city_name']) && isset($_GET['state_name']) &&    isset($_GET['temperature_unit'])) {
    
   $street = test_input($_GET["street_name"]);
   $city = test_input($_GET["city_name"]);
   $state = test_input($_GET["state_name"]);
   $temp_unit = test_input($_GET["temperature_unit"]);

   $query_url = "https://maps.google.com/maps/api/geocode/xml?address=".$street.",+".$city.",+".$state."&key=AIzaSyB-sllfYn7kUEUbiN5FPme5Xm6B0KOxZBw"; 
   $query_url = preg_replace('/\s+/', '+', $query_url);
   
   //echo $query_url;

   //$xml= simplexml_load_file("geocode_response.xml") or die("Error: Cannot create object");

   $response = @file_get_contents($query_url);

   if($response){
       //echo "<br>response ok";
       $xml=simplexml_load_string($response) or die("Error: Google geocode response is invalid");

       $status = isset($xml->status)?$xml->status:null;

       if (!$xml || $status != 'OK') {
           //echo '<script type="text/javascript">error_geocode();</script>';  
       } else {                  
           //echo "<br>result ok";

           $result_check = isset($xml->result)? $xml->result : null; 
           $latitude = isset($xml->result->geometry->location->lat)?$xml->result->geometry->location->lat:null;
           $longitude =  isset($xml->result->geometry->location->lng)?$xml->result->geometry->location->lng:null;
           //echo "<br>latitude->",$latitude;
           //echo "<br>longitude->",$longitude;

           if($latitude && $longitude) {
               //echo "<br>latitude->",$latitude+" longitude->",$longitude;    
               // forecast api key-> 99b77bdcc1b3da0720616d766586ddcb

               if($temp_unit == "fahrenheit")
                  $units = "us";
               else 
                  $units = "si";				   

               $forecast_key = "99b77bdcc1b3da0720616d766586ddcb";
               $forecast_query_url = "https://api.forecast.io/forecast/".$forecast_key."/".$latitude.",".$longitude."?"."units=".$units."&exclude=flags";

               $forecast_response = @file_get_contents($forecast_query_url);
               //echo $forecast_response;

               if($forecast_response && $forecast_response != FALSE){

                   echo json_encode($forecast_response);

               } else {					   	    
                    //echo '<script type="text/javascript">error_forecast();</script>'; 
               }
           } else {
               //echo '<script type="text/javascript">error_geocode();</script>'; 
           }				   
        }
    } else {
        //$error = error_get_last();
        //echo '<script type="text/javascript">error_filegetcontent();</script>'; 
    }			   
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

?>