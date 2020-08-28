import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateIdentity from './apps/screens/CreateIdentity';
import GettingStarted from './apps/screens/GettingStarted';
import Introduction from './apps/screens/introduction';
import RecoverIdentity from './apps/screens/RecoverIdentity';
import RecoverPhrase from './apps/screens/RecoverPhrase';
import Landing from './apps/screens/Landing';
import Credentials from './apps/screens/Credentials';
import Settings from './apps/screens/Settings';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

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
      <NavigationContainer>
        {/* <Landing /> */}
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
              <Stack.Screen name="Landing" component={Landing} />
              <Stack.Screen name="Credentials" component={Credentials} />
              <Stack.Screen name="Settings" component={Settings} />
            </>
          ) : (
            <>
              <Stack.Screen name="Landing" component={Landing} />
              <Stack.Screen name="Credentials" component={Credentials} />
              <Stack.Screen name="Settings" component={Settings} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
