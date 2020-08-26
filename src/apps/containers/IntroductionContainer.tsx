import {Container} from 'unstated';

type IntroductionState = {slides: any};

class IntroductionContainer extends Container<IntroductionState> {
  state = {
    slides: [
      {
        key: 1,
        title: 'Take back control',
        text: 'Receive and store important information about yourself.',
        image: require('../../assets/images/introduction-security.png'),
      },
      {
        key: 2,
        title: 'Protect your privacy',
        text:
          'Nobody can see the information you store unless you share it with them.',
        image: require('../../assets/images/introduction-privacy.png'),
      },
      {
        key: 3,
        title: 'Sign up and sign in',
        text: 'Enjoy quick, seamless, and often free access to new services.',
        image: require('../../assets/images/introduction-auth.png'),
      },
    ],
  };

  onDone = (navigation: any) => {
    navigation.push('CreateIdentity');
  };
}

export default IntroductionContainer;
