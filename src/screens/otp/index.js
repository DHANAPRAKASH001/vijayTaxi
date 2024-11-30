import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {APP_ICONS} from '../../utils/icons';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../components/customButton';
import {COMMON_COLORS} from '../../constants/colors';
import {useThemeColors} from '../../utils/theme';
import CustomScreenHeader from '../../components/screenHeader';

const OtpScreen = ({navigation}) => {
  // Refs for each OTP input
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  // Function to handle text change and focus shift
  const handleChangeText = (text, nextInputRef) => {
    if (text.length === 1 && nextInputRef) {
      nextInputRef.current?.focus();
    }
  };

  // Function to handle backspace (focus the previous input)
  const handleBackspace = (text, currentInputRef, prevInputRef) => {
    if (text.length === 0) {
      prevInputRef?.current?.focus();
    }
  };

  const VerifyOTP = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={moderateScale(20)} // Adjust based on your header height
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <CustomScreenHeader
          leadingIcon={APP_ICONS.BACK}
          // title="OTP Verification"
          titleStyle={styles.headerTitle}
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Verify OTP</Text>
          <Text style={styles.subtitle}>
            Please Enter the OTP Sent to Your Phone
          </Text>

          <View style={styles.inputContainer}>
            {/* OTP Input fields with refs */}
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              // placeholder="0"
              // placeholderTextColor="#888"
              ref={input1Ref}
              onChangeText={text => handleChangeText(text, input2Ref)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace('', input1Ref, input1Ref);
                }
              }}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              // placeholder="0"
              // placeholderTextColor="#888"
              ref={input2Ref}
              onChangeText={text => handleChangeText(text, input3Ref)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace('', input2Ref, input1Ref);
                }
              }}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              // placeholder="0"
              // placeholderTextColor="#888"
              ref={input3Ref}
              onChangeText={text => handleChangeText(text, input4Ref)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace('', input3Ref, input2Ref);
                }
              }}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              // placeholder="0"
              // placeholderTextColor="#888"
              ref={input4Ref}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace('', input4Ref, input3Ref);
                }
              }}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            buttonText={'Resend OTP (30s)'}
            buttonStyle={styles.actionButton}
          />
          <CustomButton
            buttonText={'Verify OTP'}
            buttonStyle={styles.actionButton}
            onPress={VerifyOTP}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingHorizontal: moderateScale(15),
  },
  contentWrapper: {
    flex: 1,
    // justifyContent: "space-between",
    paddingHorizontal: moderateScale(15),
  },
  headerTitle: {
    color: 'blue',
  },
  title: {
    fontSize: moderateScale(28),
    color: 'black',
    // textAlign: 'center',
    // marginBottom: moderateScale(10),
  },
  subtitle: {
    fontSize: moderateScale(12),
    color: COMMON_COLORS.GRAY,
    // textAlign: 'center',
    marginBottom: moderateScale(20),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', // Adjust width for better spacing
    // alignSelf: 'center', // Center the inputs horizontally
    marginBottom: moderateScale(30),
  },
  input: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    textAlign: 'center',
    fontSize: moderateScale(15),
    backgroundColor: COMMON_COLORS.GRAY_LIGHT,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute buttons evenly
    marginBottom: moderateScale(10),
    paddingHorizontal: moderateScale(15),
  },
  actionButton: {
    flex: 1, // Make buttons take equal width
    marginHorizontal: moderateScale(5), // Add some spacing between buttons
  },
});
