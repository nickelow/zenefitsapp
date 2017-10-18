module.exports.trailClick = function (item) {
  this.setState({mapCenter: {lat: item.position.lat, lng: item.position.lng}});
  //We also want the popup box within the marker to activate upon list click, as that is the way that we access the trail page.
  //More information on the marker click function below.
  this.onMarkerClick(item);
}

module.exports.onMarkerClick = function (targetMarker) {
  this.setState({
    markers: this.state.markers.map(marker => {
      if (marker === targetMarker) {
        marker.showInfo = true
      } else {
        marker.showInfo = false
      }
      //There are two returns here because of the if statement. If it is triggered we want to return the marker and a modified showinfo property.
      //If it isn't triggred, we still want out map to return our marker.
      return marker;
    }),
    trailPopup: true
  });
}