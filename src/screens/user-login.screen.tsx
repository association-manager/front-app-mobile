import React, {useState} from 'react';
import {  View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Text, Avatar, IconProps, Icon} from '@ui-kitten/components';
import { ImageOverlay } from '../components/image-overlay.component';
import { 
  FacebookIcon,GoogleIcon, PersonIcon, TwitterIcon,
  } from '../components/icons';
import { KeyboardAvoidingView } from '../components/3rd-party';
import Toast from 'react-native-tiny-toast'
import styles from '../assets/styles/login-system/userLoginPage';
import auth from '../services/auth-api';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-community/async-storage';
import { retrieve } from '../actions/user/show';
import { connect } from 'react-redux';
import * as Facebook from 'expo-facebook';
import { toastStyles } from '../assets/styles/toastStyles';



export const UserLoginScreen = ({ navigation}: any, props: any): React.ReactElement => {

    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const isFocused = navigation.isFocused();
    const [id, setId] = useState<string>();
    const [isLoggedin, setLoggedinStatus] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isImageLoading, setImageLoadStatus] = useState(false);
    //const [fbkAcessToken, setFbkAcessToken] = React.useState<string>();
    

    React.useEffect(() => {
      if (isFocused) {
        console.log(navigation.dangerouslyGetState())
        auth.logout();
        fbkLogout();
      }
    }, [isFocused===true])
   

    const onSignInButtonPress = async (): Promise<void> => {
      if (await auth.authenticate(email, password)){
        Toast.showSuccess('Connection réussie')
        setTimeout(()=>{
          AsyncStorage.getItem("email")
            .then(id => setId(id?id:""))
          console.log(id)
          navigation && navigation.navigate('UserAdsPage', {id});
        },2000)
      }else{
        Toast.show("Echec d'authentification !",toastStyles);
      }
    };

    const facebookLogIn = async (): Promise<void> =>{
      await Facebook.initializeAsync('1952300694903762', 'AssociationsManager');
      try {
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
            .then(response => response.json())
            .then(data => {
              Toast.showSuccess("Connection réussie :" + data)
              if(data)AsyncStorage.setItem('userData', data.toString())
              setLoggedinStatus(true);
              setUserData(data);
            })
            .catch(e => console.log(e))
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        Toast.show(`Facebook Login Error: ${message}`,toastStyles);
      }
    }
  
    const fbkLogout = (): void => {
      setLoggedinStatus(false);
      setUserData(null);
      setImageLoadStatus(false);
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