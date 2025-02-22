import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Subscribe} from 'unstated';
import {Layout, Text} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';
import CardCredentials from '../components/CardCredentials';
import CredentialsContainer from '../containers/CredentialsContainer';

export default function Credentials() {
  return (
    <>
      <SafeAreaView style={[uniStyles.fullPage, uniStyles.bgWhite]}>
        <ScrollView>
          <Layout style={styles.header}>
            <Text category="h4">Credentials</Text>
          </Layout>
          <Subscribe to={[CredentialsContainer]}>
            {(credentialsContainer: CredentialsContainer) => (
              <>
                <Layout
                  style={[
                    uniStyles.fullPage,
                    uniStyles.bgNetral,
                    styles.container,
                    uniStyles.column,
                  ]}>
                  {credentialsContainer.state.credentials.map(
                    (item: object, i: number) => (
                      <CardCredentials key={i} data={item} />
                    ),
                  )}
                </Layout>
              </>
            )}
          </Subscribe>
          <View style={uniStyles.safeBottomArea} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
});
