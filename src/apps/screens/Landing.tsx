import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateIdentity from './CreateIdentity';
import Credentials from './Credentials';

const Tab = createMaterialBottomTabNavigator();

export default function Landing() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Credentials"
        activeColor="#FFF"
        inactiveColor="#d1d1d1"
        barStyle={styles.barStyle}>
        <Tab.Screen
          name="Credentials"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              // <MaterialCommunityIcons name="home" color={color} size={26} />
              <Icon name="arrow-back" />
            ),
          }}
          component={Credentials}
        />
        <Tab.Screen name="CreateIdentity1" component={CreateIdentity} />
        <Tab.Screen name="CreateIdentity2" component={CreateIdentity} />
        <Tab.Screen name="CreateIdentity3" component={CreateIdentity} />
        <Tab.Screen name="CreateIdentity4" component={CreateIdentity} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#f23a2e',
  },
});
