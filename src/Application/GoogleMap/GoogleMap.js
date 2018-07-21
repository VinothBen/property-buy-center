import React, { Component } from "react";

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
    }

    componentWillMount() {
        // Start Google Maps API loading since we know we'll soon need it
        this.getGoogleMaps();
    }

    componentDidMount() {
        // Once the Google Maps API has finished loading, initialize the map
        this.getGoogleMaps().then((google) => {
            let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            const location = { lat: 12.919933, lng: 80.18205 };
            let myLatLng = new google.maps.LatLng(location);
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: myLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                rotateControl: false,
                mapTypeControl: false,
                streetViewControl: true,
                fullscreenControl: true,
                scaleControl: false,
                zoomControl: true,
                navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
            });
            let request = {
                location: myLatLng,
                radius: '300',
                query: 'atm'
            };
            let infowindow = new google.maps.InfoWindow();
            let service = new google.maps.places.PlacesService(map);
            let directionsService = new google.maps.DirectionsService;
            let directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            service.textSearch(request, callback);
            service.getDetails({
                placeId: 'ChIJVW4dU59eUjoRS9rPAcizk60'
            }, function (place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    let marker = new google.maps.Marker({
                        map: map,
                        position: location
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                            'Place ID: ' + place.place_id + '<br>' +
                            place.formatted_address + '</div>');
                        infowindow.open(map, this);
                    });
                }
            });

            function createMarker(position) {
                let request = {
                    reference: position.reference
                };
                // console.log("...position", position, position.name);
                service.getDetails(request, function (place, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        let marker = new google.maps.Marker({
                            position: position.geometry.location,
                            icon: iconBase + 'hospitals_maps.png',
                            map: map
                        });
                        google.maps.event.addListener(marker, 'onmouseover', function () {
                            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                                'ATM Status: Working<br>' +
                                place.formatted_address + '</div>');
                            infowindow.open(map, this);
                        });
                        google.maps.event.addListener(marker, 'click', function () {
                            // infowindow.close()
                            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                                'ATM Status: Working<br>' +
                                place.formatted_address + '</div>');
                            infowindow.open(map, this);
                            calculateAndDisplayRoute(directionsService, directionsDisplay, place.geometry.location);
                        });
                    }
                });
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        createMarker(results[i]);
                    }
                }
            }

            function calculateAndDisplayRoute(directionsService, directionsDisplay, destLocation) {
                directionsService.route({
                    origin: myLatLng,
                    destination: destLocation,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                        directionsDisplay.setOptions({
                            suppressMarkers: true
                        });
                    } else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
            }
            // service.getDetails({
            //     placeId: 'ChIJVW4dU59eUjoRS9rPAcizk60'
            // }, function (place, status) {
            //     if (status === google.maps.places.PlacesServiceStatus.OK) {
            //         var marker = new google.maps.Marker({
            //             map: map,
            //             position: location,
            // label: {
            //     text: "Hai!",
            //     color: 'black',
            //     fontSize: "8px"
            // }
            //         });
            //         // google.maps.event.addListener(marker, 'click', function() {
            //         //   infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            //         //     'Place ID: ' + place.place_id + '<br>' +
            //         //     place.formatted_address + '</div>');
            //         //   infowindow.open(map, this);
            //         // });
            //     }
            // });
        });

    }

    getGoogleMaps() {
        // If we haven't already defined the promise, define it
        if (!this.googleMapsPromise) {
            this.googleMapsPromise = new Promise((resolve) => {
                // Add a global handler for when the API finishes loading
                window.resolveGoogleMapsPromise = () => {
                    // Resolve the promise
                    resolve(google);

                    // Tidy up
                    delete window.resolveGoogleMapsPromise;
                };

                // Load the Google Maps API
                const script = document.createElement("script");
                const API = 'AIzaSyDSc79yhmFSIPQTLsKHHTcTZ5rKjA1jiic';
                script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&libraries=places&callback=resolveGoogleMapsPromise`;
                script.async = true;
                document.body.appendChild(script);
            });
        }

        // Return a promise for the Google Maps API
        return this.googleMapsPromise;
    }

    render() {
            return (<div>
                <h4>Map</h4>
                <div id="map" style={{float: "left", width: 600, height: 400, margin: "0px 50px" }}></div>
                <div style={{ float: "left" }}><ul><li>ATM</li><li>Petrol Bunk</li></ul></div>
            </div>);
    }
}

export default GoogleMap;