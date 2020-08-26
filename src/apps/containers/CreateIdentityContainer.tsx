import {Container} from 'unstated';
import {createIdentityKeyPair} from '../../apis/identity';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';

type IdentityState = {
  username: string;
  terms: boolean;
  policy: boolean;
  error: string;
};

class CreateIdentityContainer extends Container<IdentityState> {
  state = {
    username: '',
    error: '',
    terms: false,
    policy: false,
  };

  clearError = () => {
    this.setState({
      error: '',
    });
  };

  onNameChange = (value: string) => {
    this.setState({
      username: value,
    });
  };

  onTermsOrPolicyClicked = (type: string) => {
    this.setState((prevstate) => ({
      terms: type === 'terms' ? !prevstate.terms : prevstate.terms,
      policy: type === 'policy' ? !prevstate.policy : prevstate.policy,
    }));
  };

  onCreateIdentityClicked = async (navigation: any) => {
    try {
      const letters = /^[A-Za-z]+$/;
      if (
        this.state.username.length > 0 &&
        this.state.username.match(letters)
      ) {
        const lala = await createIdentityKeyPair();
        AsyncStorage.setItem('introduction', 'done');

        const pushAction = StackActions.push('Landing');
        navigation.dispatch(pushAction);

        console.log(lala);
      } else if (!this.state.username.match(letters)) {
        this.setState({
          error: 'Name must be alphabet',
        });
      } else {
        this.setState({
          error: "Name can't be null",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export default CreateIdentityContainer;
