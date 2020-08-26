/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'unstated';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Routes from './routes';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Routes />
        </ApplicationProvider>
      </Provider>
    </>
  );
};

export default App;
