const ACCESS_TOKEN = 'pk.eyJ1IjoicmVuamktcml2ZXJzdG9uZSIsImEiOiJjbDllanNxMmYwOHdzM3dvMGp5bDlqZzFwIn0.H0P5XACbj0X4K7ajqzWvng'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(centerPosition) {
    const map = new mapboxgl.Map({
        accessToken: ACCESS_TOKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosition,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directionControls = new MapboxDirections({
        accessToken: ACCESS_TOKEN
    })
    map.addControl(directionControls, 'top-left')
}