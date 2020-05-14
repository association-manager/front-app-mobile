import {StyleSheet, Dimensions} from 'react-native';

const layoutItemnStyle = StyleSheet.create({
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
  },
  itemImage: {
    alignSelf: 'center',
    width: 30,
    height: 30,
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