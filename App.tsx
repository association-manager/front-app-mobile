/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */
import React from 'react';
//import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
/* import { AppLoading} from './src/components/app-loading.component';
import { SplashImage } from './src/components/splash-image.component'; */
import { AppNavigator } from './src/components/navigation.component';
import { mapping, dark as darkTheme, light as lightTheme } from '@eva-design/eva';
import {AppIconsPack} from './src/components/app-icons-pack';

import { default as appTheme } from './app-mobile-custom-theme.json'; // <-- Import app theme


const theme = { ...darkTheme, ...appTheme };

const App = (): React.ReactElement => (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
        <ApplicationProvider mapping={mapping}  theme={theme}>
          <SafeAreaProvider>
            <AppNavigator/>
          </SafeAreaProvider>
        </ApplicationProvider>
    </React.Fragment>
);

export default App;

/* const Splash = ({ loading }): React.ReactElement => (
  <SplashImage
    loading={loading}
    source={require('src/assets/images/image-splash.png')}
  />
);

export default (): React.ReactElement => (
  <AppLoading
    initialConfig={theme}
    placeholder={Splash}>
    {props => <App {...props}/>}
  </AppLoading>
); */
