import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../../components/icons';
import ContentView from '../../../layouts/project/alimentation-pour-tous';
import { MessageCircleIcon } from '../../../components/icons';

export const AlimentationPourTousScreen = ({ navigation }): React.ReactElement => {

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
        title='Alimentation pour tous'
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