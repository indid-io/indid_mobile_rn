import {StyleSheet, Dimensions} from 'react-native';

export const uniStyles = StyleSheet.create({
  fullPage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  fullPageScroll: {
    minHeight: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  textWhite: {
    color: '#FFF',
  },
  textBlack: {
    color: '#282828',
  },
  bgWhite: {
    backgroundColor: '#FFF',
  },
  bgRed: {
    backgroundColor: '#f23a2e',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});
