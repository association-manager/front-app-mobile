import React from 'react';
import { ImageProps, SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { NavigationStackProp } from 'react-navigation-stack';

import styles from '../styles/layoutStyle.component';

const BackIcon = (props: ImageProps ): React.ReactElement<ImageProps> => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ navigation }: NavigationStackProp) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction  title="Retour" icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={styles.area}>
      <TopNavigation title='details' alignment='center' leftControl={BackAction()}/>
      <Divider/>
      <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>
          Welcome to UI Kitten 😻
        </Text>
        <Text style={styles.text} category='s1'>
          Start with editing App.js to configure your App
        </Text>
        <Text style={styles.text} appearance='hint'>
          For example, try changing theme to Dark by using eva.dark
        </Text>
      </Layout>
    </SafeAreaView>
  );
};