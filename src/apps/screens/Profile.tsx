import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import {Button, Icon, Avatar, Text, Card} from '@ui-kitten/components';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {uniStyles} from '../../assets/styles/styles';

export default function Profile() {
  const EditIcon = (iconProps: any) => (
    <Icon {...iconProps} fill="#FFF" name="edit" />
  );

  return (
    <>
      <SafeAreaView style={[uniStyles.fullPage, uniStyles.bgRed]}>
        <ScrollView style={uniStyles.bgNetral}>
          <View
            style={[
              styles.header,
              uniStyles.row,
              uniStyles.bgRed,
              uniStyles.justifyEnd,
            ]}>
            <Button
              appearance="ghost"
              status="control"
              accessoryRight={EditIcon}>
              Edit
            </Button>
          </View>
          <View
            style={[
              uniStyles.fullWidth,
              uniStyles.column,
              uniStyles.bgRed,
              uniStyles.alignItemsCenter,
            ]}>
            <Avatar
              style={styles.avatar}
              source={require('../../assets/images/avatar.png')}
            />
            <Text style={[uniStyles.textWhite, styles.username]} category="h4">
              Anonymous
            </Text>
          </View>
          <View style={uniStyles.bgNetral}>
            <View
              style={[uniStyles.fullWidth, uniStyles.bgWhite, uniStyles.row]}>
              <Card
                style={[
                  uniStyles.flex,
                  styles.lessBorder,
                  uniStyles.column,
                  uniStyles.alignItemsCenter,
                  uniStyles.justifyCenter,
                ]}>
                <Icon
                  style={styles.icon}
                  fill="#bdbdbd"
                  name="checkmark-circle-outline"
                />
                <Text
                  style={uniStyles.textAlignCenter}
                  appearance="hint"
                  category="c1">
                  0 Credentials
                </Text>
              </Card>
              <Card
                style={[
                  uniStyles.flex,
                  styles.lessBorder,
                  uniStyles.column,
                  uniStyles.alignItemsCenter,
                  uniStyles.justifyCenter,
                ]}>
                <View>
                  <MaterialIcon
                    style={styles.icon}
                    name="qrcode"
                    size={30}
                    color="#bdbdbd"
                  />
                  <Text
                    style={uniStyles.textAlignCenter}
                    appearance="hint"
                    category="c1">
                    QR Code
                  </Text>
                </View>
              </Card>
              <Card
                style={[
                  uniStyles.flex,
                  styles.lessBorder,
                  uniStyles.column,
                  uniStyles.alignItemsCenter,
                  uniStyles.justifyCenter,
                ]}>
                <Icon style={styles.icon} fill="#bdbdbd" name="share" />
                <Text
                  style={uniStyles.textAlignCenter}
                  appearance="hint"
                  category="c1">
                  Share
                </Text>
              </Card>
            </View>
            <View style={styles.container}>
              <Text category="s2">Personal</Text>
            </View>
            <View
              style={[styles.container, uniStyles.bgWhite, uniStyles.column]}>
              <View style={styles.form}>
                <Text category="c2" appearance="hint">
                  Name
                </Text>
                <Text style={styles.valueText} category="s1">
                  Anonymous
                </Text>
              </View>
              <View style={styles.form}>
                <Text category="c2" appearance="hint">
                  Email
                </Text>
                <Text style={styles.valueText} category="s1">
                  hacker@hack.com
                </Text>
              </View>
              <View style={styles.form}>
                <Text category="c2" appearance="hint">
                  Country
                </Text>
                <Text style={styles.valueText} category="s1">
                  Indonesian
                </Text>
              </View>
              <View style={styles.form}>
                <Text category="c2" appearance="hint">
                  Phone
                </Text>
                <Text style={styles.valueText} category="s1">
                  0811108111
                </Text>
              </View>
            </View>
          </View>
          <View style={uniStyles.safeBottomArea} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  icon: {width: 30, height: 30, alignSelf: 'center'},
  header: {
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 10,
  },
  avatar: {height: 200, width: 200},
  username: {
    marginVertical: 15,
  },
  lessBorder: {
    borderRadius: 0,
    borderWidth: 0,
  },
  valueText: {
    marginVertical: 5,
  },
  form: {
    marginVertical: 5,
  },
});
