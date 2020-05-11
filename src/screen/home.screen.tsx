import React from 'react';
import {SafeAreaView, ImageProps} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import {HomeComponent} from '../components/home.component';
import styles from '../styles/layoutStyle.component';

export const HomeScreen = ({ navigation }: NavigationStackProp) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <SafeAreaView style={styles.area}>
        <HomeComponent navigation={navigateDetails} />
    </SafeAreaView>
  );
};