import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomScreenHeader from '../../components/screenHeader';
import { APP_ICONS } from '../../utils/icons';
import { useDispatch } from 'react-redux';
import { closeDrawerMenu, openDrawerMenu } from '../../components/drawerMenu/reducers';
import BottomSheet from '../../components/bottomSheet';
import BottomSheetHome from '../../components/bottomSheet/components/bottomSheetHome';

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const openSideDrawer = () => {

    dispatch(openDrawerMenu())

  }

  const closeSideDrawer = () => {
    
    dispatch(closeDrawerMenu())

  }

  const notification = () => {
    
  }
 

  return (
    <View style={styles.container}>
<BottomSheet>
       <BottomSheetHome />
      </BottomSheet>  
           <CustomScreenHeader
          leadingIcon={APP_ICONS.HAMBURGER}
          onLeadingIconPress={openSideDrawer}
          trailingIcon={APP_ICONS.NOTIFICATION_BELL}
          title="LANDING SCREEN"
          titleStyle={styles.headerTitle}
        />

        <Text>     LANDING SCREEN _ MAP ON DEVELOPMENT</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default HomeScreen;
