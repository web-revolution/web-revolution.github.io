var map;
    var pos = {
    	lat: 50.543792, 
    	lng: 137.010494
    }
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 17
      });
      // map = new google.maps.Map(document.getElementById('map'), opt);

      var marker = new google.maps.Marker({
      	position: pos,
      	map: map,
      	title: "Экострой"
      });

      var info = new google.maps.InfoWindow({
      	content: ""
      });

    }