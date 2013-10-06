var initialLocation;
var siberia = new google.maps.LatLng(60,105);
var newyork = new google.maps.LatLng(40.8292, -73.9264);
var map;
var lat;
var lon;
var image;

function initialize() 
{

  var mapOptions = 
  {
    //north and east is positive
    center: newyork,
    //smaller numbers = zoom out
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
(function() {
  var flickerAPI = "http://powerful-cliffs-7455.herokuapp.com/?callback=?";
  $.getJSON( flickerAPI, {
    lat: "40.8292",
    lon: "-73.9264"
  })
  .done( function( data) {

    getGeoResults( data )
}
    )

})();
  var getGeoResults = function(data){
    console.log(data);

        for(var i=0;i<data.length;i++){
          lat = data[i].latitude;
          lon = data[i].longitude;

          if(data[i].options_healthy){
            image = "google-maps-pin-green.gif";
          }
          else{
            image = "google-maps-pin-red.gif";
          }

          console.log (new google.maps.LatLng(lat,lon));

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat,lon),
            map:map,
            icon: image,
            title: data[i].name
          });
        }
  }
          var marker1 = new google.maps.Marker({
            position: newyork,
            map:map,
            title: "Current Location"
          });


  //getGeoResults('[{"address":"243 Nostrand Ave","attire":"smart casual","category_ids":[347],"category_labels":[["Social","Food and Dining","Restaurants"]],"country":"us","cuisine":["American","Burgers","Sandwiches"],"factual_id":"ca913dc7-ce2f-410d-8489-e718b18db50f","latitude":40.690021514893,"locality":"Brooklyn","longitude":-73.95140838623,"meal_deliver":false,"name":"Nicks Island Restaurant","neighborhood":["Bedford Stuyvesant","Ord-Stuyvesant","Bedford","Downtown - Heights - Slope"],"payment_cashonly":false,"postcode":"11205","price":2,"region":"NY","status":"1","tel":"(718) 783-3844","wifi":false,"$distance":118.77},{"address":"261 Nostrand Ave","attire":"streetwear","category_ids":[347],"category_labels":[["Social","Food and Dining","Restaurants"]],"country":"us","cuisine":["Chinese","American"],"factual_id":"3d99d26c-eecd-450e-abc9-b4705f42f2e0","hours":"{\"monday\":[[\"11:30\",\"23:00\"]],\"tuesday\":[[\"11:30\",\"23:00\"]],\"wednesday\":[[\"11:30\",\"23:00\"]],\"thursday\":[[\"11:30\",\"23:00\"]],\"friday\":[[\"11:30\",\"1:00\"]],\"saturday\":[[\"11:30\",\"1:00\"]],\"sunday\":[[\"11:30\",\"23:00\"]]}","kids_goodfor":true,"latitude":40.689758,"locality":"Brooklyn","longitude":-73.951429,"meal_deliver":false,"meal_dinner":true,"meal_lunch":true,"meal_takeout":true,"name":"New Fat Cheng","neighborhood":["Bedford Stuyvesant","Ord-Stuyvesant","Bedford","brooklyn","Bedford Stuyvesant - Crown Heights","Bedford - Stuyvesant"],"open_24hrs":false,"parking":true,"parking_free":false,"parking_street":true,"payment_cashonly":true,"postcode":"11216","price":1,"rating":4,"region":"NY","status":"1","tel":"(718) 636-5641","$distance":123.452576},{"address":"294 Nostrand Ave","alcohol":false,"alcohol_bar":false,"alcohol_beer_wine":false,"alcohol_byob":false,"attire":"casual","category_ids":[347],"category_labels":[["Social","Food and Dining","Restaurants"]],"country":"us","cuisine":["Chicken","Pizza","Italian","Sandwiches","Subs"],"factual_id":"b911faa3-870b-4f30-9390-db39568d5663","latitude":40.689783,"locality":"Brooklyn","longitude":-73.951448,"meal_deliver":true,"name":"Kennedy Pizza Chicken","neighborhood":["Downtown - Heights - Slope","Ord-Stuyvesant","Bedford"],"payment_cashonly":false,"postcode":"11216","price":1,"region":"NY","reservations":false,"status":"1","tel":"(718) 484-0124","website":"http:\/\/www.kennedyfriedchicken.com","wifi":false,"$distance":124.44773},{"accessible_wheelchair":false,"address":"301 Clifton Pl","alcohol":false,"alcohol_bar":false,"alcohol_beer_wine":false,"alcohol_byob":false,"attire":"smart casual","category_ids":[342],"category_labels":[["Social","Food and Dining","Cafes, Coffee and Tea Houses"]],"country":"us","cuisine":["Coffee","Tea","Cafe","Sandwiches","Eclectic"],"factual_id":"60a5750a-1f15-4d64-9cc4-a884b03e293c","hours":"{\"monday\":[[\"8:00\",\"20:00\"]],\"tuesday\":[[\"8:00\",\"20:00\"]],\"wednesday\":[[\"8:00\",\"20:00\"]],\"thursday\":[[\"8:00\",\"20:00\"]],\"friday\":[[\"8:00\",\"20:00\"]],\"saturday\":[[\"9:00\",\"20:00\"]],\"sunday\":[[\"9:00\",\"20:00\"]]}","kids_goodfor":true,"latitude":40.689306,"locality":"Brooklyn","longitude":-73.95119,"meal_breakfast":true,"meal_deliver":false,"meal_dinner":true,"meal_lunch":true,"meal_takeout":true,"name":"Tiny Cup","neighborhood":["Ord-Stuyvesant","Bedford","Bedford - Stuyvesant"],"open_24hrs":false,"parking":true,"parking_street":true,"payment_cashonly":true,"postcode":"11216","price":2,"rating":3.5,"region":"NY","reservations":false,"seating_outdoor":false,"status":"1","tel":"(718) 399-9200","wifi":false,"$distance":126.57778},{"address":"573 Lafayette Ave","address_extended":"Ste A","alcohol":false,"alcohol_bar":false,"alcohol_beer_wine":false,"alcohol_byob":false,"attire":"casual","category_ids":[344],"category_labels":[["Social","Food and Dining","Ice Cream Parlors"]],"country":"us","cuisine":["Donuts","Ice Cream","Coffee","Frozen Yogurt","Bakery"],"email":"support@baskinrobbins.com","factual_id":"118acf88-3bf2-4385-a27c-52d56bab9af1","hours":"{\"monday\":[[\"5:00\",\"11:00\"],[\"14:00\",\"15:00\"],[\"17:00\",\"20:00\"]],\"tuesday\":[[\"5:00\",\"11:00\"],[\"13:00\",\"14:00\"],[\"17:00\",\"18:00\"]],\"wednesday\":[[\"5:00\",\"11:00\"],[\"13:00\",\"15:00\"],[\"19:00\",\"20:00\"]],\"thursday\":[[\"5:00\",\"11:00\"],[\"15:00\",\"16:00\"],[\"19:00\",\"20:00\"]],\"friday\":[[\"6:00\",\"13:00\"],[\"17:00\",\"18:00\"]],\"sunday\":[[\"8:00\",\"20:00\"]]}","latitude":40.690033,"locality":"Brooklyn","longitude":-73.951506,"meal_breakfast":true,"meal_deliver":false,"name":"Baskin-Robbins","neighborhood":["Bedford Stuyvesant","Ord-Stuyvesant","Bedford","Downtown - Heights - Slope","Bedford - Stuyvesant"],"open_24hrs":false,"postcode":"11205","price":1,"rating":4,"region":"NY","reservations":false,"status":"1","tel":"(718) 230-4145","website":"http:\/\/baskinrobbins.com","wifi":false,"$distance":127.029045},{"address":"652 Lafayette Ave","attire":"smart casual","category_ids":[347],"category_labels":[["Social","Food and Dining",...tuesday\":[[\"7:00\",\"21:00\"]],\"wednesday\":[[\"7:00\",\"21:00\"]],\"thursday\":[[\"7:00\",\"21:00\"]],\"friday\":[[\"7:00\",\"21:00\"]],\"saturday\":[[\"8:00\",\"21:00\"]],\"sunday\":[[\"8:00\",\"20:00\"]]}","latitude":40.687095,"locality":"Brooklyn","longitude":-73.950942,"meal_breakfast":true,"meal_dinner":true,"meal_lunch":true,"meal_takeout":true,"name":"Cinnamon Girl","neighborhood":["Ord-Stuyvesant","Bedford","Bedford Stuyvesant"],"open_24hrs":false,"options_healthy":true,"options_vegan":true,"options_vegetarian":true,"parking":true,"parking_free":true,"parking_street":true,"payment_cashonly":true,"postcode":"11216","price":2,"rating":2.5,"region":"NY","seating_outdoor":false,"status":"1","tel":"(718) 230-8800","$distance":332.64297},{"accessible_wheelchair":false,"address":"477 Gates Ave","alcohol":false,"alcohol_bar":false,"alcohol_beer_wine":false,"alcohol_byob":false,"attire":"casual","category_ids":[355],"category_labels":[["Social","Food and Dining","Restaurants","Fast Food"]],"country":"us","cuisine":["Cafe","Fast Food","American","Chinese","Chicken"],"factual_id":"19da6f68-eaf8-40a3-aa8a-ba1f4f1c1123","hours":"{\"monday\":[[\"11:30\",\"23:30\"]],\"tuesday\":[[\"11:30\",\"23:30\"]],\"wednesday\":[[\"11:30\",\"23:30\"]],\"thursday\":[[\"11:30\",\"23:30\"]],\"friday\":[[\"11:30\",\"24:00\"]],\"saturday\":[[\"11:30\",\"24:00\"]]}","kids_goodfor":true,"latitude":40.686323,"locality":"Brooklyn","longitude":-73.949636,"meal_breakfast":true,"meal_deliver":true,"meal_dinner":true,"meal_lunch":true,"meal_takeout":true,"name":"Arbys","neighborhood":["Bedford - Stuyvesant","Bedford Stuyvesant - Crown Heights","Ord-Stuyvesant","Bedford"],"open_24hrs":false,"parking":true,"parking_free":true,"parking_street":true,"payment_cashonly":true,"postcode":"11216","price":1,"region":"NY","reservations":false,"status":"1","tel":"(718) 399-0088","website":"http:\/\/www.arbys.com","wifi":false,"$distance":410.01456},{"address":"1660 Saint Johns Pl","category_ids":[353],"category_labels":[["Social","Food and Dining","Restaurants","Delis"]],"country":"us","cuisine":["Deli"],"factual_id":"5dd5f6df-bb18-4aa2-b982-237d6b871a08","latitude":40.691694,"locality":"Brooklyn","longitude":-73.945543,"name":"Amigo Grocery","neighborhood":["Weeksville"],"postcode":"11233","region":"NY","status":"1","tel":"(800) 490-9754","$distance":420.3475},{"accessible_wheelchair":true,"address":"765 Dekalb Ave","alcohol":false,"alcohol_bar":false,"alcohol_beer_wine":false,"alcohol_byob":false,"attire":"casual","category_ids":[363],"category_labels":[["Social","Food and Dining","Restaurants","Pizza"]],"country":"us","cuisine":["Pizza","Italian","Sandwiches","Subs","American"],"factual_id":"00205d7d-fa87-4eb5-9f93-38bd32f9f5ae","hours":"{\"monday\":[[\"11:00\",\"23:00\"]],\"tuesday\":[[\"11:00\",\"23:00\"]],\"wednesday\":[[\"11:00\",\"23:00\"]],\"thursday\":[[\"11:00\",\"23:00\"]],\"friday\":[[\"11:00\",\"23:00\"]],\"saturday\":[[\"11:00\",\"23:00\"]],\"sunday\":[[\"11:00\",\"23:00\"]]}","kids_goodfor":true,"latitude":40.692029,"locality":"Brooklyn","longitude":-73.945677,"meal_cater":true,"meal_deliver":true,"meal_dinner":true,"meal_lunch":true,"meal_takeout":true,"name":"Roccos Pizza","neighborhood":["Bedford Stuyvesant","Bedford - Stuyvesant","Bedford Stuyvesant - Crown Heights","brooklyn","Ord-Stuyvesant","Bedford"],"open_24hrs":false,"options_healthy":true,"options_vegetarian":true,"parking":true,"parking_free":true,"parking_garage":false,"parking_lot":false,"parking_street":true,"parking_valet":false,"parking_validated":false,"payment_cashonly":false,"postcode":"11216","price":1,"rating":5,"region":"NY","reservations":false,"seating_outdoor":false,"status":"1","tel":"(718) 218-9200","website":"http:\/\/roccopizza.com","wifi":false,"$distance":428.65936},{"accessible_wheelchair":false,"address":"1011 Bedford Ave","attire":"smart casual","category_ids":[352],"category_labels":[["Social","Food and Dining","Restaurants","Chinese"]],"country":"us","cuisine":["Chinese","Japanese","Asian","Seafood","Halal"],"factual_id":"6aa69828-56fd-4da2-87fe-b46bc6cc0ba6","founded":"2000","hours":"{\"monday\":[[\"11:00\",\"23:00\"]],\"tuesday\":[[\"11:00\",\"23:00\"]],\"wednesday\":[[\"11:00\",\"23:00\"]],\"thursday\":[[\"11:00\",\"23:00\"]],\"friday\":[[\"11:00\",\"23:00\"]],\"saturday\":[[\"11:00\",\"23:00\"]],\"sunday\":[[\"12:00\",\"23:00\"]]}","latitude":40.689344,"locality":"Brooklyn","longitude":-73.955091,"meal_deliver":false,"meal_dinner":true,"meal_lunch":true,"meal_takeout":true,"name":"No 1 Chinese Restaurant","neighborhood":["Bedford Stuyvesant","brooklyn","Bedford","Clinton Hill","Downtown - Heights - Slope","Bedford - Stuyvesant"],"open_24hrs":false,"options_organic":false,"parking":true,"parking_free":true,"parking_street":true,"payment_cashonly":false,"postcode":"11205","price":1,"rating":2.5,"region":"NY","reservations":true,"seating_outdoor":false,"smoking":false,"status":"1","tel":"(718) 622-1685","wifi":false,"$distance":435.39578}]');
}
  
google.maps.event.addDomListener(window, 'load', initialize);