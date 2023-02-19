import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

//Define map component
/*
we're defining a new MapComponent class that extends React.Component, and rendering a Leaflet map in its render method.

Note that the position variable is an array that contains the initial latitude and longitude coordinates of the map center. You can adjust these values to center the map on a different location. You can also adjust the zoom prop to control the initial zoom level of the map.

Finally, we're exporting the MapComponent class using the export default statement, so that it can be imported and used in other parts of your application.
*/
function MapComponent() {
    const position = [37.7749, -122.4194];

    return (
        <Map center={position} zoom={13} style={{ height: '400px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data © OpenStreetMap contributors"
            />
            <Marker position={position} />
            <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
        </Map>
    );
}


//Export react compennt
export default MapComponent;

