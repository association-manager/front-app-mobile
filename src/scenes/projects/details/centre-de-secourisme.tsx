import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../../components/icons';
import ContentView from '../../../layouts/project/centre-de-secourisme';
import { MessageCircleIcon } from '../../../components/icons';

export const CentreDeSecourismeScreen = ({ navigation }): React.ReactElement => {

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
        title="Centre de secourisme"
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
