import React from 'react';
import {Text, Icon} from '@ui-kitten/components';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {uniStyles} from '../../assets/styles/styles';
import {Subscribe} from 'unstated';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroductionContainer from '../containers/IntroductionContainer';
import AppBar from '../components/AppBar';
import {Colors} from '../../utils/Colors';

const _renderItem = ({item}: {item: any}) => {
  return (
    <View style={[uniStyles.fullPage, uniStyles.bgWhite, styles.content]}>
      <Image style={styles.image} source={item.image} />
      <Text category="h3">{item.title}</Text>
      <Text category="p2" style={styles.desc}>
        {item.text}
      </Text>
    </View>
  );
};

const _renderNextButton = () => {
  return (
    <Icon style={styles.icon} fill="#8F9BB3" name="arrow-forward-outline" />
  );
};
const _renderDoneButton = () => {
  return (
    <Icon
      style={styles.icon}
      fill={Colors.RED}
      name="checkmark-circle-outline"
    />
  );
};

export default function Introduction({navigation}: {navigation: any}) {
  return (
    <>
      <SafeAreaView style={[uniStyles.fullPage, uniStyles.bgWhite]}>
        <AppBar navigation={navigation} theme="white" />
        <Subscribe to={[IntroductionContainer]}>
          {(intro: IntroductionContainer) => (
            <>
              <AppIntroSlider
                renderItem={_renderItem}
                data={intro.state.slides}
                onDone={() => intro.onDone(navigation)}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
              />
            </>
          )}
        </Subscribe>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    marginHorizontal: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  desc: {
    marginTop: 25,
    fontSize: 18,
    textAlign: 'center',
  },
  iconNext: {
    fontSize: 50,
  },
  dotStyle: {
    backgroundColor: '#BDBDBD',
  },
  activeDotStyle: {
    backgroundColor: Colors.RED,
  },
});
