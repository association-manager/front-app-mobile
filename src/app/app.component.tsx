import React from 'react';
//import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './navigation.component';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppIconsPack } from './app-icons-pack';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import reducers from '../reducers';
import { Provider } from '@types/react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { default as appTheme } from '../assets/styles/custom-theme.json'; // <-- Import app theme

const theme = { ...darkTheme, ...appTheme };
const store = createStore(combineReducers({
  book,
  form
}), {}, applyMiddleware(thunk));
export default () => (
  <SafeAreaProvider>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
      </ApplicationProvider>
  </SafeAreaProvider>
);