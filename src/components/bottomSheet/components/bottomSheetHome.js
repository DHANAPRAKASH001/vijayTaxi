import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COMMON_COLORS } from '../../../constants/colors';

// Import your icon images (make sure to add them to your project folder)
import { APP_ICONS } from '../../../utils/icons';
import { moderateScale } from 'react-native-size-matters';

const BottomSheetHome = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  return (
    <View style={styles.container}>
      {/* LOCATION SECTION */}
      <View style={styles.locationDetailsWrapper}>
        {/* From Location Input */}
        <View style={styles.inputWrapper}>
          <View style={styles.locationInputIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="From Location"
            value={fromLocation}
            onChangeText={text => setFromLocation(text)}
          />
        </View>

        {/* To Location Input */}
        <View style={styles.inputWrapper}>
          <View style={styles.locationInputIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="To Location"
            value={toLocation}
            onChangeText={text => setToLocation(text)}
          />
        </View>
      </View>

      {/* VEHICLE SELECTION SECTION */}
      <View style={styles.vehicleSelectionWrapper}>
        <TouchableOpacity style={styles.vehicleButton}>
          <View style={styles.vehicleButtonIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>

          <Text>MINI</Text>

          <Text>rs150</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.vehicleButton}>
          <View style={styles.vehicleButtonIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>

          <Text>MINI</Text>

          <Text>rs150</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.vehicleButton}>
          <View style={styles.vehicleButtonIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>
          <Text>MINI</Text>

          <Text>rs150</Text>
        </TouchableOpacity>
      </View>

      {/* ACTION BUTTON SECTION */}
      <View style={styles.actionButtonsWrapper}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionButtonIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>

          <View>
            <Text>PAYMENT</Text>

            <Text>CASH</Text>
          </View>
          <View style={styles.actionButtonDropdownIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionButtonIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>

          <View>
            <Text>PAYMENT</Text>

            <Text>CASH</Text>
          </View>
          <View style={styles.actionButtonDropdownIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionButtonIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>

          <View>
            <Text>PERSONAL</Text>

            {/* <Text>CASH</Text> */}
          </View>
          <View style={styles.actionButtonDropdownIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionButtonIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>

          <View>
            <Text>COUPON</Text>

            {/* <Text>CASH</Text> */}
          </View>
          <View style={styles.actionButtonDropdownIconWrapper}>
            <Image source={APP_ICONS.GOD} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheetHome;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
  },
  locationDetailsWrapper: {
    borderRadius: 15,
    borderColor: COMMON_COLORS.BLACK,
    borderWidth: 1,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5), // Space between the two inputs
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(5), // Space between the two inputs
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: COMMON_COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 14,
    color: COMMON_COLORS.BLACK,
  },
  vehicleSelectionWrapper: {
    borderRadius: 15,
    borderColor: COMMON_COLORS.BLACK,
    borderWidth: 1,
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: moderateScale(10),
    flexWrap: 'wrap', // Ensure vehicle buttons wrap to next line if necessary
  },
  vehicleButton: {
    // height: moderateScale(70),
    // width: moderateScale(70),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15)
    // marginBottom: moderateScale(10), // Space between vehicle buttons
  },
  actionButtonsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensure buttons wrap to next row
    justifyContent: 'space-between', // Space between buttons
    // marginTop: moderateScale(10),
  },
  actionButton: {
    width: '48%', // Two buttons per row
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: COMMON_COLORS.BLACK,
    borderWidth: 1,
    marginBottom: moderateScale(10), // Space between rows
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },actionButtonDropdownIconWrapper: {
    height: moderateScale(10),
    width: moderateScale(10),
  },
  actionButtonIconWrapper: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  locationInputIconWrapper: {
    height: moderateScale(25),
    width: moderateScale(25),
    marginRight: moderateScale(5),
  },
  vehicleButtonIconWrapper: {
    height: moderateScale(35),
    width: moderateScale(35),
  },
});
