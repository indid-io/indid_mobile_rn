import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const deviceWidth = () => Dimensions.get('window').width;
const deviceHeight = () => Dimensions.get('window').height;

export default function ScanQRCode({navigation}: {navigation: any}) {
  const [isLoadingScan] = useState(false);
  const [errorMessage] = useState('');

  let scannerRef = useRef(null);

  const onSuccessRead = (e: any) => {
    console.log('success read qr code: ' + JSON.stringify(e));
  };

  const makeSlideOutTranslation = (translationType: any, fromValue: any) => {
    return {
      from: {
        [translationType]: -((deviceWidth() / 2) * 0.65),
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <QRCodeScanner
        ref={(node) => (scannerRef = node)}
        onRead={onSuccessRead}
        topViewStyle={styles.zeroContainer}
        bottomViewStyle={styles.zeroContainer}
        cameraStyle={styles.camera}
        showMarker
        customMarker={
          errorMessage ? (
            <View />
          ) : (
            <View style={styles.rectangleContainer}>
              {isLoadingScan ? (
                <ActivityIndicator size="large" color={'grey'} />
              ) : (
                <>
                  <View style={styles.topOverlay} />
                  <View style={styles.overlayContainer}>
                    <View style={styles.leftAndRightOverlay} />

                    <View style={styles.rectangle}>
                      <Animatable.View
                        style={styles.scanBar}
                        direction="alternate-reverse"
                        iterationCount="infinite"
                        duration={1700}
                        easing="linear"
                        animation={makeSlideOutTranslation(
                          'translateY',
                          (Dimensions.get('window').width / 2) * 0.65,
                        )}
                      />
                    </View>

                    <View style={styles.leftAndRightOverlay} />
                  </View>

                  <View style={styles.bottomOverlay} />
                </>
              )}
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: deviceHeight(),
  },
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  backIconContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 27,
    zIndex: 2,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: deviceWidth() * 0.65,
    width: deviceWidth() * 0.65,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  topOverlay: {
    flex: 1,
    height: deviceWidth(),
    width: deviceWidth(),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomOverlay: {
    flex: 1,
    height: deviceWidth(),
    width: deviceWidth(),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: deviceWidth() * 0.25,
  },
  leftAndRightOverlay: {
    height: deviceWidth() * 0.65,
    width: deviceWidth(),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayContainer: {
    flexDirection: 'row',
  },
  titleStyle: {
    marginHorizontal: 100,
    textAlign: 'center',
  },
  scanBar: {
    width: deviceWidth() * 0.65,
    height: deviceWidth() * 0.0025,
    backgroundColor: 'white',
  },
});
