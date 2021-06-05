import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text, Avatar, Icon} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';

export default function CardCredentials(props: any) {
  const Header = () => {
    return (
      <View
        style={[
          styles.topContainer,
          uniStyles.bgPrimary,
          uniStyles.row,
          uniStyles.justifySpaceBetween,
        ]}>
        <View style={[uniStyles.row]}>
          <Avatar
            style={styles.avatar}
            size="medium"
            source={require('../../assets/images/logo-white.png')}
          />
          <View style={uniStyles.column}>
            <Text style={uniStyles.textWhite} category="s2">
              {props.data.subtitle}
            </Text>
            <Text style={uniStyles.textWhite} category="h6">
              {props.data.title}
            </Text>
          </View>
        </View>
        <View style={uniStyles.justifyCenter}>
          <Icon
            fill="#FFF"
            style={styles.iconHeader}
            name="external-link-outline"
          />
        </View>
      </View>
    );
  };

  return (
    <Card
      style={styles.card}
      header={Header}
      onPress={() => console.log('check')}>
      {props.data.content.type === 'text' ? (
        <Text category="p1">{props.data.content.value}</Text>
      ) : props.data.content.type === 'list' ? (
        props.data.content.value.map((data: any, i: number) => (
          <View
            key={i}
            style={[uniStyles.row, styles.itemList, uniStyles.alignCenter]}>
            <Icon
              style={styles.iconList}
              fill="grey"
              name="checkmark-circle-2-outline"
            />
            <Text category="c1">{data}</Text>
          </View>
        ))
      ) : (
        <></>
      )}
      {props.data.note.length !== '' && (
        <Text style={styles.note} appearance="hint" category="c1">
          {props.data.note.toString()}
        </Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingLeft: 15,
    paddingRight: 25,
    paddingVertical: 15,
  },
  card: {
    margin: 2,
  },
  avatar: {
    marginRight: 10,
  },
  iconHeader: {
    width: 25,
    height: 25,
  },
  note: {
    marginTop: 10,
    fontSize: 12,
  },
  iconList: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  itemList: {
    marginVertical: 5,
    textAlignVertical: 'center',
    alignItems: 'center',
  },
});
