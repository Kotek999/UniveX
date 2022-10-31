import * as React from 'react';
import { Text } from 'react-native';
//@ts-ignore
import auth from '@react-native-firebase/auth';

function Auth() {
  const user = auth().currentUser;

  return <Text>Welcome {user.email}</Text>;
}

export default Auth;