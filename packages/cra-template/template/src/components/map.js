import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const mapStyles = {
  width: '100%',
  height: '100%',
};

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 1.3521,
            lng: 103.8198,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={'This is test name'} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(Demo1);
