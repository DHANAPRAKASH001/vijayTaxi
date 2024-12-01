import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { COMMON_COLORS } from '../../constants/colors';
import { moderateScale } from 'react-native-size-matters';

// const SCREEN_HEIGHT = Dimensions.get('window').height;

const BottomSheet = ({ visible, onClose, children}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.sheet}>
            {/* <View style={styles.header}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.content}>
              {children}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
  },
  container: {
    width: '100%',
    // justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: COMMON_COLORS.WHITE,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    // paddingBottom: 20,
    padding: moderateScale(15)

  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COMMON_COLORS.RED_BRIGHT,
    borderRadius: 25,
  },
  closeText: {
    color: COMMON_COLORS.WHITE,
    fontSize: 16,
  },
  content: {
    // padding: 20,
  },
});
