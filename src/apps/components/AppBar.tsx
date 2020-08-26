import React from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {uniStyles} from '../../assets/styles/styles';

export default function AppBar(props: any) {
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => {
        props.navigation.goBack();
      }}
      icon={BackIcon}
    />
  );

  const BackIcon = (propsNav: any) => (
    <Icon
      {...propsNav}
      // style={props.theme === 'red' ? uniStyles.textWhite : {}}
      name="arrow-back"
    />
  );

  return (
    <TopNavigation
      style={props.theme === 'red' ? uniStyles.bgRed : {}}
      accessoryLeft={props.leading === 'non-active' ? undefined : BackAction}
      title={props.title}
    />
  );
}
