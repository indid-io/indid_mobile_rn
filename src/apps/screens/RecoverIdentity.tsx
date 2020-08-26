import React from 'react';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';

export default function RecoverIdentity({navigation}: {navigation: any}) {
  return (
    <>
      <SafeAreaView style={[uniStyles.fullPage, uniStyles.bgWhite]}>
        {/* <AppBar navigation={navigation} theme="white" /> */}
        <Layout
          style={[
            uniStyles.fullPage,
            uniStyles.bgWhite,
            styles.container,
            uniStyles.column,
          ]}>
          <Layout style={styles.content}>
            <Text style={styles.header} category="h4">
              Recover Identity
            </Text>
            <Image
              style={styles.image}
              source={require('../../assets/images/recover-identity.png')}
            />
            <Text style={styles.desc} category="p1">
              To recover your account you will need to enter your 12-word
              Recovery Seed Phrase in the order you received them.
            </Text>
          </Layout>
          <Layout style={styles.content}>
            <Button
              onPress={() => navigation.push('RecoverPhrase')}
              style={styles.button}
              status="danger">
              Continue
            </Button>
            <Button
              onPress={() => navigation.goBack()}
              style={styles.button}
              appearance="outline"
              status="danger">
              Cancel
            </Button>
          </Layout>
        </Layout>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  desc: {
    lineHeight: 25,
    textAlign: 'center',
  },
  button: {
    width: '90%',
    marginBottom: 7,
  },
});
