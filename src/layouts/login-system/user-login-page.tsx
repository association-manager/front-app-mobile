import React from 'react';
import {  View } from 'react-native';
import { Button, Input, Text, Avatar } from '@ui-kitten/components';
import { ImageOverlay } from '../../components/image-overlay.component';

import {
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  TwitterIcon,
} from '../../components/icons';
import { KeyboardAvoidingView } from '../../components/3rd-party';
import userLoginPage from '../../assets/styles/login-system/userLoginPage';

export default ({ navigation }: any): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const onSignInButtonPress = (): void => {
    navigation && navigation.navigate('HomeNavigator');
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate('UserForgotPassword');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={userLoginPage.container}
        source={require('../../assets/images/image-splash.png')}>
        <View style={userLoginPage.headerContainer}>
          <Avatar
          size='giant'
            source={require('../../assets/images/image-app-icon_.png')}
          />
          <Text
            category='h1'
            status='control'>
            Bienvenue
          </Text>
          <Text
            style={userLoginPage.signInLabel}
            category='s1'
            status='control'>
            Connectez-vous
          </Text>
        </View>
        <View style={userLoginPage.formContainer}>
          <Input
            status='control'
            placeholder='Email'
            icon={PersonIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={userLoginPage.passwordInput}
            status='control'
            placeholder='Mot de passe'
            icon={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <View style={userLoginPage.forgotPasswordContainer}>
            <Button
              style={userLoginPage.forgotPasswordButton}
              appearance='ghost'
              status='control'
              onPress={onForgotPasswordButtonPress}>
              Mot de passe oublié?
            </Button>
          </View>
        </View>
        <Button
          style={userLoginPage.signInButton}
          size='giant'
          onPress={onSignInButtonPress}>
          Se connecter
        </Button>
        <View style={userLoginPage.socialAuthContainer}>
          <Text
            style={userLoginPage.socialAuthHintText}
            status='control'>
            Ou connectez-vous en utilisant les réseaux sociaux
          </Text>
          <View style={userLoginPage.socialAuthButtonsContainer}>
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={GoogleIcon}
            />
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={FacebookIcon}
            />
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={TwitterIcon}
            />
          </View>
        </View>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

