import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {Text, Card, Icon} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';
// import AppBar from '../components/AppBar';
// {navigation}: {navigation: any}
export default function Settings() {
  const IconArrow = (iconProps: any) => (
    <Icon style={styles.icon} fill="#8F9BB3" name={iconProps.name} />
  );
  return (
    <>
      <SafeAreaView style={[uniStyles.fullPage, uniStyles.bgNetral]}>
        <ScrollView>
          <View style={[styles.header, uniStyles.bgNetral]}>
            <Text category="h4">Settings</Text>
          </View>
          <View style={styles.pv8}>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Version</Text>
                <Text category="c1">0.0.1 (dev)</Text>
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Indid ID</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Try Indid</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Support</Text>
                <IconArrow name="link-outline" />
              </View>
            </Card>
          </View>
          <View style={styles.pv8}>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Account Back Up</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Account Recovery</Text>
                <View style={[uniStyles.row, uniStyles.alignItemsCenter]}>
                  <Text
                    style={styles.pr8}
                    status="danger"
                    category="c1"
                    appearance="danger">
                    Account At Risk
                  </Text>
                  <IconArrow name="arrow-ios-forward-outline" />
                </View>
              </View>
            </Card>
          </View>
          <View style={styles.pv8}>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Device</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Identity Hub Status</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">System Messages</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Network</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
          </View>
          <View style={styles.pv8}>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Privacy Policy</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
            <Card style={styles.cardMenu}>
              <View
                style={[
                  uniStyles.row,
                  uniStyles.justifySpaceBetween,
                  uniStyles.alignItemsCenter,
                ]}>
                <Text category="s2">Terms & Conditions</Text>
                <IconArrow name="arrow-ios-forward-outline" />
              </View>
            </Card>
          </View>
          <View style={uniStyles.safeBottomArea} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  cardMenu: {
    marginLeft: 20,
    borderWidth: 0,
    borderBottomWidth: 0.5,
  },
  icon: {width: 22, height: 22},
  pv8: {
    paddingVertical: 5,
  },
  pr8: {paddingRight: 8},
});
