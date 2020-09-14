import React, {useState} from 'react';
import {  View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Text, Avatar, IconProps, Icon} from '@ui-kitten/components';
import { ImageOverlay } from '../components/image-overlay.component';
import { FacebookIcon,GoogleIcon, PersonIcon, TwitterIcon,
  } from '../components/icons';
import { KeyboardAvoidingView } from '../components/3rd-party';
import styles from '../assets/styles/login-system/userLoginPage';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { retrieve } from '../actions/user/show';
import { connect } from 'react-redux';

import { AuthContext } from '../navigation/auth.navigation';


export const UserLoginScreen = ({ navigation}: any, props: any): React.ReactElement => {

    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const isFocused = navigation.isFocused();

    //const [fbkAcessToken, setFbkAcessToken] = React.useState<string>();
    const { signIn, signInFbk } = React.useContext(AuthContext);


    const onSignInButtonPress = async (): Promise<void> => {
      signIn(email, password);
      
    };

    const facebookLogIn = async (): Promise<void> =>{
      signInFbk()
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
              placeholder='Identifiant'
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
                onPress={facebookLogIn}
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

const mapStateToProps = (state: any) => {
  return {
    error: state.user.show.error,
    loading: state.user.show.loading,
    retrieved: state.user.show.retrieved,
    deleteError: state.user.del.error,
    deleteLoading: state.user.del.loading,
    deleted: state.user.del.deleted,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
  return {
    retrieve: (id: any) => dispatch(retrieve(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserLoginScreen);