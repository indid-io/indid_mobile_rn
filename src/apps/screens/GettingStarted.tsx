import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';
// import AsyncStorage from '@react-native-community/async-storage';

function GettingStarted({navigation}: {navigation: any}) {
  return (
    <>
      {/* {(await AsyncStorage.getItem('introduction')) === 'done' ? (
        navigation.navigate('CreateIdentity')
      ) : ( */}
      <Layout style={[uniStyles.fullPage, uniStyles.bgRed]}>
        <ImageBackground
          source={require('../../assets/images/fingerprint-white.png')}
          style={[styles.background, uniStyles.fullPage]}
        />
        <View style={[styles.container, uniStyles.fullPage]}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo-white.png')}
          />
          <Text style={styles.text} category="s1">
            Get started by creating a new identity
          </Text>
          <View style={styles.he60} />
          <Button
            onPress={() => {
              navigation.push('Introduction');
            }}
            status="basic"
            style={styles.button}>
            Getting Started
          </Button>
          <View style={styles.he5} />
          <Button
            onPress={() => {
              navigation.push('RecoverIdentity');
            }}
            status="basic"
            appearance="ghost"
            style={styles.button}>
            {(evaProps) => (
              <Text {...evaProps} style={styles.text} category="s1">
                Recover Identity
              </Text>
            )}
          </Button>
        </View>
      </Layout>
      {/* )} */}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    opacity: 0.035,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  text: {
    color: '#FFF',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 120,
  },
  button: {
    width: (Dimensions.get('window').width / 3) * 2,
  },
  he60: {height: 60},
  he5: {height: 5},
});

export default GettingStarted;
