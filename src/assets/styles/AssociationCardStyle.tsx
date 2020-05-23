import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      height: 200,
    },
    itemAssociationType: {
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
      alignSelf:'flex-start',
      paddingHorizontal: 4,
      color: '#AAE6BF',
    },
    file: {
      ...StyleSheet.absoluteFillObject,
      height: 200,
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    linkAssociationProfile: {
      marginTop: 12,
      textAlign: 'center',
      color:'darkgray',
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
    },
    title: {
      zIndex: 1,
    },
    moreInfoLeft: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      borderRadius: 16,
      paddingHorizontal: 0,
    },
    moreInfoRiht: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      borderRadius: 16,
      paddingHorizontal: 0,
    },
  });
  