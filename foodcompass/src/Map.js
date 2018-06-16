import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import google from 'react-google-maps';

const pantries = [
  {lat: 39.776881, lng: -86.153515, name: "Central Christian Church"},
  {lat: 39.773226, lng: -86.130324, name: "Westminister Neighborhood Services"},
  {lat: 39.764940, lng: -86.206814, name: "VIDA NUEVA UNITED METHODIST CHURCH - CENTRO FAMILIAR"},
  {lat: 39.786231, lng: -86.158200, name: "CATHOLIC CHARITIES INDIANAPOLIS"},
  {lat: 39.787646, lng: -86.135217, name: "NEW BETHEL MISSIONARY BAPTIST CHURCH"},
  {lat: 39.877617, lng: -86.186714, name: "CHRIST CHURCH APOSTOLIC"},
  {lat: 39.802213, lng: -86.173794, name: "PROMISE LAND CHRISTIAN COMMUNITY CHURCH"},
  {lat: 39.775030, lng: -86.093134, name: "LINWOOD CHRISTIAN CHURCH"},
  {lat: 39.641231, lng: -86.132179, name: "CHRIST UNITED METHODIST CHURCH"},
  {lat: 39.703495, lng: -86.007272, name: "GOD'S BOUNTY FOOD PANTRY"}];   

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyARxK3Un6sLi3l3iVG2XD7gJiwqTKFgpXg&callback=myMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `450px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap id = "map"
    defaultZoom={8}
    defaultCenter={{ lat: 39.75, lng: -86.15 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 39.75, lng:-86.15 }} onClick={props.onMarkerClick} />}
    {pantries.map(p => <Marker position = {{lat: p.lat, lng: p.lng}} onClick = {props.onMarkerClick}/>)}
  </GoogleMap>
)

class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker();
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

  geoRun = () => {
    const geocoder = new google.maps.Geocoder();
    this.geocodeAddress(geocoder, document.querySelector('#map'));
  }

  geocodeAddress = (geocoder, resultsMap) => {
    // var address = document.getElementById('address').value;
     let addresses = [
  '1400 North Meridian Street', '2801 West Washington Street', '445 North State Avenue', '701 North Delaware Street', '2020 North Girls School Road', '1535 Dr. Andrew J. Brown Avenue', '6601 North Grandview Drive', '802 Edgemont Avenue', '4424 East Michigan Street', '8540 US Highway 31 South', '8946 Southeastern Avenue', '1733 East 46th Street', '1525 North Ritter Avenue', '4400 North High School Road', '1337 South Shelby Street', '3312 East English Avenue', '5062 Pike Plaza Road', '2830 South Holt Road', '5943 Lafayette Road', '47 Beachway Drive', '1901 North Harding Street', '111 South Downey Avenue', '2700 North College Avenue', '963 North Girls School Road', '964 North Pennsylvania Street', '4501 North Post Road', '2990 West 71st Street', '431 South Shortridge Road', '4062 East 34th Street', '6185 Guilford Avenue', '1920 West Morris Street', '5625 West 30th Street', '4501 West 38th Street', '2900 East 62nd Street', '3909 North Meridian Street, Suite 100', '2605 East 25th Street', '5602 Elmwood Avenue, Suite 212', '1634 East Minnesota Street', '952 North Pennsylvania Street', '1224 Laurel Street', '1347 North Meridian Street', '40 West 40th Street, Suite 223', '6701 Oaklandon Road', '1215 Tecumseh Street', '9101 West 10th Street', '3333 North Meridian Street', '1637 East Prospect Street', '2416 East 55th Place', '3025 West 69th Street', '6940 North Michigan Road', '7700 North Meridian Street', '930 Prospect Street', '8600 Meadowlark Drive', '3445 West 71st Street', '5750 East 30th Street', '7101 Pendleton Pike', '4007 North Sherman Drive', '3737 Waldemere Avenue', '3021 East 71st Street', '4040 East Thompson Road', '1610 East 19th Street', '24 South Lynhurst Drive', '8610 West 10th Street', '2624 East 25th Street', '1801 East 49th Street', '1003 West 16th Street', '530 South Taft Avenue', '9401 East 25th Street', '4088 Millersville Road', '900 West 30th Street', '5330 East 38th Street', '4501 Fletcher Avenue', '2325 Hovey Street', '2056 East 32nd Street', '3709 North Shadeland Avenue', '3132 Carson Avenue', '9039 West Washington Street', '2846 Cold Spring Road', '10302 East 38th Street', '70 North Mount Street', '1416 East Epler Avenue', '4550 Central Avenue', '8032 East 21st Street', '5840 East 16th Street', '1754 West Morris Street', '116 South Muessing Street', '3740 South Dearborn Street', '1061 East Southern Avenue', '4107 East Washington Street', '3801 Forest Manor Avenue', '29 North Grant Avenue', '1701 Dr. Andrew J. Brown Avenue', '3326 West 10th Street', '2809 East 56th Street', '9610 East 42nd Street', '3001 East 30th Street', '8600 North College Avenue', '303 North Elder Avenue', '2253 Dr. Andrew J. Brown Avenue', '2601 East Thompson Road', '5901 Lafayette Road', 
]
    addresses= addresses.map(p => p+' Indiana')
    console.log(addresses)
    for(let i = 0; i < addresses.length; i++){
    geocoder.geocode({'address': addresses[i]}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
          
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}
  }

}
const addresses = [
     '1400 North Meridian Street', '2801 West Washington Street', '445 North State Avenue', '701 North Delaware Street', '2020 North Girls School Road', '1535 Dr. Andrew J. Brown Avenue', '6601 North Grandview Drive', '802 Edgemont Avenue', '4424 East Michigan Street', '8540 US Highway 31 South', '8946 Southeastern Avenue', '1733 East 46th Street', '1525 North Ritter Avenue', '4400 North High School Road', '1337 South Shelby Street', '3312 East English Avenue', '5062 Pike Plaza Road', '2830 South Holt Road', '5943 Lafayette Road', '47 Beachway Drive', '1901 North Harding Street', '111 South Downey Avenue', '2700 North College Avenue', '963 North Girls School Road', '964 North Pennsylvania Street', '4501 North Post Road', '2990 West 71st Street', '431 South Shortridge Road', '4062 East 34th Street', '6185 Guilford Avenue', '1920 West Morris Street', '5625 West 30th Street', '4501 West 38th Street', '2900 East 62nd Street', '3909 North Meridian Street, Suite 100', '2605 East 25th Street', '5602 Elmwood Avenue, Suite 212', '1634 East Minnesota Street', '952 North Pennsylvania Street', '1224 Laurel Street', '1347 North Meridian Street', '40 West 40th Street, Suite 223', '6701 Oaklandon Road', '1215 Tecumseh Street', '9101 West 10th Street', '3333 North Meridian Street', '1637 East Prospect Street', '2416 East 55th Place', '3025 West 69th Street', '6940 North Michigan Road', '7700 North Meridian Street', '930 Prospect Street', '8600 Meadowlark Drive', '3445 West 71st Street', '5750 East 30th Street', '7101 Pendleton Pike', '4007 North Sherman Drive', '3737 Waldemere Avenue', '3021 East 71st Street', '4040 East Thompson Road', '1610 East 19th Street', '24 South Lynhurst Drive', '8610 West 10th Street', '2624 East 25th Street', '1801 East 49th Street', '1003 West 16th Street', '530 South Taft Avenue', '9401 East 25th Street', '4088 Millersville Road', '900 West 30th Street', '5330 East 38th Street', '4501 Fletcher Avenue', '2325 Hovey Street', '2056 East 32nd Street', '3709 North Shadeland Avenue', '3132 Carson Avenue', '9039 West Washington Street', '2846 Cold Spring Road', '10302 East 38th Street', '70 North Mount Street', '1416 East Epler Avenue', '4550 Central Avenue', '8032 East 21st Street', '5840 East 16th Street', '1754 West Morris Street', '116 South Muessing Street', '3740 South Dearborn Street', '1061 East Southern Avenue', '4107 East Washington Street', '3801 Forest Manor Avenue', '29 North Grant Avenue', '1701 Dr. Andrew J. Brown Avenue', '3326 West 10th Street', '2809 East 56th Street', '9610 East 42nd Street', '3001 East 30th Street', '8600 North College Avenue', '303 North Elder Avenue', '2253 Dr. Andrew J. Brown Avenue', '2601 East Thompson Road', '5901 Lafayette Road', 
]

const styles = {
    map: {
        zIndex: 0,
        marginTop: '10px',
        padding: '48.2px',
        paddingRadius: '15px',
        backgroundColor: 'black',
        borderRadius: '50px',
        boxShadow: "25px 5px 50px rgba(0,0,0,.4)",

    },
}

export default Map;