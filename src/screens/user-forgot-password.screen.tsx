import React from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../components/image-overlay.component';
import { EmailIcon } from '../components/icons';
import { KeyboardAvoidingView } from '../components/3rd-party';
import userForgotPassword from '../assets/styles/login-system/userForgotPassword';
import forgetPwdApi from '../services/api-forget-pwd.service';
import Toast from 'react-native-tiny-toast';

export const UserForgotPasswordScreen = ({ navigation }: any): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();

  const onResetPasswordButtonPress = async (): Promise<void> => {
    email
    let query = `mutation
                        {
                          forgotPassword(
                            email: "${email}",
                          
                          )
                        }
                  `;
    console.log(query);
    await forgetPwdApi.post('/graphql', {query},{
      headers: {
        'Shopping-Cart': 'associationManager'
      }}
    ).then((result: any) => {
      console.log(result.data)
      Toast.showSuccess(
         'Message Envoyer\nSi votre email est valide vous receverez un email de réinitialisation',
         {duration: 4000}
        )
      setTimeout(()=>navigation && navigation.goBack(), 5000)
      
    })
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={userForgotPassword.container}
        source={require('../assets/images/image-splash.png')}>
        <Text
          style={userForgotPassword.forgotPasswordLabel}
          category='h4'
          status='control'>
          Mot de passe oublié
        </Text>
        <Text
          style={userForgotPassword.enterEmailLabel}
          status='control'>
          Veuillez saisir votre adresse e-mail
        </Text>
        <View style={userForgotPassword.formContainer}>
          <Input
            status='control'
            placeholder='Email'
            accessoryRight={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Button
          size='giant'
          onPress={onResetPasswordButtonPress}>
          Réinitialiser le mot de passe
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};
