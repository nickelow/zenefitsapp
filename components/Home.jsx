import React from 'react';
import reactDOM from 'react-dom';
import Map from './Map.jsx';
import gps from '../helpers/gps.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      mapCenter: {
        lat: 34.7836966,
        lng: -115.4089664
      },
      markers: []
    }
  }

  componentDidMount() {
    //Not sure what the lines below do.
    //Note, right now the geolocation is just HTML5.
    gps.getLocation()
    .then(value => {
    	console.log(value)
      //First, we are going to get the location, then set it inside of an object.
      let newObj = {
        lat: value.coords.latitude,
        lng: value.coords.longitude
      }
      //We then set that object as the mapCenter, which dictates where the Google Map locates at.
      this.setState({mapCenter: newObj})
    })
  }

  render() {
  	return (
      <div>Hello World <Map 
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAVJyF5dBHtoJ7kEauR-Xg5rKEa1NHGk1Q"
      mapCenter = {this.state.mapCenter}
      markers = {this.state.markers}
      isMarkerShown /></div>
  	)
  }
};

export default Home;