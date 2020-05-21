import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, Avatar, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from '../../../components/extra/image-overlay.component';
import {
  EyeIcon,
  EyeOffIcon,
  // PersonIcon,
  PhoneIcon,
  EmailIcon,
  GlobeIcon,
} from '../../../components/extra/icons';
import { KeyboardAvoidingView } from '../../../components/extra/3rd-party';
import { ArrowIosBackIcon, MessageCircleIcon } from '../../../components/icons';
import { SafeAreaLayout } from '../../../components/safe-area-layout.component';


export default ({ navigation }): React.ReactElement => {
  {/*
    const [firstName, setFirstName] = React.useState<string>();
    const [lastName, setLastName] = React.useState<string>();
  */}
  const [phoneNumber, setPhoneNumber] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [address, setAddress] = React.useState<string>();
  const [postalCode, setPostalCode] = React.useState<string>();
  const [city, setCity] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [newPassword, setNewPassword] = React.useState<string>();
  const [confirmPassword, setConfirmNewPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);


  const onConfirmeditProfilPress = (): void => {
    navigation && navigation.navigate('AppNavigator');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };


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
        title='Mon profil'
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
              source={require('../../../assets/images/image-app-icon.png')}
            />
            <Text
              category='h1'
              status='control'>
              Nesly PETIT BERT
            </Text>
            <Text
              style={styles.signInLabel}
              category='s1'
              status='control'>
              Modification de mon profil
            </Text>
          </View>
          <View style={styles.formContainer}>
            {/*
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Nom'
              icon={PersonIcon}
              value={lastName}
              defaultValue={'PETIT BERT'}
              disabled={true}
              onChangeText={setLastName}
            />
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Prénom'
              icon={PersonIcon}
              value={firstName}
              defaultValue={'Nesly'}
              disabled={true}
              onChangeText={setFirstName}
            />
            */}
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Téléphone'
              icon={PhoneIcon}
              value={phoneNumber}
              defaultValue={'+33789548965'}
              caption='Téléphone'
              onChangeText={setPhoneNumber}
            />
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Email'
              icon={EmailIcon}
              value={email}
              defaultValue={'petitbert.nesly@association-manager.fr'}
              onChangeText={setEmail}
              caption='E-mail'
            />
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Adresse'
              icon={GlobeIcon}
              value={address}
              defaultValue={'14 résidence du parc de l\'effort mutuel'}
              onChangeText={setAddress}
              caption='Adresse postale'
            />
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Adresse'
              icon={GlobeIcon}
              value={postalCode}
              defaultValue={'91120'}
              onChangeText={setPostalCode}
              caption='Code postal'
            />
            <Input
              style={styles.orderInput}
              status='control'
              placeholder='Adresse'
              icon={GlobeIcon}
              value={city}
              defaultValue={'Palaiseau'}
              caption='Ville'
              onChangeText={setCity}
            />
            <Input
              style={styles.passwordInput}
              status='control'
              placeholder='Mot de passe'
              icon={passwordVisible ? EyeIcon : EyeOffIcon}
              value={password}
              defaultValue={'passowrd1'}
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
              caption='Mot de passe'
              onIconPress={onPasswordIconPress}
            />
            <Input
              style={styles.passwordInput}
              status='control'
              placeholder='Nouveau mot de passe'
              icon={passwordVisible ? EyeIcon : EyeOffIcon}
              value={newPassword}
              // defaultValue={'passowrd2'}
              secureTextEntry={!passwordVisible}
              onChangeText={setNewPassword}
              onIconPress={onPasswordIconPress}
            />
            <Input
              style={styles.passwordInput}
              status='control'
              placeholder='Confirmation du mot de passe'
              icon={passwordVisible ? EyeIcon : EyeOffIcon}
              value={confirmPassword}
              // defaultValue={'passowrd1'}
              secureTextEntry={!passwordVisible}
              onChangeText={setConfirmNewPassword}
              onIconPress={onPasswordIconPress}
            />
          </View>
          <Button
            style={styles.signInButton}
            size='giant'
            onPress={onConfirmeditProfilPress}>
            Modifier mon profil
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
  signInButton: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  userFormEditContainer: {
    marginTop: 38,
  },
});

