import React, { PropTypes, Component } from 'react'
import { ScrollView, Modal, View, Text, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import common from './../../../../../../../styles'

export default class SearchMap extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
    openModalMap: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    setOpenModalMap: PropTypes.func.isRequired,
    setLatitude: PropTypes.func.isRequired,
    setLongitude: PropTypes.func.isRequired,
    getOriginStations: PropTypes.func.isRequired,
    getDestinationStations: PropTypes.func.isRequired
  }

  async getStations(latitude, longitude){
    let baseURL = `https://api.thameslinkrailway.com/config/stations?latitude=${latitude}&longitude=${longitude}&num_stations=5`

    if(this.props.text == 'origin'){
      await this.props.getOriginStations(baseURL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
    } else {
      await this.props.getDestinationStations(baseURL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
    }
    this.forceUpdate()
  }

  render(){
    return(
      <Modal
       animationType="none"
       transparent={false}
       visible={this.props.openModalMap}
       onRequestClose={() => this.props.setOpenModalMap(!this.props.openModalMap)}
       >
      <View style={[common.container, common.justifyContent, common.padding40, common.paddingLeftRight40]}>
        <ScrollView>
          <GooglePlacesAutocomplete
            placeholder='Search Origin'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed='auto'
            fetchDetails={true}
            renderDescription={row => row.description}
            onPress={(data, details = null) => {
              this.props.setLatitude(details.geometry.location.lat)
              this.props.setLongitude(details.geometry.location.lng)
              this.getStations(details.geometry.location.lat, details.geometry.location.lng)
              this.props.setOpenModalMap(!this.props.openModalMap)
              this.props.navigation.navigate('Map')
            }}
            getDefaultValue={() => ''}
            query={{
              key: 'AIzaSyD3g40E3xMy3PhXoZbIRFz9FEx_w7vcOrA',
              language: 'en',
              types: 'geocode',
              components: 'country:gb'
            }}
            styles={{
              textInputContainer: {
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: 5
              },
              description: {
                fontSize: 16,
                height: 30,
              },
              predefinedPlacesDescription: {
                color: '#e9418b'
              },
              listView: {
                marginTop: 20,
                marginBottom: 20,
              },
              poweredContainer:{
                display: 'none'
              }
            }}
            currentLocation={true}
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch'
            />
          </ScrollView>
        </View>
      </Modal>
    )
  }
}
