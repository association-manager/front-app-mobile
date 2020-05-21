import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../../../components/extra/image-overlay.component';
import { EmailIcon } from '../../../components/extra/icons';
import { KeyboardAvoidingView } from '../../../components/extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();

  const onResetPasswordButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('../../../assets/images/image-splash.png')}>
        <Text
          style={styles.forgotPasswordLabel}
          category='h4'
          status='control'>
          Mot de passe oublié
        </Text>
        <Text
          style={styles.enterEmailLabel}
          status='control'>
          Veuillez saisir votre adresse e-mail
        </Text>
        <View style={styles.formContainer}>
          <Input
            status='control'
            placeholder='Email'
            icon={EmailIcon}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 24,
  },
  enterEmailLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 64,
  },
});
