import {StyleSheet, Dimensions} from 'react-native';

const layoutItemnStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 8,
  },
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  itemDescription: {
    marginTop: 12,
    textAlign: 'center',
    color:'darkgray',
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
  },
item: {
    flex: 1,
    aspectRatio: 1.0,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    borderBottomColor: 'black',
    borderRightColor: 'black',
    borderRadius: 6,
    
  },
  itemIcon: {
    alignSelf: 'center',
    width: 64,
    height: 64,
  },
  itemTitle: {
    alignSelf: 'center',
    marginTop: 0,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    paddingTop: 16,
    
  },
});

export default layoutItemnStyle;