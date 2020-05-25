import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserForgotPasswordScreen } from '../screens/user-forgot-password.screen';
import { UserLoginScreen } from '../screens/user-login.screen';
import { HomeNavigator } from './home.navigator';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='UserLoginPage' component={UserLoginScreen}/>
    <Stack.Screen name='UserForgotPassword' component={UserForgotPasswordScreen}/>
    <Stack.Screen name='HomeNavigator' component={HomeNavigator}/>
  </Stack.Navigator>
);
