import React from 'react';
import { View } from 'react-native';
import { Button, Input, Text, Avatar, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from '../components/image-overlay.component';
import {
  EyeIcon,
  EyeOffIcon,
  PhoneIcon,
  EmailIcon,
  GlobeIcon,
} from '../components/icons';
import { KeyboardAvoidingView } from '../components/3rd-party';
import { ArrowIosBackIcon, MessageCircleIcon } from '../components/icons';
import userProfile from '../assets/styles/login-system/userProfile';
import { SafeAreaView } from 'react-native-safe-area-context';
({ navigation }: any ): React.ReactElement => {

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
  navigation && navigation.navigate('HomeNavigator');
};

const onPasswordIconPress = (): void => {
  setPasswordVisible(!passwordVisible);
};


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
            Nesly PETIT BERT
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
            icon={EmailIcon}
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
          /> */}
          <Input
            style={userProfile.orderInput}
            status='control'
            placeholder='Adresse'
            icon={GlobeIcon}
            value={city}
            defaultValue={'Palaiseau'}
            caption='Ville'
            onChangeText={setCity}
          />
          <Input
            style={userProfile.passwordInput}
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
            style={userProfile.passwordInput}
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
            style={userProfile.passwordInput}
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
