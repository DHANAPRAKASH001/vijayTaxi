import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import CustomScreenHeader from '../../components/screenHeader';
import { APP_ICONS } from '../../utils/icons';
import { useDispatch } from 'react-redux';
import { closeDrawerMenu, openDrawerMenu } from '../../components/drawerMenu/reducers';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'; // Importing Geolocation module
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [region, setRegion] = useState(null);
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);

  const openSideDrawer = () => {
    dispatch(openDrawerMenu());
  };

  const closeSideDrawer = () => {
    dispatch(closeDrawerMenu());
  };

  const notification = () => {
    // Notification handling code here
  };

  // Function to fetch the user's location
  const getLocation = () => {
    setRegion({
      latitude: 12.579907094339026, 
      longitude : 76.37284134275536,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    getLocation();

    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion((prevRegion) => ({
          ...prevRegion,
          latitude,
          longitude,
        }));
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, distanceFilter: 10 }
    );

    return () => Geolocation.clearWatch(watchId);
  }, []);

  const handlePlaceSelect = (data, details, type) => {
    const { lat, lng } = details.geometry.location;
    const locationData = {
      latitude: lat,
      longitude: lng,
      address: details.formatted_address,
    };

    if (type === 'from') {
      setFromLocation(locationData);
    } else {
      setToLocation(locationData);
    }
  };

  const handleSubmit = () => {
    console.log('From Location:', fromLocation);
    console.log('To Location:', toLocation);
  };

  if (!region) {
    return <Text>Loading map...</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomScreenHeader
        leadingIcon={APP_ICONS.HAMBURGER}
        onLeadingIconPress={openSideDrawer}
        trailingIcon={APP_ICONS.NOTIFICATION_BELL}
        title="LANDING SCREEN"
        titleStyle={styles.headerTitle}
      />

      <Text>LANDING SCREEN _ MAP ON DEVELOPMENT</Text>

      {/* Map View */}
      {locationPermission && (
        <MapView
          style={styles.map}
          region={region}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          {fromLocation && (
            <Marker coordinate={fromLocation} title="From Location" pinColor="blue" />
          )}
          {toLocation && (
            <Marker coordinate={toLocation} title="To Location" pinColor="red" />
          )}
        </MapView>
      )}

      {/* Search Bars for From and To Locations */}
      <View style={styles.searchBarContainer}>
        <GooglePlacesAutocomplete
          placeholder="From Location"
          onPress={(data, details) => handlePlaceSelect(data, details, 'from')}
          query={{
            key: "AIzaSyAMmOqwt1mf0NH76osHrZCaKzuqE6H707g", // Use environment variable here
            language: 'en',
          }}
          currentLocation={true}
          currentLocationLabel="Current location"
          fetchDetails={true}
          styles={styles.searchBarInput}
        />

        <GooglePlacesAutocomplete
          placeholder="To Location"
          onPress={(data, details) => handlePlaceSelect(data, details, 'to')}
          query={{
            key: "AIzaSyAMmOqwt1mf0NH76osHrZCaKzuqE6H707g", // Use environment variable here
            language: 'en',
          }}
          currentLocation={true}
          currentLocationLabel="Current location"
          fetchDetails={true}
          styles={styles.searchBarInput}
        />
      </View>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ensures bottom elements stay at the bottom
  },
  map: {
    flex: 1,
  },
  searchBarContainer: {
    position: 'absolute',
    bottom: 80,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  searchBarInput: {
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    elevation: 3,
  },
});

export default HomeScreen;
