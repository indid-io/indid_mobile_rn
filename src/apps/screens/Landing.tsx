import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import Credentials from './Credentials';

const {Navigator, Screen} = createBottomTabNavigator();

export default function Landing() {
  const styles = useStyleSheet(themedStyles);

  const BottomTabBar = ({navigation, state}: {navigation: any; state: any}) => (
    <BottomNavigation
      style={styles.barStyle}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="Credentials" />
      <BottomNavigationTab title="Settings" />
    </BottomNavigation>
  );

  const TabNavigator = () => (
    <Navigator tabBar={(props: any) => <BottomTabBar {...props} />}>
      <Screen name="Credentials" component={Credentials} />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          // tabBarIcon: ({focused, size}) => (
          // <Icon
          //   name="home"
          //   color={focused ? '#282828' : 'grey'}
          //   size={size}
          // />
          // ),
        }}
      />
    </Navigator>
  );

  return (
    <>
      <TabNavigator />
    </>
  );
}

const themedStyles = StyleService.create({
  barStyle: {
    backgroundColor: 'color-danger-default',
    color: 'color-success-default',
  },
});
