import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';

export default function Notifications() {
  return (
    <>
      <SafeAreaView style={[uniStyles.fullPage, uniStyles.bgWhite]}>
        <Layout style={styles.header}>
          <Text category="h4">Notifications</Text>
        </Layout>
        <ScrollView>
          {/* <Subscribe to={[CredentialsContainer]}>
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
          </Subscribe> */}
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
