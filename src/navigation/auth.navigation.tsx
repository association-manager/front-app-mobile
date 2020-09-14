import * as React from "react";
import { createStackNavigator, /*StackActions*/ } from '@react-navigation/stack';
import { UserForgotPasswordScreen } from '../screens/user-forgot-password.screen';
import { UserLoginScreen } from '../screens/user-login.screen';
import { UserAdsPageScreen } from '../screens/user-ads-page.screen';
import { HomeNavigator } from './home.navigator';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '../services/auth-api';
import * as Facebook from 'expo-facebook';
import Toast from 'react-native-tiny-toast';
import { toastStyles } from '../assets/styles/toastStyles';

export const AuthContext = React.createContext();
const Stack = createStackNavigator();


export const AuthNavigator = (): React.ReactElement => {

  const [isLoggedin, setLoggedinStatus] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [isImageLoading, setImageLoadStatus] = React.useState(false);
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_IN_FBK':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('token');
      } catch (e) {

      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading

      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email: string , password: string) => {
        let userToken;
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        if (await auth.authenticate(email, password)){
          Toast.showSuccess('Connection réussie')
          setTimeout(async ()=>{
          userToken = await AsyncStorage.getItem('token');
          },2000)
        }else{
          Toast.show("Echec d'authentification !",toastStyles);
        }

        dispatch({ type: 'SIGN_IN', token: userToken });
      },
      signInFbk: async () => {
        let userToken;
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
                Toast.showSuccess("Connection réussie :" + data.name)
                if(data)AsyncStorage.setItem('userData', data.toString())
                setLoggedinStatus(true);
                setUserData(data);
                userToken=token;
                console.log(token)
              })
              .catch(e => console.log(e))
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          Toast.show(`Facebook Login Error: ${message}`,toastStyles);
        }
        dispatch({ type: 'SIGN_IN_FBK', token: userToken, userData: userData});
      },
      signOut: () => {
        auth.logout();
        setLoggedinStatus(false);
        setUserData(null);
        setImageLoadStatus(false);
        dispatch({ type: 'SIGN_OUT' })
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator headerMode='none'>
        {state.userToken == null ? (
          <>
            <Stack.Screen name='UserLoginPage' component={UserLoginScreen}/>
            <Stack.Screen name='UserForgotPassword' component={UserForgotPasswordScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="UserAdsPage" component={UserAdsPageScreen} options={{gestureEnabled:false}}/>
            <Stack.Screen name='HomeNavigator' component={HomeNavigator}/>
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  )
  };
