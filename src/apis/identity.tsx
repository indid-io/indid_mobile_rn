import AsyncStorage from '@react-native-community/async-storage';
import {RNUportHDSigner, RNUportSigner} from 'react-native-uport-signer';
import * as nacl from 'tweetnacl-ts/nacl';
// import nacl from '../utils/nacl-fast';
// import naclutil from '../utils/nacl-util';
import {Buffer} from 'buffer';

const DEFAULT_LEVEL = 'simple';

export const resetKey = async (key: string, hd: boolean) => {
  try {
    if (hd) {
      const phrase = await RNUportHDSigner.showSeed(key);
      await RNUportHDSigner.deleteSeed(phrase);
    } else {
      await RNUportSigner.deleteKey(key);
    }
  } catch (e) {
    console.log(e.toString());
  }
};

export const resetAddress = (address: string) => {
  console.log('resetAddress', address);
  const hd = true;
  if (hd) {
    const root = address;
    resetKey(root, true);
  } else {
    resetKey(address, true);
  }
};

export const createSeed = async () => {
  const {address, pubKey} = await RNUportHDSigner.createSeed(DEFAULT_LEVEL);
  const publicKeyHex = Buffer.from(pubKey, 'base64').toString('hex');
  await AsyncStorage.setItem('address', address);
  return {
    hdindex: '0',
    address,
    publicKey: `0x${
      publicKeyHex.slice(0, 2) === '04' ? publicKeyHex : `04${publicKeyHex}`
    }`,
  };
};

export const selectOrCreateSeed = async () => {
  const root = await AsyncStorage.getItem('address');
  if (root) {
    return root;
  }
  const kp = await createSeed();
  console.log(kp);
  return kp.address;
};

export const importSeed = async (phrase: string) => {
  const {address, pubKey} = await RNUportHDSigner.importSeed(
    phrase,
    DEFAULT_LEVEL,
  );
  const publicKey = Buffer.from(pubKey, 'base64').toString('hex');
  await AsyncStorage.setItem('address', address);
  const publicEncKey = await encryptionPublicKey('0', '0');
  return {
    deviceAddress: address,
    hdindex: '0',
    address: `did:ethr:${address}`,
    publicEncKey,
    publicKey,
    own: {name: 'uPort User'},
    securityLevel: DEFAULT_LEVEL,
    network: 'Indid Private Network',
  };
};

export const encryptionKeyPair = async (idIndex: string, actIndex: string) => {
  let rawKey;
  const root = await AsyncStorage.getItem('address');
  rawKey = await RNUportHDSigner.privateKeyForPath(
    root,
    `m/7696500'/${idIndex}'/${actIndex || 0}'/2'`,
    'Create new encryption key',
  );

  // return nacl.box.keyPair.fromSecretKey(naclutil.decodeBase64(rawKey));
  return nacl.box_keyPair_fromSecretKey(await decodeBase64(rawKey));
};

export const encryptionSecretKey = async (
  idIndex: string,
  actIndex: string,
) => {
  const root = await selectOrCreateSeed();
  const rawKey = await RNUportHDSigner.privateKeyForPath(
    root,
    `m/7696500'/${idIndex || 0}'/${actIndex || 0}'/3'`,
    'Create new encryption key',
  );

  return decodeBase64(rawKey);
  // return naclutil.decodeBase64(rawKey);
};

export const encryptionPublicKey = async (
  idIndex: string,
  actIndex: string,
) => {
  const kp = await encryptionKeyPair(idIndex, actIndex);
  console.log(kp);
  return decodeBase64(kp.publicKey);
  // return naclutil.encodeBase64(kp.publicKey);
};

export const createIdentityAddress = async () => {
  const root = await AsyncStorage.getItem('address');
  if (!root) {
    return await createSeed();
  }
  // eslint-disable-next-line radix
  const hdindex = parseInt((await AsyncStorage.getItem('index')) || '0') + 1;
  await AsyncStorage.setItem('index', `${hdindex}`);
  const {address, pubKey} = RNUportHDSigner.addressForPath(
    root,
    `m/7696500'/${hdindex}'/0'/0'`,
    'Create new identity',
  );
  const publicKeyHex = Buffer.from(pubKey, 'base64').toString('hex');

  return {
    hdindex,
    address,
    publicKey: `0x${
      publicKeyHex.slice(0, 2) === '04' ? publicKeyHex : `04${publicKeyHex}`
    }`,
  };
};

export const createSubAccountAddress = async (idIndex: string) => {
  const root = await selectOrCreateSeed();
  await AsyncStorage.setItem('index', `${idIndex || 0}`);
  // const hdindex = yield select(lastAccountIndex, idIndex || 0);
  const hdindex = idIndex || 0;
  const {address, pubKey} = RNUportHDSigner.addressForPath(
    root,
    `m/7696500'/${idIndex || 0}'/${hdindex || 1}'/0'`,
    'Create new account',
  );
  const publicKeyHex = Buffer.from(pubKey, 'base64').toString('hex');
  return {
    hdindex,
    address,
    publicKey: `0x${
      publicKeyHex.slice(0, 2) === '04' ? publicKeyHex : `04${publicKeyHex}`
    }`,
  };
};

export const createRecoveryAddress = async (
  idIndex: string,
  acctIndex: string = '0',
) => {
  const root = await AsyncStorage.getItem('address');
  const {address} = RNUportHDSigner.addressForPath(
    root,
    `m/7696500'/${idIndex || 0}'/${acctIndex}'/1'`,
    'Create new recovery account',
  );
  return address;
};

export const createKeyPair = () => {
  const {address, pubKey} = RNUportSigner.createKeyPair(DEFAULT_LEVEL);
  const publicKeyHex = Buffer.from(pubKey, 'base64').toString('hex');
  return {
    address,
    publicKey: `0x${
      publicKeyHex.slice(0, 2) === '04' ? publicKeyHex : `04${publicKeyHex}`
    }`,
  };
};

export const createAccountDeviceKey = (idAddress: string) => {
  // const idindex = yield select(hdIdentityIndex, idAddress);
  const idindex = idAddress;
  return createSubAccountAddress(idindex);
};

export const createIdentityKeyPair = async (idIndex: any = null) => {
  try {
    AsyncStorage.setItem('identity', '');
    const kp = await createIdentityAddress();
    const publicEncKey = await encryptionPublicKey(
      idIndex === null ? kp.hdindex : idIndex,
      '0',
    );
    const identity: object = {
      deviceAddress: kp.address,
      hdindex: kp.hdindex,
      address: `did:ethr:${kp.address}`,
      publicKey: kp.publicKey,
      publicEncKey,
      own: {name: 'uPort User'},
      securityLevel: DEFAULT_LEVEL,
      network: 'Indid Private Network',
    };
    await AsyncStorage.setItem('identity', JSON.stringify(identity));
    return identity;
  } catch (e) {
    console.log(e);
    // yield put(saveError('keychain', 'Error creating Device Key')); use
  }
};

export const encodeBase64 = async (rawKey: any) => {
  return Buffer.from(rawKey).toString('base64');
};

export const decodeBase64 = async (rawKey: any) => {
  validateBase64(rawKey);
  return new Uint8Array(
    Array.prototype.slice.call(Buffer.from(rawKey, 'base64'), 0),
  );
};

export const validateBase64 = async (s: any) => {
  if (
    !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s)
  ) {
    throw new TypeError('invalid encoding');
  }
};
