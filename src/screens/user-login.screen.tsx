import React from 'react';
import {  View, TouchableWithoutFeedback } from 'react-native';
import {USERNAME, UPWD} from '@env';
import { Button, Input, Text, Avatar, IconProps, Icon} from '@ui-kitten/components';
import { ImageOverlay } from '../components/image-overlay.component';
import { 
  FacebookIcon,GoogleIcon, PersonIcon, TwitterIcon,
  } from '../components/icons';
import { KeyboardAvoidingView } from '../components/3rd-party';
import Toast from 'react-native-tiny-toast'
import styles from '../assets/styles/login-system/userLoginPage';
import auth from '../services/auth-api';
import { useSafeArea } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-community/async-storage';
import {facebookService} from '../services/fbk-login.service';


export const UserLoginScreen = ({ navigation}: any): React.ReactElement => {

    const insets = useSafeArea();
    const [email, setEmail] = React.useState<string>(USERNAME);
    const [password, setPassword] = React.useState<string>(UPWD);
    const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
    const isFocused = navigation.isFocused();
    const [id, setId] = React.useState<string>();
    const [fbkAcessToken, setFbkAcessToken] = React.useState<string>();

    React.useEffect(() => {
      if (isFocused) auth.logout()
    }, [isFocused===true])
    

    const onSignInButtonPress = (): void => {
      if (auth.authenticate(email, password)){
        Toast.showSuccess('Connection réussie')
        setTimeout(()=>{
          AsyncStorage.getItem("email")
            .then(email => setId(email?email:""))
          console.log(id)
          navigation && navigation.navigate('UserAdsPage', {id});
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

    const onFbkButtonPress= (): void => {
      facebookService.makeLoginButton((accessToken :string) => {
        setFbkAcessToken(accessToken)
      })
    }
  
    const onForgotPasswordButtonPress = (): void => {
      navigation && navigation.navigate('UserForgotPassword');
    };
  
    const onPasswordIconPress = (): void => {
      setPasswordVisible(!passwordVisible);
    };

    const renderEyeIcon = (props:IconProps)=>
      <TouchableWithoutFeedback onPress={onPasswordIconPress}>
          <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'}/>
      </TouchableWithoutFeedback>
  
  
    return (
      <KeyboardAvoidingView>
        <ImageOverlay
          style={styles.container}
          source={require('../assets/images/image-splash.png')}>
          <View style={styles.headerContainer}>
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
              style={styles.signInLabel}
              category='s1'
              status='control'>
              Connectez-vous
            </Text> 
          </View>
          <View style={styles.formContainer}>
            <Input
              status='control'
              placeholder='Email'
              accessoryRight={PersonIcon}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              style={styles.passwordInput}
              status='control'
              placeholder='Mot de passe'
              accessoryRight={renderEyeIcon}
              value={password}
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
            />
            <View style={styles.forgotPasswordContainer}>
              <Button
                style={styles.forgotPasswordButton}
                appearance='ghost'
                status='control'
                onPress={onForgotPasswordButtonPress}>
                Mot de passe oublié?
              </Button>
            </View>
          </View>
          <Button
            style={styles.signInButton}
            size='giant'
            onPress={onSignInButtonPress}>
            Se connecter
          </Button>
          <View style={styles.socialAuthContainer && {paddingBottom:insets.bottom}}>
            <Text
              style={styles.socialAuthHintText}
              status='control'>
              Ou connectez-vous en utilisant les réseaux sociaux
            </Text>
            <View style={styles.socialAuthButtonsContainer}>
              <Button
                appearance='ghost'
                status='control'
                size='giant'
                accessoryLeft={GoogleIcon}
              />
              <Button
                appearance='ghost'
                status='control'
                size='giant'
                accessoryLeft={FacebookIcon}
                onPress={onFbkButtonPress}
              />
              <Button
                appearance='ghost'
                status='control'
                size='giant'
                accessoryLeft={TwitterIcon}
              />
            </View>
          </View>
        </ImageOverlay>
      </KeyboardAvoidingView>
    );
}
  
