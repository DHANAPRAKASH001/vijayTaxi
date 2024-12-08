import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButton from '../../components/customButton';
import {moderateScale} from 'react-native-size-matters';
import {APP_IMAGES} from '../../utils/images';

const PermissionsScreen = ({navigation}) => {
  const handleButtonPress = () => {
    // Handle button press logic here
    navigation.navigate('HomeScreen')
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Screen Header */}
      <View style={styles.screenHeader}></View>

      {/* Body */}
      <View style={styles.screenBody}>
        <Image source={APP_IMAGES.TAXI_ONE} style={styles.image} />
        <Text style={styles.bodyTextHeader}>Allow Location Access</Text>
        <Text style={styles.bodyText}>
          Enable Location Services in your Device Settings for Better Experience
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.screenFooter}>
        <View style={styles.buttonsContainer}>
          <CustomButton
            buttonText={'Enable Location Service'}
            buttonStyle={styles.actionButton}
            onPress={handleButtonPress}
          />
        </View>
      </View>
    </View>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenHeader: {
    height: 100, // You can adjust the height as per your need
    backgroundColor: 'transparent', // Empty header
  },
  screenBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 150, // Adjust the size as per your image
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20, // Adds space between image and text
  },
  bodyText: {
    fontSize: moderateScale(18),
    color: 'black',
    textAlign: 'center',
    marginBottom: 20, // Adds space between text and button
  },
  screenFooter: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute buttons evenly
    marginBottom: moderateScale(10),
    // paddingHorizontal: moderateScale(10),
  },
  actionButton: {
    flex: 1, // Make buttons take equal width
    // marginHorizontal: moderateScale(5), // Add some spacing between buttons
  },
  bodyTextHeader: {
    fontSize: moderateScale(24),
    color: 'black',
    textAlign: 'center',
    marginBottom: moderateScale(10), // Adds space between text and button
  },
});
