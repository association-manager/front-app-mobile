import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, Avatar, TopNavigation, TopNavigationAction, Radio, RadioGroup } from '@ui-kitten/components';
import { ImageOverlay } from '../../../components/extra/image-overlay.component';
import {
  PhoneIcon,
  EmailIcon,
  TextIcon,
} from '../../../components/extra/icons';
import { KeyboardAvoidingView } from '../../../components/extra/3rd-party';//
import { ArrowIosBackIcon, MessageCircleIcon } from '../../../components/icons';
import { SafeAreaLayout } from '../../../components/safe-area-layout.component';


export default ({ navigation }): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const [title, setTitle] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();


  const onConfirmEditProjectTaskButtonPress = (): void => {
    navigation && navigation.navigate('ProjectTasks');
  };


  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderChatAction = (): React.ReactElement => (//
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
        title="Mise à jour de la tâche"
        leftControl={renderBackAction()}
        rightControls={renderChatAction()}
      />
      <KeyboardAvoidingView>
        <ImageOverlay
          style={styles.container}
          source={require('../../../assets/images/image-splash.png')}>
          <View style={styles.headerContainer}>
            <Avatar
            size='giant'
              source={require('../../../assets/images/image-app-icon_.png')}
            />
            <Text
              category='h1'
              status='control'>
              Tâches par défaut
            </Text>
            <Text
              style={styles.signInLabel}
              category='s1'
              status='control'>
              Modification
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Titre de la tâches'
              icon={TextIcon}
              value={title}
              defaultValue={'Tâches par défaut'}
              caption='Titre'
              onChangeText={setTitle}
            />
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Description de la tâches'
              icon={TextIcon}
              value={description}
              defaultValue={'An open-source platform for making universal native apps with React Native'}
              onChangeText={setDescription}
              caption='Description'
            />

            <Text category='h6'
              style={styles.titleRadioGroup}>
              {`Nouveau statut: ${selectedIndex + 1}`}
            </Text>
        
            <RadioGroup style={styles.defaultRadioGroup}
              selectedIndex={selectedIndex}
              onChange={index => setSelectedIndex(index)}>
              <Radio text="A faire">A faire</Radio>
              <Radio text="En cours">En cours</Radio>
              <Radio text="Terminée">Terminée</Radio>
            </RadioGroup>

          </View>
          
          <Button
            style={styles.confirmEditButton}
            size='giant'
            onPress={onConfirmEditProjectTaskButtonPress}>
            Modifier la tâche
          </Button>
          <View style={styles.userFormEditContainer}>
          </View>
        </ImageOverlay>
      </KeyboardAvoidingView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleRadioGroup: {
    marginTop: 20,
  },
  defaultRadioGroup: {
    // marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  orderInput: {
    marginTop: 14,
  },
  confirmEditButton: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  userFormEditContainer: {
    marginTop: 38,
  },
});

