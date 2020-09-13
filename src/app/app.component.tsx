import React from 'react';
//import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './navigation.component';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppIconsPack } from './app-icons-pack';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import AllReducers from '../reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {reducer as reducerForm} from 'redux-form';
 // see https://github.com/facebook/react-native/issues/14796
 import { Buffer } from 'buffer';
 // see https://github.com/facebook/react-native/issues/16434
 import { URL, URLSearchParams } from 'whatwg-url';
 // see https://github.com/facebook/react-native/issues/12890
 import RNEventSource from 'react-native-event-source';

import { default as appTheme } from '../assets/styles/custom-theme.json'; // <-- Import app theme


global.Buffer = Buffer;
global.URL = URL;
global.URLSearchParams = URLSearchParams;
global.EventSource = RNEventSource;

const theme = { ...darkTheme, ...appTheme };
const store = createStore(combineReducers({
  ...AllReducers,
  reducerForm
}), {}, applyMiddleware(thunk));

export default () => (
  <SafeAreaProvider>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
      <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={theme}>
            <AppNavigator/>
        </ApplicationProvider>
      </Provider>
  </SafeAreaProvider>
);