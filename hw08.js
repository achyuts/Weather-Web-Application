$(window).load(function(){   
    
});

$(document).ready(function(){
    
    $('#weather_result').hide();
    
    if($(window).width() > 768){
        sizeMap = screen.width/2; 
        //alert('ready '+sizeMap);
    } else {
        //alert('ready2 '+sizeMap);
        sizeMap = screen.width - 50;
    }  
    
    $('#map').attr('width',sizeMap);
    
    if ($(window).width() < 768)	
        $('#modal-img-1').removeClass('img-responsive'); 
    
    
    $("#next-7-days-1-row").click(function(){
        fill_modal_weather(0);
        $("#modal-1").modal();
    });
    
    $("#next-7-days-2-row").click(function(){
        fill_modal_weather(1);
        $("#modal-1").modal();
    });
    
    $("#next-7-days-3-row").click(function(){
        fill_modal_weather(2);
        $("#modal-1").modal();
    });
    
    $("#next-7-days-4-row").click(function(){
        fill_modal_weather(3);
        $("#modal-1").modal();
    });
    
    $("#next-7-days-5-row").click(function(){
        fill_modal_weather(4);
        $("#modal-1").modal();
    });
    
    $("#next-7-days-6-row").click(function(){
        fill_modal_weather(5);
        $("#modal-1").modal();
    });
    
    $("#next-7-days-7-row").click(function(){
        fill_modal_weather(6);
        $("#modal-1").modal();
    });
    
});


function destroy_map(){
   document.getElementById('map').innerHTML = null;
}


function init(longitude1, latitude1) {
            
    var lonlat = new OpenLayers.LonLat(longitude1, latitude1);
    var fromProjection = new OpenLayers.Projection("EPSG:4326"); // transform from WGS 1984
    var toProjection = new OpenLayers.Projection("EPSG:900913");
    var position = lonlat.transform( fromProjection, toProjection);

    
    destroy_map();
    
    map = new OpenLayers.Map("map");

    var mapnik = new OpenLayers.Layer.OSM();

    var layer_cloud = new OpenLayers.Layer.XYZ(
        "clouds",
        "http://${s}.tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png",
        {
            isBaseLayer: false,
            opacity: 0.7,
            sphericalMercator: true
        }
    );

    var layer_precipitation = new OpenLayers.Layer.XYZ(
        "precipitation",
        "http://${s}.tile.openweathermap.org/map/precipitation/${z}/${x}/${y}.png",
        {
            isBaseLayer: false,
            opacity: 0.7,
            sphericalMercator: true
        }
    );


    map.addLayers([mapnik, layer_precipitation, layer_cloud]);

    map.setCenter(position, 8);
}


$(window).resize(function() {    
    

    if(screen.width>768){
        //alert('resize '+sizeMap);
        sizeMap = 600/1340*screen.width;    
    } else {
        //alert('resize 2 '+sizeMap);
        sizeMap = screen.width - 50;
    }
    
    $('#map').attr('width',sizeMap);
    //alert(sizeMap);
    
    if ($(window).width() < 768) {	
        
        $('#modal-img-1').removeClass('img-responsive');        
        
        for(var i=1; i<=24; i++) {        
            $('#next-24-hours-item-1-row-'+i).removeClass('next-24-list-item-alignment-1');
            $('#next-24-hours-item-1-row-'+i).addClass('next-24-list-item-alignment-2');
            
            $('#next-24-hours-item-2-row-'+i).removeClass('next-24-list-item-alignment-1');
            $('#next-24-hours-item-2-row-'+i).addClass('next-24-list-item-alignment-2');
            
            $('#next-24-hours-item-3-row-'+i).removeClass('next-24-list-item-alignment-1');
            $('#next-24-hours-item-3-row-'+i).addClass('next-24-list-item-alignment-2');
            
            $('#next-24-hours-item-4-row-'+i).removeClass('next-24-list-item-alignment-1');
            $('#next-24-hours-item-4-row-'+i).addClass('next-24-list-item-alignment-2');
        }        
    }
    
    else if ($(window).width() < 992) {	
        
        $('#modal-img-1').addClass('img-responsive'); 
        
        for(var i=1; i<=24; i++) {        
            $('#next-24-hours-item-1-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-1-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-2-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-2-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-3-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-3-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-4-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-4-row-'+i).addClass('next-24-list-item-alignment-1');
        }  
        
    }

    else if ($(window).width() < 1200) {	
                
        $('#modal-img-1').addClass('img-responsive'); 
        
        for(var i=1; i<=24; i++) {        
            $('#next-24-hours-item-1-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-1-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-2-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-2-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-3-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-3-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-4-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-4-row-'+i).addClass('next-24-list-item-alignment-1');
        }
        
    }

    else if ($(window).width() >= 1200) {	
        
        $('#modal-img-1').addClass('img-responsive'); 
        
        for(var i=1; i<=24; i++) {        
            $('#next-24-hours-item-1-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-1-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-2-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-2-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-3-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-3-row-'+i).addClass('next-24-list-item-alignment-1');
            
            $('#next-24-hours-item-4-row-'+i).removeClass('next-24-list-item-alignment-2');
            $('#next-24-hours-item-4-row-'+i).addClass('next-24-list-item-alignment-1');
        }
        
    }
});

stateDefaultText = "Select your state...";

statesOptions =["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia","Florida", "Georgia",
"Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
"Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", 
"North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
"Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

stateAbbrv = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN",
"MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];


function generateSelect(){
   			    
    var select_node = document.getElementById("state_name");		    

    for(var i=0; i<statesOptions.length; i++) {

        var optionElement = document.createElement("option");
        optionElement.innerHTML = statesOptions[i];
        optionElement.value = stateAbbrv[i];
        optionElement.id= stateAbbrv[i];

        select_node.appendChild(optionElement);				 	
    }

}	

function validate_form_input(form){
    input_street = form.street_name.value;
    
    
    var no_err = true;
    
    if(input_street == ""){        
        $('#error_street').show();
        document.getElementById('error_street').innerHTML="Please enter the street address";        
        no_err = false;
    } else {
       $('#error_street').hide();
    }
    
    input_city = form.city_name.value;
    if(input_city == ""){
        //alert('city is empty');
        $('#error_city').show();
        document.getElementById('error_city').innerHTML='Please enter the city';
        no_err = false;
    } else {
        $('#error_city').hide();
    }    

    input_state = form.state_name.value;
    //alert("validate form state->"+input_state);

    if(input_state == ""|| input_state==0 || input_state == "Select your state..."){        
        //reset_weather_info(); 
        $('#error_state').show();
        document.getElementById('error_state').innerHTML='Please select the state';
        no_err = false;
        
    } else {
       $('#error_state').hide();
    }
    
    if(!no_err)
        return false;

    
    input_temperature_unit = form.temperature_unit.value;
    if(input_temperature_unit == "fahrenheit"){
       temperature_unit = 'us';
    } else {
        temperature_unit = 'si';
    }
    
    
    var data = {
      "street_name": input_street,
      "city_name": input_city,
      "state_name": input_state,
      "temperature_unit": input_temperature_unit
    };
    
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "index.php", //Relative or absolute path to response.php file
      data: data,
      success: function(response) {
        //console.log(response);  
        //alert('response->'+response);
        set_weather(response);  
        fill_right_now_weather();
        init(longitude, latitude);
        //fill_hourly_weather();  
        create_hourly_view();
        fill_next_7_days_weather();   
      }
    });
    
    return false;
}

function convertTimeFromTimestamp(timestamp, offset){
    
    var userOffset = offset*60*60*1000;
    var d = new Date();
    var localOffset = d.getTimezoneOffset()*60*1000;
    var date = new Date(timestamp*1000 + userOffset+ localOffset); 
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;   
    
    console.log(date);
    return strTime;
}

function convertTimeFromTimestampGetDayName(timestamp, offset) {
    
    var userOffset = offset*60*60*1000;
    var d = new Date();
    var localOffset = d.getTimezoneOffset()*60*1000;
    var date = new Date(timestamp*1000 + userOffset+ localOffset); 
    
    var day = date.getDay();
    if(day == 0)
        return 'Sunday';
    else if(day == 1)
        return 'Monday';
    else if(day == 2)
        return 'Tuesday';
    else if(day == 3)
        return 'Wednesday';
    else if(day == 4)
        return 'Thursday';
    else if(day == 5)
        return 'Friday';
    else if(day == 6)
        return 'Saturday';
}

function convertTimeFromTimestampGetMonthDate(timestamp, offset) {
    
    var userOffset = offset*60*60*1000;
    var d = new Date();
    var localOffset = d.getTimezoneOffset()*60*1000;
    var date = new Date(timestamp*1000 + userOffset+ localOffset); 
    
    var month = date.getMonth();
    var day = date.getDate();
    
    if(month == 0)
        monthName = 'Jan';
    else if(month == 1)
        monthName = 'Feb';
    else if(month == 2)
        monthName = 'Mar';
    else if(month == 3)
        monthName = 'Apr';
    else if(month == 4)
        monthName = 'May';
    else if(month == 5)
        monthName = 'Jun';
    else if(month == 6)
        monthName = 'Jul';    
    else if(month == 7)
        monthName = 'Aug';
    else if(month == 8)
        monthName = 'Sep';
    else if(month == 9)
        monthName = 'Oct';
    else if(month == 10)
        monthName = 'Nov';
    else if(month == 11)
        monthName = 'Dec';
    
    return monthName+" "+day;    
}



offsetAssign = false;

summaryAssign = false;
iconAssign = false;
minTempAssign = false;
maxTempAssign = false;
currentTempAssign = false;

precipIntensityAssign = false;
precipProbabilityAssign = false;
windSpeedAssign = false;
dewPointAssign = false;
humidityAssign = false;
visibilityAssign = false;

dailyAssign = false;
dataAssign = false;
sunriseTimeAssign = false;
sunsetTimeAssign = false;



function set_weather(weather_result){
    console.log(weather_result);
    weather_obj = $.parseJSON(weather_result);
    latitude = weather_obj['latitude'];
    longitude = weather_obj['longitude'];
    
   
    weather_current = weather_obj['currently'];

    if (("offset" in weather_obj) && (typeof weather_obj["offset"] != "undefined")){
       offsetAssign = true;
       offset = weather_obj["offset"];
    }
    
    if (("summary" in weather_current) && (typeof weather_current["summary"] != "undefined")){
       summaryAssign = true;
       summary = weather_current["summary"];
    } 
    
    if (("temperature" in weather_current) && (typeof weather_current["temperature"] != "undefined")){
       currentTempAssign = true;
       currentTemp = weather_current["temperature"];
       currentTempVal = set_the_temperature_value(currentTemp);
    }
    
    if (("icon" in weather_current) && (typeof weather_current["icon"] != "undefined")){
       iconAssign = true;
       icon = weather_current["icon"];
       set_the_weather_icon(icon);    
    }
    
    if (("precipIntensity" in weather_current) && (typeof weather_current["precipIntensity"] != "undefined")){
       precipIntensityAssign = true;
       precipIntensity = weather_current["precipIntensity"];
       set_the_precipitationIntensity(precipIntensity);  //precipIntensityVal
    }
    if (("precipProbability" in weather_current) && (typeof weather_current["precipProbability"] != "undefined")){
       precipProbabilityAssign = true;
       precipProbability = weather_current["precipProbability"];
       precipitationProbabilityConversion(); //precipProbabilityVal    
    }
    if (("windSpeed" in weather_current) && (typeof weather_current["windSpeed"] != "undefined")){
       windSpeedAssign = true;
       windSpeed = weather_current["windSpeed"];
       windSpeedConversion(); // windSpeedVal
    }
    if (("dewPoint" in weather_current) && (typeof weather_current["dewPoint"] != "undefined")){
       dewPointAssign = true;
       dewPoint = weather_current["dewPoint"];
       dewPointConversion(); //dewPointVal    
    }
    if (("humidity" in weather_current) && (typeof weather_current["humidity"] != "undefined")){
       humidityAssign = true;
       humidity = weather_current["humidity"];
       humidityConversion(); //humidityVal
    }
    if (("visibility" in weather_current) && (typeof weather_current["visibility"] != "undefined")){
       visibilityAssign = true;
       visibility = weather_current["visibility"];
       visibilityConversion(); //visibilityVal    
    }
    
    if (("daily" in weather_obj) && (typeof weather_obj["daily"] != "undefined")){
       dailyAssign = true;
       weather_daily = weather_obj['daily']; 
       
       if (("data" in weather_daily) && (typeof weather_daily["data"] != "undefined")){
            dataAssign = true;
            data = weather_daily["data"];
            data_today = data[0];    
           
            if (("sunriseTime" in data_today) && (typeof data_today["sunriseTime"] != "undefined")){
              sunriseTimeAssign = true;
              sunriseTime = data_today["sunriseTime"];
            }
           
            if (("sunsetTime" in data_today) && (typeof data_today["sunsetTime"] != "undefined")){
              sunsetTimeAssign = true;
              sunsetTime = data_today["sunsetTime"];
            }
           
            if (("temperatureMin" in data_today) && (typeof data_today["temperatureMin"] != "undefined")){
              minTempAssign = true;
              temperatureMin = data_today["temperatureMin"];
              temperatureMinVal = set_the_temperature_value(temperatureMin);    
            }
           
            if (("temperatureMax" in data_today) && (typeof data_today["temperatureMax"] != "undefined")){
              maxTempAssign = true;
              temperatureMax = data_today["temperatureMax"];
              temperatureMaxVal = set_the_temperature_value(temperatureMax);
            }
       }        
    }
    
    if(sunriseTimeAssign && offsetAssign){
        sunriseTimeLocal = sunriseTime /*+ offset*60*60*/;
        sunriseString = convertTimeFromTimestamp(sunriseTimeLocal, offset);
    }
    
    if(sunsetTimeAssign && offsetAssign){
       sunsetTimeLocal = sunsetTime /*+ offset*60*60*/;
       sunsetString = convertTimeFromTimestamp(sunsetTimeLocal, offset);    
    }
    
    
    weather_hourly = weather_obj["hourly"];
    weather_hourly_data = weather_hourly["data"];
    
    hourly_time = new Array(weather_hourly_data.length);
    hourly_summary = new Array(weather_hourly_data.length);
    hourly_cloudCover= new Array(weather_hourly_data.length);
    hourly_temp= new Array(weather_hourly_data.length);
    hourly_wind= new Array(weather_hourly_data.length);
    hourly_humidity= new Array(weather_hourly_data.length);
    hourly_visibility= new Array(weather_hourly_data.length);
    hourly_pressure= new Array(weather_hourly_data.length);
    
    for(var i=0; i<weather_hourly_data.length; i++){
        var temp = weather_hourly_data[i];
        
        if (("time" in temp) && (typeof temp["time"] != "undefined")){           
            hourly_time[i] = convertTimeFromTimestamp(temp["time"], offset);
        } else {
            hourly_time[i]="N.A.";
        }
        
        if (("icon" in temp) && (typeof temp["icon"] != "undefined")){           
            hourly_summary[i] = temp["icon"];
        } else {
            hourly_summary[i]="N.A.";
        }
        
        if (("cloudCover" in temp) && (typeof temp["cloudCover"] != "undefined")){           
            hourly_cloudCover[i] = Math.round(temp["cloudCover"]*100)+"%";
        } else {
            hourly_cloudCover[i]="N.A.";
        }
        
        if (("temperature" in temp) && (typeof temp["temperature"] != "undefined")){           
            hourly_temp[i] = Math.round(temp["temperature"]).toFixed(2);
        } else {
            hourly_temp[i]="N.A.";
        }
        
        if (("windSpeed" in temp) && (typeof temp["windSpeed"] != "undefined")){           
            hourly_wind[i] = temp["windSpeed"];
            
            if(temperature_unit == 'us')
                hourly_wind[i] += 'mph';
            else
                hourly_wind[i] += 'm/s';            
        } else {
            hourly_wind[i]="N.A.";
        }
        
        if (("humidity" in temp) && (typeof temp["humidity"] != "undefined")){           
            hourly_humidity[i] = Math.round(temp["humidity"])+"%";
        } else {
            hourly_humidity[i]="N.A.";
        }
        
        if (("visibility" in temp) && (typeof temp["visibility"] != "undefined")){           
            
            hourly_visibility[i] = temp["visibility"];
            
            if(temperature_unit == 'us')
                hourly_visibility[i] += 'mi';
            else
                hourly_visibility[i] += 'km'; 
            
        } else {
            hourly_visibility[i]="N.A.";
        }
        
        if (("pressure" in temp) && (typeof temp["pressure"] != "undefined")){           
            if(temperature_unit == 'us')
                hourly_pressure[i] = temp["pressure"]+"mb";
            else
                hourly_pressure[i] = temp["pressure"]+"hPa";
        } else {
            hourly_pressure[i]="N.A.";
        }
    }       
    
    
    daily_day = new Array(7);
    daily_month_date = new Array(7);
    daily_icon_image= new Array(7);
    daily_min_temp = new Array(7);
    daily_max_temp = new Array(7);
    
    daily_header = new Array(7);
    daily_summary = new Array(7);
    daily_sunset = new Array(7);
    daily_sunrise = new Array(7);
    daily_humidity = new Array(7);
    daily_windspeed = new Array(7);
    daily_visibility = new Array(7);
    daily_pressure = new Array(7);
    
    
    if(("daily" in weather_obj) && (typeof weather_obj["daily"] != "undefined")){
        weather_daily_obj = weather_obj["daily"];
        if(("data" in weather_daily_obj) && (weather_daily_obj['data'] != "undefined")){
            daily_data_obj = weather_daily_obj['data'];
            
            for(j= 1; j<daily_data_obj.length; j++){
                
                daily_data_obj_val = daily_data_obj[j];
                
                if (("time" in daily_data_obj_val) && (typeof daily_data_obj_val["time"] != "undefined")){           
                    timeTemp = daily_data_obj_val["time"];
                    daily_day[j-1] = convertTimeFromTimestampGetDayName(timeTemp,offset);
                    daily_month_date[j-1] = convertTimeFromTimestampGetMonthDate(timeTemp, offset);
                } else {
                    daily_day[j-1] = 'N.A.';
                    daily_month_date[j-1] = 'N.A';                
                }
            
                if (("icon" in daily_data_obj_val) && (typeof daily_data_obj_val["icon"] != "undefined")){           
                    daily_icon_image[j-1] = set_the_weather_icon_hourly(daily_data_obj_val["icon"]);
                } else {
                    daily_icon_image[j-1]="N.A.";
                }
                
                if (("temperatureMin" in daily_data_obj_val) && (typeof daily_data_obj_val["temperatureMin"] != "undefined")){
                   temperatureMin = daily_data_obj_val["temperatureMin"];
                   daily_min_temp[j-1] = Math.round(temperatureMin)+'\xB0'; 
                } else {
                   daily_min_temp[j-1] = 'N.A.';
                }

                if (("temperatureMax" in daily_data_obj_val) && (typeof daily_data_obj_val["temperatureMax"] != "undefined")){
                   temperatureMax = daily_data_obj_val["temperatureMax"];
                   daily_max_temp[j-1] = Math.round(temperatureMax)+'\xB0';
                } else {
                   daily_max_temp[j-1] = 'N.A.';                
                }
                
                daily_header[j-1] = "Weather in "+input_city+" on "+daily_month_date[j-1];
                //alert(daily_header[j-1]);
                
                
                 if (("summary" in daily_data_obj_val) && (typeof daily_data_obj_val["summary"] != "undefined")){           
                    daily_summary[j-1] = daily_data_obj_val["summary"];
                    //alert(daily_summary[j-1]); 
                } else {
                    daily_summary[j-1]="N.A.";
                }
                
                if (("sunriseTime" in daily_data_obj_val) && (typeof daily_data_obj_val["sunriseTime"] != "undefined")){
                  dailySunriseTimeAssign = true;
                  sunriseTimeTemp = daily_data_obj_val["sunriseTime"];                    
                }
                
                if(dailySunriseTimeAssign && offsetAssign){
                    sunriseTimeLocalTemp = sunriseTimeTemp /*+ offset*60*60*/;
                    daily_sunrise[j-1] = convertTimeFromTimestamp(sunriseTimeLocalTemp, offset);
                }  else {
                     daily_sunrise[j-1] = 'N.A.';
                }
                
                if (("sunsetTime" in daily_data_obj_val) && (typeof daily_data_obj_val["sunsetTime"] != "undefined")){
                  dailySunsetTimeAssign = true;
                  sunsetTimeTemp = daily_data_obj_val["sunsetTime"];                    
                }
                
                if(dailySunsetTimeAssign && offsetAssign){
                    sunsetTimeTempLocal = sunsetTimeTemp /*+ offset*60*60*/;
                    daily_sunset[j-1] = convertTimeFromTimestamp(sunsetTimeTempLocal, offset);
                } else {
                     daily_sunset[j-1] = 'N.A.';
                }
                
                if (("humidity" in daily_data_obj_val) && (typeof daily_data_obj_val["humidity"] != "undefined")){
                   daily_humidity[j-1] =  Math.round(daily_data_obj_val["humidity"]*100)+'%';
                } else {
                   daily_humidity[j-1] = 'N.A.';
                }
                
                if (("windSpeed" in daily_data_obj_val) && (typeof daily_data_obj_val["windSpeed"] != "undefined")){
                   daily_windspeed[j-1] =  daily_data_obj_val["windSpeed"];
                   if(temperature_unit == 'us'){
                        daily_windspeed[j-1] = Math.round(daily_windspeed[j-1]).toFixed(2) + ' mph';
                    } else {		    	
                        daily_windspeed[j-1] = Math.round(daily_windspeed[j-1]*18/5).toFixed(2) + ' m/s';
                    }                 
                } else {
                   daily_windspeed[j-1] = 'N.A.';
                }
                
                if (("visibility" in daily_data_obj_val) && (typeof daily_data_obj_val["visibility"] != "undefined")){           
                    daily_visibility[j-1] = daily_data_obj_val["visibility"];
                    if(temperature_unit == 'us')
                        daily_visibility[j-1] += 'mi';
                    else
                        daily_visibility[j-1] += 'km';
                } else {
                    daily_visibility[j-1]="N.A.";
                }
                
                if (("pressure" in daily_data_obj_val) && (typeof daily_data_obj_val["pressure"] != "undefined")){           
                    if(temperature_unit == 'us')
                        daily_pressure[j-1] = daily_data_obj_val["pressure"]+"mb";
                    else
                        daily_pressure[j-1] = daily_data_obj_val["pressure"]+"hPa";
                } else {
                    daily_pressure[j-1]="N.A.";
                }

            }       
        }
    }
    
    if(summaryAssign){
       console.log(" summary->"+summary);
       console.log(" icon->"+icon);
       console.log(" precipIntensity->"+precipIntensityVal);
       console.log(" precipProbability->"+precipProbabilityVal);
       console.log(" windSpeed->"+windSpeedVal);
       console.log(" dewPoint->"+dewPointVal);
       console.log(" humidity->"+humidityVal);
       //console.log(" visibility->"+visibilityVal);    
       //console.log(" sunsetString->"+sunsetString);
       //console.log(" sunriseString->"+sunriseString);      
    }
        
}

function create_hourly_view(){
    
    if(temperature_unit == 'us')
        tempText = 'Temp ('+'\xB0'+'F)';
    else
        tempText = 'Temp ('+'\xB0'+'C)';
    
    $('#next-24-hours-heading-temper').text(tempText);
    
    
    for(var j=1; j<=24; j++) {
       $('#next-24-hours-item-1-row-'+j).text(hourly_time[j]);
       $('#next-24-hours-item-2-row-'+j).attr('src', set_the_weather_icon_hourly(hourly_summary[j]));
       $('#next-24-hours-item-3-row-'+j).text(hourly_cloudCover[j]);
       $('#next-24-hours-item-4-row-'+j).text(hourly_temp[j]);
        
       //alert('inside hour wind->'+hourly_wind[j-1]+''+hourly_humidity[j-1]+' '+hourly_visibility[j-1]+' '+hourly_pressure[j-1]);    
       $('#next-24-hours-more-item-1-row-'+j).text(hourly_wind[j]); 
       $('#next-24-hours-more-item-2-row-'+j).text(hourly_humidity[j]); 
       $('#next-24-hours-more-item-3-row-'+j).text(hourly_visibility[j]); 
       $('#next-24-hours-more-item-4-row-'+j).text(hourly_pressure[j]);     
    }
}

function fill_next_7_days_weather(){
    for(var i=0; i<7; i++){
       $('#next-7-days-'+(i+1)+'-1').text(daily_day[i]);
       $('#next-7-days-'+(i+1)+'-2').text(daily_month_date[i]);
       $('#next-7-days-'+(i+1)+'-3-img').attr('src',daily_icon_image[i]);
       $('#next-7-days-'+(i+1)+'-5').text(daily_min_temp[i]);
       $('#next-7-days-'+(i+1)+'-7').text(daily_max_temp[i]);  
    }
}

function fill_modal_weather(i){
      
     //alert(daily_header[i]);
    
     $('#modal-header-1').text(daily_header[i]);
     
     if(daily_icon_image[j-1] != "N.A.")
        $('#modal-img-1').attr('src', daily_icon_image[i]);
    
     $('#modal-data-1-day').text(daily_day[i]+": ");
     $('#modal-data-1-data').text(daily_summary[i]);
     $('#modal-sunrise-12').text(daily_sunrise[i]);
     $('#modal-sunset-12').text(daily_sunset[i]);
     $('#modal-humidity-12').text(daily_humidity[i]);
     $('#modal-windspeed-12').text(daily_windspeed[i]);
     $('#modal-visibility-12').text(daily_visibility[i]);
     $('#modal-pressure-12').text(daily_pressure[i]);     
}



function fill_right_now_weather(){
    $('#weather_result').show();
    $('html').attr('height','auto');
    
    
    if(iconAssign){
       $('#img_today_weather').attr("src", wicon);
    }
    set_today_weather_summary();
    
    if(precipIntensityAssign) 
        $('#weather_today_values1').text(precipIntensityVal);
    if(precipProbabilityAssign) 
        $('#weather_today_values2').text(precipProbabilityVal);
    if(windSpeedAssign) $('#weather_today_values3').text(windSpeedVal);
    if(dewPointAssign) $('#weather_today_values4').text(dewPointVal);
    if(humidityAssign) $('#weather_today_values5').text(humidityVal);
    if(visibilityAssign) $('#weather_today_values6').text(visibilityVal);
    if(sunriseTimeAssign) $('#weather_today_values7').text(sunriseString);
    if(sunsetTimeAssign) $('#weather_today_values8').text(sunsetString);
}

function fill_hourly_weather(){
    
    var nnode = document.getElementById("next-24-hours");
    /*firstChildHourly = true;
    while (nnode.firstChild) {
        if(firstChildHourly)            
            firstChildHourly = false;
        else
            nnode.removeChild(nnode.firstChild);
    }*/
    
    while (nnode.childNodes.length > 2) {
        nnode.removeChild(nnode.lastChild);
    }
    
    if(temperature_unit == 'us')
        tempText = 'Temp('+'\xB0'+'F)';
    else
        tempText = 'Temp('+'\xB0'+'C)';
    
    $('#next-24-hours-heading-temper').text(tempText);
    
    createAppendHourlyRowParent("next-24-hours-data",$('#next-24-hours'));
    
    for(i=0; i<(weather_hourly_data.length<25?weather_hourly_data.length:25); i++) {
        
           console.log('create the daily hourly data'+i);
           parentId = "next-24-hours-data-row"+i;
           createAppendHourlyRow(parentId, $('#next-24-hours-data'));
           parentIdS = "#"+parentId;
           
           createAppendHourlyRowElement(parentId+"hour",hourly_time[i], $(parentIdS));
           //debug1 = $(parentIdS+"hour").text;
           //console.log("debug->"+debug1);
           createAppendHourlyRowElementSummaryImage(set_the_weather_icon_hourly(hourly_summary[i]),"next-24-hours-data-row-summary"+i ,$(parentIdS));
           createAppendHourlyRowElement(parentId+"cloud",hourly_cloudCover[i], $(parentIdS));
           createAppendHourlyRowElement(parentId+"temper",hourly_temp[i], $(parentIdS));
           createAppendHourlyRowElementViewDetails("next-24-hours-data-row-view-details"+i, $(parentIdS),i); 
        
           createMoreRow(i, parentId);
        
           $("#next-24-hours-data-row-view-details"+i).click(function() {
                if($("#collapseme"+i).hasClass("out")) {
                    $("#collapseme"+i).addClass("in");
                    $("#collapseme"+i).removeClass("out");
                } else {
                    $("#collapseme"+i).addClass("out");
                    $("#collapseme"+i).removeClass("in");
                }
           });
        
    }
    
    //debug1 = $('#next-24-hours').html;
    //console.log("debug->"+debug1);
}

function createMoreRow(pos){
    
    parentIdMoreHeading = "next-24-hours-data-row-more-heading"+pos;
    hiddenRowParent = "collapseme"+pos;
    hiddenRowParentId= "#collapseme"+pos;
    createAppendHourlyRowMoreElementParent(hiddenRowParent, $('#next-24-hours'));
    
    createAppendHourlyRowParentMore(parentIdMoreHeading,$(hiddenRowParentId));
    
    parentIdMoreHeadingId = "#" + parentIdMoreHeading;
    parentIdMoreHeadingRow = "next-24-hours-data-row-more"+pos;
    createAppendHourlyRowMore(parentIdMoreHeadingRow, $(parentIdMoreHeadingId));
    
    parentIdMoreHeadingRowId = "#"+parentIdMoreHeadingRow;
    createAppendHourlyRowMoreElementHeading("Wind",$(parentIdMoreHeadingRowId));
    createAppendHourlyRowMoreElementHeading("Humidity",$(parentIdMoreHeadingRowId));
    createAppendHourlyRowMoreElementHeading("Visibility",$(parentIdMoreHeadingRowId));
    createAppendHourlyRowMoreElementHeading("Pressure",$(parentIdMoreHeadingRowId));
    
    // data for the row
    parentIdMoreRowData = "next-24-hours-data-row-more-row-data"+pos;    
    createAppendHourlyRowParentMore(parentIdMoreRowData,$(hiddenRowParentId));
    
    parentIdMoreRowDataId = "#" + parentIdMoreRowData;
    parentIdMoreRowRow = "next-24-hours-data-row-more-row"+pos;
    createAppendHourlyRowMore(parentIdMoreRowRow, $(parentIdMoreRowDataId));
    
    parentIdMoreRowRowId = "#"+parentIdMoreRowRow;
    createAppendHourlyRowMoreElementHeading(hourly_wind[pos],$(parentIdMoreRowRowId));
    createAppendHourlyRowMoreElementHeading(hourly_humidity[pos],$(parentIdMoreRowRowId));
    createAppendHourlyRowMoreElementHeading(hourly_visibility[pos],$(parentIdMoreRowRowId));
    createAppendHourlyRowMoreElementHeading(hourly_pressure[pos],$(parentIdMoreRowRowId));
}


function set_the_temperature_value(temperature) {
    if(temperature_unit == 'us')
        temperatureVal = Math.round(temperature)+'\xB0'+'F';
    else
        temperatureVal = Math.round(temperature)+'\xB0'+'C';
    return temperatureVal;
}

		    
function set_the_precipitationIntensity(precipIntensity){
    if(temperature_unit == 'si'){
        precipIntensity /= 25.4;
    }

    if(precipIntensity < 0.002)
       precipIntensityVal = 'None';
    else if(precipIntensity < 0.017)
       precipIntensityVal = 'Very Light';
    else if(precipIntensity < 0.1)
       precipIntensityVal = 'Light';
    else if(precipIntensity < 0.4)
       precipIntensityVal = 'Moderate';
    else
       precipIntensityVal = 'Heavy';		    	                  
}

function windSpeedConversion(){
    if(temperature_unit == 'us'){
        windSpeedVal = Math.round(windSpeed) + ' mph';
    } else {		    	
        windSpeedVal = Math.round(windSpeed) + ' m/s';
    }
}

function dewPointConversion(){
    if(temperature_unit == 'us') {
        dewPointVal = Math.round(dewPoint) +'\xB0'+'F';
    } else { 
        dewPointVal = Math.round(dewPoint) +'\xB0'+'C';
    }
}

function humidityConversion(){
    humidityVal = Math.round(humidity*100)+'%';	
}

function visibilityConversion(){
    if(temperature_unit == 'us'){
        visibilityVal = Math.round(visibility)+ ' mi';			    	
    } else {
        visibilityVal = Math.round(visibility)+ ' km';
    }

}

function precipitationProbabilityConversion(){
   precipProbabilityVal = Math.round(precipProbability*100)+'%';
}

function clear_location(){
    
    //alert('location clear is called');
    document.getElementById("street_name").value = "";
    document.getElementById("city_name").value = "";
    
    
    //resetSelect();
    //generateSelect();
    document.getElementById("state_name").selectedIndex = 0;
    
    
    document.getElementById("fahrenheit").checked = true;
    
    document.getElementById('error_street').innerHTML="";
    document.getElementById('error_city').innerHTML="";
    document.getElementById('error_state').innerHTML="";
    
    destroy_map();
    $('#weather_result').hide();
    $('html').attr('height','100%');
    return true;
}

function set_the_weather_icon_hourly(icon){
    
    if(iconAssign){
        if(icon == 'clear-day')
            hicon= 'images/clear.png';          
        else if (icon == 'clear-night')
            hicon = 'images/clear_night.png';
        else if (icon == 'rain')
            hicon = 'images/rain.png'; 		
        else if (icon == 'snow')
            hicon = 'images/snow.png';
        else if (icon == 'sleet')
            hicon = 'images/sleet.png';
        else if (icon == 'wind')
            hicon = 'images/wind.png';
        else if (icon == 'fog')
            hicon = 'images/fog.png';
        else if (icon == 'cloudy')
            hicon = 'images/cloudy.png';
        else if (icon == 'partly-cloudy-day')
            hicon = 'images/cloud_day.png';          
        else if (icon == 'partly-cloudy-night')
            hicon = 'images/cloud_night.png';
        return hicon;
    }
}

function set_the_weather_icon(icon){
    
    if(iconAssign){
        if(icon == 'clear-day')
            wicon= 'images/clear.png';          
        else if (icon == 'clear-night')
            wicon = 'images/clear_night.png';
        else if (icon == 'rain')
            wicon = 'images/rain.png'; 		
        else if (icon == 'snow')
            wicon = 'images/snow.png';
        else if (icon == 'sleet')
            wicon = 'images/sleet.png';
        else if (icon == 'wind')
            wicon = 'images/wind.png';
        else if (icon == 'fog')
            wicon = 'images/fog.png';
        else if (icon == 'cloudy')
            wicon = 'images/cloudy.png';
        else if (icon == 'partly-cloudy-day')
            wicon = 'images/cloud_day.png';          
        else if (icon == 'partly-cloudy-night')
            wicon = 'images/cloud_night.png';
    }
}

function set_today_weather_summary(){
    
    if(summaryAssign)
        $('#weather-today-details-1').text(summary+ " in "+ input_city+","+input_state);
    
    if(currentTempAssign){
        $('#weather-today-details-2').text(Math.round(currentTemp));
        
        if(temperature_unit == 'us')
            tempUnit1 = '\xB0'+'F';
        else
            tempUnit1 = '\xB0'+'C';
        
        $('#weather-today-details-21').text(tempUnit1)
    }
    
    if(minTempAssign)
        $('#weather-today-details-31').text("L:"+temperatureMinVal);
    
    if(maxTempAssign)   
        $('#weather-today-details-33').text("H:"+temperatureMaxVal);
    
    if(minTempAssign && maxTempAssign)
         $('#weather-today-details-32').text(" | ");

}