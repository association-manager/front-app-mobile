import React from 'react';
import {  View } from 'react-native';
import { Button, Input, Text, Avatar } from '@ui-kitten/components';
import { ImageOverlay } from '../components/image-overlay.component';
import {
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  TwitterIcon,
} from '../components/icons';
import { KeyboardAvoidingView } from '../components/3rd-party';
import Toast from 'react-native-tiny-toast'
import userLoginPage from '../assets/styles/login-system/userLoginPage';
import auth from '../services/auth-api.service';


export const UserLoginScreen = ({ navigation }: any): React.ReactElement => {

    const [email, setEmail] = React.useState<string>("test17890@test.com");
    const [password, setPassword] = React.useState<string>("password");
    const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

    const onSignInButtonPress = (): void => {
      if (auth.authenticate(email, password)){
        Toast.showSuccess('Login success')
        setTimeout(()=>{
          navigation && navigation.navigate('UserAdsPage');
        },2000)
        
      }else{
        Toast.show("Echec d'authentification !",{
          position: Toast.position.CENTER,
          containerStyle:{
            backfaceVisibility: "hidden",
            position: "relative",
            alignContent: "center",
            borderRadius: 20
          },
          textColor: '#FFF',
          duration: 1500
        });
      }
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
          source={require('../assets/images/image-splash.png')}>
          <View style={userLoginPage.headerContainer}>
            <Avatar
            size='giant'
              source={require('../assets/images/image-app-icon_.png')}
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
}
  
