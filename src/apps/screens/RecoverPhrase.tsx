import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';

export default function RecoverPhrase({navigation}: {navigation: any}) {
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
              Enter Recovery Phrase
            </Text>
            <Input size="large" placeholder="Recovery Phrase" />
          </Layout>
          <Layout style={styles.content}>
            <Button style={styles.button} status="danger">
              Next
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
