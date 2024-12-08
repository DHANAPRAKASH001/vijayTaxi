import React, {useState} from 'react';
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
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../components/customButton';
import {APP_IMAGES} from '../../utils/images';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    if (!phone) {
      Alert.alert('Validation Error', 'Please enter your phone number.');
    } else if (phone.length !== 10) {
      Alert.alert('Validation Error', 'Phone number must be 10 digits.');
    } else {
      // Handle login logic here
      console.log(`Phone: ${phone}`);
      navigation.navigate("OtpScreen")
    }
  };

  const handleTermsPress = () => {
    // Navigate to Terms and Conditions page or show alert
    Alert.alert('Terms & Conditions', 'Here are the terms and conditions...');
  };

  const handlePrivacyPress = () => {
    // Navigate to Privacy Policy page or show alert
    Alert.alert('Privacy Policy', 'Here is the privacy policy...');
  };

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
            style={[styles.input, {textAlignVertical: 'center'}]} // Ensure placeholder is vertically centered
            placeholder="eg.8888679067"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <CustomButton
            buttonText={'Send OTP'}
            buttonStyle={{width: '100%'}}
            onPress={handleLogin}
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
  },
  sectionHeader: {
    height: moderateScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBody: {
    flex: 1,
    minHeight: moderateScale(300),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(15),
    marginVertical: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(18),
    color: 'black',
    fontWeight: 'bold',
    marginBottom: moderateScale(12),
  },
  input: {
    width: '100%',
    height: moderateScale(45),
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: moderateScale(15),
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
    textAlign: 'center',
    marginTop: moderateScale(10),
  },
  headerImage: {
    height: moderateScale(300),
    width: moderateScale(200),
    resizeMode: 'contain',
  },
  bodyImage: {
    height: moderateScale(300),
    width: '100%',
    resizeMode: 'contain',
  },
  linkText: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
