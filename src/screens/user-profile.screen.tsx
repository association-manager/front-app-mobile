import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Text, Avatar, IconProps, Icon } from '@ui-kitten/components';
import { ImageOverlay } from '../components/image-overlay.component';
import { EmailIcon } from '../components/icons';
import { KeyboardAvoidingView } from '../components/3rd-party';
import userProfile from '../assets/styles/login-system/userProfile';
/* import { SafeAreaView } from 'react-native-safe-area-context'; */
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { retrieve, update, reset } from '../actions/user/update';
import Toast from 'react-native-tiny-toast';

export const UserProfileScreen = ({ navigation }: any, props: any): React.ReactElement => {

  /* const [phoneNumber, setPhoneNumber] = React.useState<string>();
  const [address, setAddress] = React.useState<string>();
  const [postalCode, setPostalCode] = React.useState<string>();
  const [city, setCity] = React.useState<string>(); */

  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [id, setId] = React.useState<string>(props.id);
  const [password, setPassword] = React.useState<string>();
  const [newPassword, setNewPassword] = React.useState<string>();
  const [confirmPassword, setConfirmNewPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const item = props.updated ? props.updated : props.retrieved;


  React.useEffect(()=>{
    AsyncStorage.multiGet(['firstName', 'lastName', 'email'])
      .then((user:any) => {
        setFirstName(user[0]['firstName']);
        setLastName(user[1]['lastName']);
        setEmail(user[2]['email'])
      })
  },[]);

  const onConfirmeditProfilPress = (): void => {
    AsyncStorage.getItem('id').then(userId => {
      if(userId)setId(userId);
    })
    Toast.showSuccess('Modification effectuée')
    setTimeout(()=>{
      navigation && navigation.navigate('UserProfileScreen', {id});
    },2000)
    ;
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderEyeIcon = (props:IconProps)=>
  <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'}/>
  </TouchableWithoutFeedback>

  const renderBackAction = (): void => (navigation.goBack());

  return (
      <KeyboardAvoidingView>
        <ImageOverlay
          style={userProfile.container}
          source={require('../assets/images/image-splash.png')}>
          <View style={userProfile.headerContainer}>
            <Avatar
            size='giant'
              source={require('../assets/images/image-app-icon.png')}
            />
            <Text
              category='h3'
              status='control'>
              {`${firstName}' '${lastName}`}
            </Text>
            <Text
              style={userProfile.signInLabel}
              category='s1'
              status='control'>
              Modification de mon profil
            </Text>
          </View>
          <View style={userProfile.formContainer}>
            <Input
              style={userProfile.orderInput}
              status='control'
              placeholder='Email'
              accessoryRight={EmailIcon}
              value={email}
              defaultValue={'petitbert.nesly@association-manager.fr'}
              onChangeText={setEmail}
              caption='E-mail'
            />
  {/*          <Input
              style={userProfile.orderInput}
              status='control'
              placeholder='Adresse'
              icon={GlobeIcon}
              value={address}
              defaultValue={'14 résidence du parc de l\'effort mutuel'}
              onChangeText={setAddress}
              caption='Adresse postale'
            />
            <Input
              style={userProfile.orderInput}
              status='control'
              placeholder='Adresse'
              icon={GlobeIcon}
              value={postalCode}
              defaultValue={'91120'}
              onChangeText={setPostalCode}
              caption='Code postal'
            /> 
            <Input
              style={userProfile.orderInput}
              status='control'
              placeholder='Adresse'
              accessoryRight={GlobeIcon}
              value={city}
              defaultValue={'Palaiseau'}
              caption='Ville'
              onChangeText={setCity}
            /> */}
            <Input
              style={userProfile.passwordInput}
              status='control'
              placeholder='Mot de passe'
              accessoryRight={renderEyeIcon}
              value={password}
              defaultValue={'passowrd1'}
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
              caption='Mot de passe'
              
            />
            <Input
              style={userProfile.passwordInput}
              status='control'
              placeholder='Nouveau mot de passe'
              accessoryRight={renderEyeIcon}
              value={newPassword}
              // defaultValue={'passowrd2'}
              secureTextEntry={!passwordVisible}
              onChangeText={setNewPassword}
            />
            <Input
              style={userProfile.passwordInput}
              status='control'
              placeholder='Confirmation du mot de passe'
              accessoryRight={renderEyeIcon}
              value={confirmPassword}
              // defaultValue={'passowrd1'}
              secureTextEntry={!passwordVisible}
              onChangeText={setConfirmNewPassword}
            />
          </View>
          <Button
            style={userProfile.signInButton}
            size='medium'
            onPress={onConfirmeditProfilPress}>
            Modifier mon profil
          </Button>
          <Button
            style={[userProfile.signInButton, {backgroundColor:"Danger"}]}
            size='medium'
            onPress={renderBackAction}>
            Annuler
          </Button>
          <View style={userProfile.userFormEditContainer}>
          </View>
        </ImageOverlay>
      </KeyboardAvoidingView>
    );
  };
  const mapStateToProps = (state: any) => ({
    retrieveError: state.user.update.retrieveError,
    retrieveLoading: state.user.update.retrieveLoading,
    updateError: state.user.update.updateError,
    updateLoading: state.user.update.updateLoading,
    created: state.user.create.created,
    deleted: state.user.del.deleted,
    retrieved: state.user.update.retrieved,
    updated: state.user.update.updated,
  });
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      retrieve: (id: string )=> dispatch(retrieve(id)),
      update: (item: string , values: string) => dispatch(update(item, values)),
      reset: () => dispatch(reset()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
