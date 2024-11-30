// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import CustomButton from '../../components/customButton';

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log(`Phone: ${phone}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={moderateScale(20)} // Adjust based on your header height
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader} />
        <View style={styles.sectionBody} />
        <View style={styles.sectionFooter}>
          <Text style={styles.title}>Login with your Phone Number</Text>
          <TextInput
            style={[styles.input, { textAlignVertical: 'center' }]} // Ensure placeholder is vertically centered
            placeholder="eg.8888679067"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity> */}
          <CustomButton buttonText={"Send OTP"} buttonStyle={{ width: "100%" }} />
          <Text style={styles.footerText}>
            By logging in, you agree to our terms and conditions.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: moderateScale(15)
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "green"
  },
  sectionHeader: {
    height: moderateScale(200),
    // backgroundColor: 'red',
  },
  sectionBody: {
    flex: 1,
    // backgroundColor: 'green',
    minHeight: moderateScale(200),
  },
  sectionFooter: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: "center"
    
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
    justifyContent: 'center', // Centers placeholder vertically
    alignItems: 'center', // Centers placeholder horizontally
    position: 'relative',
    marginBottom: moderateScale(15),
    borderColor: "grey",
    borderWidth:2,alignSelf: "center",
    textAlign: "center",
  },
  button: {
    width: '100%',
    height: moderateScale(45),
    backgroundColor: '#007BFF',
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: moderateScale(10),
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
});

export default LoginScreen;
