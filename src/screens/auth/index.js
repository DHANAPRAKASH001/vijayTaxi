import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  Animated,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../components/customButton';
import {APP_IMAGES} from '../../utils/images';
import {useDispatch, useSelector} from 'react-redux';
import {startLogin} from './reducers';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const {isLoading, isLogin} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!phone) {
      setErrorMessage('Please enter your phone number.');
      triggerShake(); // Trigger shake animation
    } else if (phone.length !== 10) {
      setErrorMessage('Phone number must be 10 digits.');
      triggerShake(); // Trigger shake animation
    } else {
      dispatch(startLogin({phone}));
    }
  };
  const [shakeAnim] = useState(new Animated.Value(0)); // For shake animation

  const triggerShake = () => {
    shakeAnim.setValue(0); // Reset the animation value
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTermsPress = () => {
    // Navigate to Terms and Conditions page or show alert
    Alert.alert('Terms & Conditions', 'Here are the terms and conditions...');
  };

  const handlePrivacyPress = () => {
    // Navigate to Privacy Policy page or show alert
    Alert.alert('Privacy Policy', 'Here is the privacy policy...');
  };

  useEffect(() => {
    if (isLogin) {
      navigation.navigate('OtpScreen');
    }
  }, [isLogin]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={moderateScale(20)} // Adjust based on your header height
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Image
            source={APP_IMAGES.WELCOME_TO_VIJAY_CONNECT}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.sectionBody}>
          <Image source={APP_IMAGES.TAXI_ONE} style={styles.bodyImage} />
        </View>
        <View style={styles.sectionFooter}>
          <Text style={styles.title}>Login with your Phone Number</Text>
          <TextInput
            editable={!isLoading}
            style={[styles.input, {textAlignVertical: 'center'}]} // Ensure placeholder is vertically centered
            placeholder="eg.8888679067"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <View style={styles.errorMessageWrapper}>
            {errorMessage && (
              <Animated.View style={{transform: [{translateX: shakeAnim}]}}>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              </Animated.View>
            )}
          </View>

          <CustomButton
            buttonText={'Send OTP'}
            buttonStyle={{width: '100%'}}
            onPress={handleLogin}
            isLoading={isLoading}
          />

          <Text style={styles.footerText}>
            By Continuing, You Agree to the
            <Text style={styles.linkText} onPress={handleTermsPress}>
              {' '}
              VijayConnect’s Terms & Conditions
            </Text>{' '}
            And{' '}
            <Text style={styles.linkText} onPress={handlePrivacyPress}>
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  sectionHeader: {
    minHeight: moderateScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "yellow"
  },
  sectionBody: {
    flex: 1,
    minHeight: moderateScale(250),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionFooter: {
    flex: 1,
    minHeight: moderateScale(250),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(15),
    // marginVertical: moderateScale(15),
    // backgroundColor: "green"
  },
  title: {
    fontSize: moderateScale(18),
    color: 'black',
    fontWeight: 'bold',
    marginVertical: moderateScale(12),
  },
  input: {
    width: '100%',
    height: moderateScale(45),
    fontSize: moderateScale(20),
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // marginBottom: moderateScale(15),
    borderColor: 'grey',
    borderWidth: 2,
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: moderateScale(45),
    backgroundColor: '#007BFF',
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: moderateScale(12),
    color: 'black',
    lineHeight: moderateScale(20),
    // textAlign: 'center',
    marginTop: moderateScale(10),
  },
  headerImage: {
    height: moderateScale(200),
    width: moderateScale(200),
    resizeMode: 'contain',
  },
  bodyImage: {
    height: moderateScale(250),
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor: "red"
  },
  linkText: {
    color: 'red',
    // textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
  },
  errorMessageWrapper: {
    marginBottom: moderateScale(15),
  },
});

export default LoginScreen;
