import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './navigation.component';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppIconsPack } from './app-icons-pack';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { default as appTheme } from '../assets/styles/custom-theme.json'; // <-- Import app theme

const theme = { ...darkTheme, ...appTheme };

export default () => (
  <React.Fragment>
    <SafeAreaProvider>
    <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigator/>
    </ApplicationProvider>
    </SafeAreaProvider>
  </React.Fragment>
);