import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../../components/icons';
import ContentView from '../../../layouts/project/coupe-angleterre-de-football';
import { MessageCircleIcon } from '../../../components/icons';

export const CoupeAngleterreDeFootballScreen = ({ navigation }): React.ReactElement => {

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderChatAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MessageCircleIcon}
      onPress={() => navigation.navigate('Chat2')}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title={'Coupe d\'Angleterre de football'}
        leftControl={renderBackAction()}
        rightControls={renderChatAction()}
      />
      <ContentView navigation={navigation}/>
    </SafeAreaLayout>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
