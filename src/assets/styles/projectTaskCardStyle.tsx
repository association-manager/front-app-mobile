import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      height: 200,
    },
    itemDescription: {
      marginTop: 12,
      textAlign: 'center',
      color:'darkgray',
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      height: 200,
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    level: {
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
      alignSelf:'flex-start',
      paddingHorizontal: 4,

    },
    title: {
      zIndex: 1,
    },
    dateStartLeft: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      borderRadius: 16,
      paddingHorizontal: 0,
    },
    dateEndRight: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      borderRadius: 16,
      paddingHorizontal: 0,
    },
  });
  