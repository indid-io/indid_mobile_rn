import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';
// import AppBar from '../components/AppBar';
// {navigation}: {navigation: any}
export default function Settings() {
  return (
    <>
      <SafeAreaView style={[uniStyles.fullPage, uniStyles.bgWhite]}>
        <Layout style={styles.header}>
          <Text category="h4">Credentials</Text>
        </Layout>
        {/* <Layout
          style={[
            uniStyles.fullPage,
            uniStyles.bgWhite,
            styles.container,
            uniStyles.column,
          ]}></Layout> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: '#f23a2e',
  },
});
