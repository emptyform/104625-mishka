var latlng = new google.maps.LatLng(59.936204, 30.321880);

var settings = {
  zoom: 16,
  center: latlng,
  mapTypeId: 'roadmap'
}

var map = new google.maps.Map(document.getElementById("map"),
  settings);

var companyLogoIcon = {
  url: './img/icon-map-pin.svg',
  size: new google.maps.Size(100, 100),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(50, 100),
  scaledSize: new google.maps.Size(100, 100)
};

var companyPos = new google.maps.LatLng(59.936204, 30.321880);

var companyMarker = new google.maps.Marker({
    position: companyPos,
    map: map,
    icon: companyLogoIcon,
    optimized: false
});
