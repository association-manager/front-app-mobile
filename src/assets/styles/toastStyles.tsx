import Toast, { ToastOptions } from 'react-native-tiny-toast'

export const toastStyles: ToastOptions = {
    position: Toast.position.CENTER,
    containerStyle:{
      backfaceVisibility: "hidden",
      position: "relative",
      alignContent: "center",
      borderRadius: 20
    },
    textColor: '#FFF',
    duration: 1500
  };
  