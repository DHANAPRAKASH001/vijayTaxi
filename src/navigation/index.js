import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-bootsplash';

import LoginScreen from '../screens/auth';
import HomeScreen from '../screens/home';
import OtpScreen from '../screens/otp';
import BookingHistoryScreen from '../screens/bookingHistory';
import DrawerMenu from '../components/drawerMenu';
import NotificationsOffersScreen from '../screens/notificationAndOffers';
import PaymentMethodsScreen from '../screens/paymentMethods';
import AboutScreen from '../screens/about';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin); // Redux-managed login state

  useEffect(() => {
    const initializeApp = async () => {
      try {
        console.log('Initializing app...');

        // Simulate a 10-second delay
        await new Promise(resolve => setTimeout(resolve, 10000));

        const credentials = true; // Simulated credential check
        if (credentials) {
          console.log('User credentials found:', credentials);
          // Uncomment to update Redux state: dispatch(setLogin(true));
        } else {
          console.log('No credentials found. Redirecting to login.');
          // Uncomment to update Redux state: dispatch(setLogin(false));
        }
      } catch (error) {
        console.error('Error retrieving credentials:', error);
        // Uncomment to update Redux state: dispatch(setLogin(false));
      } finally {
        // Once initialization is complete, hide splash
        setIsInitializing(false);
      }
    };

    initializeApp();
  }, [dispatch]);

  useEffect(() => {
    if (!isInitializing) {
      SplashScreen.hide(); // Hide splash screen when initialization is done
    }
  }, [isInitializing]);

  return (
    <NavigationContainer>
             

      <Stack.Navigator initialRouteName={isLogin ? 'HomeScreen' : 'OtpScreen'}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationAndOffersScreen" component={NotificationsOffersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethodsScreen" component={PaymentMethodsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />



      </Stack.Navigator>

      <DrawerMenu />
    </NavigationContainer>
  );
};

export default AppNavigator;
