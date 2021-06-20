import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateIdentity from './apps/screens/CreateIdentity';
import GettingStarted from './apps/screens/GettingStarted';
import Introduction from './apps/screens/introduction';
import RecoverIdentity from './apps/screens/RecoverIdentity';
import RecoverPhrase from './apps/screens/RecoverPhrase';
import Credentials from './apps/screens/Credentials';
import Settings from './apps/screens/Settings';
import AsyncStorage from '@react-native-community/async-storage';
import Profile from './apps/screens/Profile';
import Notifications from './apps/screens/Notifications';
import Contacts from './apps/screens/Contacts';
import ScanQRCode from './apps/screens/ScanQRCode';
import {Button} from '@ui-kitten/components';
import {uniStyles} from './assets/styles/styles';
import {Colors} from './utils/Colors';

import {navigationRef} from './RootNavigation';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const ACTIVE_TAB_COLOR = Colors.PRIMARY;
const INACTIVE_TAB_COLOR = Colors.GRAY;

const ScanIcon = () => <Icon size={22} color="#FFF" name="qrcode-scan" />;

const FloatingButton = (props: any) => (
  <Button
    style={uniStyles.floatingButton}
    accessoryLeft={ScanIcon}
    onPress={() => {
      if (props?.onPress) {
        props.onPress();
      } else {
        console.log('BAGONG');
      }
    }}
  />
);

const Tab = () => {
  return (
    <>
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: ACTIVE_TAB_COLOR,
          inactiveTintColor: INACTIVE_TAB_COLOR,
          // style: {
          // backgroundColor: '#4050B5',
          // borderTopWidth: 0.5,
          // borderTopColor: 'grey',
          // },
        }}>
        <BottomTab.Screen
          options={{
            title: 'Credentials',
            tabBarLabel: () => null,
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="checkbox-marked-circle-outline"
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                size={size}
              />
            ),
          }}
          component={Credentials}
          name="Credentials"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarLabel: () => null,
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="account"
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                size={size}
              />
            ),
          }}
          component={Profile}
          name="Profile"
        />
        <BottomTab.Screen
          options={{
            title: 'Contacts',
            tabBarLabel: () => null,
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="account-multiple"
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                size={size}
              />
            ),
          }}
          component={Contacts}
          name="Contacts"
        />
        <BottomTab.Screen
          options={{
            title: 'Notifications',
            tabBarLabel: () => null,
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="bell"
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                size={size}
              />
            ),
          }}
          component={Notifications}
          name="Notifications"
        />
        <BottomTab.Screen
          options={{
            title: 'Settings',
            tabBarLabel: () => null,
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="cog"
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                size={size}
              />
            ),
          }}
          component={Settings}
          name="Settings"
        />
      </BottomTab.Navigator>
      <FloatingButton
        onPress={() => {
          if (navigationRef.current) {
            navigationRef.current.navigate('ScanQRCode');
          }
        }}
      />
    </>
  );
};

class Routes extends React.Component {
  state = {
    isLogged: false,
  };

  async UNSAFE_componentWillMount() {
    this.setState({
      isLogged: await AsyncStorage.getItem('introduction'),
    });
    // AsyncStorage.clear();
  }

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!this.state.isLogged ? (
            <>
              <Stack.Screen name="GettingStarted" component={GettingStarted} />
              <Stack.Screen name="Introduction" component={Introduction} />
              <Stack.Screen name="CreateIdentity" component={CreateIdentity} />
              <Stack.Screen
                name="RecoverIdentity"
                component={RecoverIdentity}
              />
              <Stack.Screen name="RecoverPhrase" component={RecoverPhrase} />
              <Stack.Screen name="Landing" component={Tab} />
            </>
          ) : (
            <>
              <Stack.Screen name="Landing" component={Tab} />
              <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
