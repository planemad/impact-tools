var config = {
    mapboxAccessToken: "pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiY2s5d3ppeTBtMGV4YTNlcDJxMG85cDd1cSJ9.Ive7Qs3rTp7os9mXJ3jmCA",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1LeTVNOlv2TRkwOfHLU4Wmao0YEMLL-odBq9Buwe2UZM/edit?usp=sharing",
    sheetData: {
        latitudeField: "Latitude" ,
        longitudeField: "Longitude",
        titleField: "Name ofVillage's No.of WaterBodies/pond's",
        descriptionField: "Siteposition/Directions/Opinions",
        markerColorField: "color"
    },
    map: {
        style: "mapbox://styles/mapbox/satellite-streets-v11", // Customize your map style https://docs.mapbox.com/api/maps/#styles
        center: [77.29808,28.5920], // Choose the starting point
        zoom: 9
    }
}
