import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyARxK3Un6sLi3l3iVG2XD7gJiwqTKFgpXg&callback=myMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 39.75, lng: -86.15 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 39.75, lng:-86.15 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
        <div style = {styles.map}>
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
      </div>
    )
  }
}

const styles = {
    map: {
        marginTop: '60px',
        padding: '50px',
        paddingRadius: '15px',
        backgroundColor: 'blue',
    }
}

export default Map;