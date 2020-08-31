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
  fullWidth: {
    width: Dimensions.get('window').width,
  },
  fullHeight: {
    height: Dimensions.get('window').height,
  },
  textWhite: {
    color: '#FFF',
  },
  textBlack: {
    color: '#282828',
  },
  textGrey: {
    color: '#bdbdbd',
  },
  textRed: {
    color: '#f23a2e',
  },
  bgWhite: {
    backgroundColor: '#FFF',
  },
  bgNetral: {
    backgroundColor: '#FAFAFA',
  },
  bgRed: {
    backgroundColor: '#f23a2e',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignSpaceBetween: {
    alignContent: 'space-between',
  },
  alignCenter: {
    alignContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsSpaceBetween: {
    alignItems: 'stretch',
  },
  textAlignCenter: {textAlign: 'center'},
  textVAlignCenter: {textAlignVertical: 'center'},
  safeBottomArea: {
    height: 50,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    borderRadius: 40,
    paddingHorizontal: 12,
  },
});
