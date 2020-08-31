import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import {
  Input,
  Layout,
  Text,
  Avatar,
  CheckBox,
  Divider,
  Button,
  Icon,
  Tooltip,
} from '@ui-kitten/components';
import {Subscribe} from 'unstated';
import CreateIdentityContainer from '../containers/CreateIdentityContainer';
import AppBar from '../components/AppBar';
import {uniStyles} from '../../assets/styles/styles';

export default function CreateIdentity({navigation}: {navigation: any}) {
  const renderCreateButton = () => (
    <Subscribe to={[CreateIdentityContainer]}>
      {(identity: CreateIdentityContainer) => (
        <Input
          placeholder="Enter your name"
          value={identity.state.username}
          onChangeText={(nextValue) => identity.onNameChange(nextValue)}
        />
      )}
    </Subscribe>
  );

  const LinkedIcon = (_props: any) => (
    <Icon {..._props} name="arrow-forward-outline" />
  );

  return (
    <>
      <SafeAreaView style={uniStyles.bgWhite}>
        <AppBar navigation={navigation} />
        <ScrollView>
          <View style={uniStyles.fullPageScroll}>
            <Subscribe to={[CreateIdentityContainer]}>
              {(identity: CreateIdentityContainer) => (
                <>
                  <Layout style={styles.container}>
                    <Text category="h4">Personalize INDID</Text>
                    <Text style={styles.subcontent}>
                      Add your name and optional photo
                    </Text>
                    <Avatar
                      style={styles.avatar}
                      source={require('../../assets/images/avatar.png')}
                    />
                    <Button
                      style={styles.btnUpload}
                      appearance="ghost"
                      status="danger">
                      Upload photo
                    </Button>
                    <Tooltip
                      anchor={renderCreateButton}
                      visible={identity.state.error.length > 0}
                      onBackdropPress={() => identity.clearError()}>
                      {identity.state.error}
                    </Tooltip>
                    <Text style={styles.greyText}>
                      You can always change this information later
                    </Text>
                  </Layout>
                  <Layout style={styles.termsConditions}>
                    <View style={styles.rowCustom}>
                      <CheckBox
                        style={styles.checkbox}
                        checked={identity.state.terms}
                        onChange={(_) =>
                          identity.onTermsOrPolicyClicked('terms')
                        }
                        status="danger">
                        Accept terms and conditions
                      </CheckBox>
                      <Button
                        style={styles.mr50}
                        appearance="ghost"
                        status="basic"
                        accessoryLeft={LinkedIcon}
                      />
                    </View>
                    <Divider />
                    <View style={styles.rowCustom}>
                      <CheckBox
                        style={styles.checkbox}
                        checked={identity.state.policy}
                        onChange={(_) =>
                          identity.onTermsOrPolicyClicked('policy')
                        }
                        status="danger">
                        Accept privacy policy
                      </CheckBox>
                      <Button
                        style={styles.mr50}
                        appearance="ghost"
                        status="basic"
                        accessoryLeft={LinkedIcon}
                      />
                    </View>
                    <Button
                      style={styles.btnCreate}
                      appearance="filled"
                      disabled={
                        !(identity.state.terms && identity.state.policy)
                      }
                      onPress={() =>
                        identity.onCreateIdentityClicked(navigation)
                      }
                      status="danger">
                      Create Identity
                    </Button>
                  </Layout>
                </>
              )}
            </Subscribe>
          </View>
          <View style={uniStyles.safeBottomArea} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  termsConditions: {
    marginTop: 30,
    flexDirection: 'column',
  },
  rowCustom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {marginRight: 5, marginLeft: 50, marginTop: 10, marginBottom: 10},
  subcontent: {fontSize: 13, fontWeight: '300', marginTop: 8},
  greyText: {color: 'grey', fontSize: 13, fontWeight: '300', marginTop: 10},
  avatar: {width: 150, height: 150, marginTop: 30, marginBottom: 20},
  mr50: {marginRight: '9%'},
  btnCreate: {
    width: '86%',
    marginTop: 30,
    marginHorizontal: '7%',
  },
  btnUpload: {
    width: '80%',
    color: '#f23a2e',
    marginBottom: 30,
  },
  he30: {
    marginBottom: 30,
  },
});
