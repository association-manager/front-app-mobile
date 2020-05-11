import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screen/home.screen';
import { DetailsScreen } from '../components/details.component';


const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
  </Navigator>
);