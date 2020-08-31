import {Container} from 'unstated';
type CredentialsState = {credentials: any};

class CredentialsContainer extends Container<CredentialsState> {
  state = {
    credentials: [
      {
        title: 'Visit Indid.io',
        subtitle: 'Get your first credential',
        note: '',
        content: {
          type: 'list',
          value: [
            'Discover how to manage your data with Indid',
            'Connect with services and build network that you fully control',
            'Request, receive, and share information about yourself',
          ],
        },
      },
      {
        title: 'Kantor Pelayanan Pajak',
        subtitle: 'Customer registration',
        note:
          'This is an invite-only pilot. You have to an invite code to continue.',
        content: {
          type: 'text',
          value:
            'Verify yourself to get one-click access to financial services',
        },
      },
    ],
  };

  onDone = (navigation: any) => {
    navigation.push('CreateIdentity');
  };
}

export default CredentialsContainer;
