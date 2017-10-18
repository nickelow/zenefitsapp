import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={props.mapCenter}
  >
    {props.isMarkerShown && <Marker position={props.mapCenter} />}
  </GoogleMap>
))

export default Map;