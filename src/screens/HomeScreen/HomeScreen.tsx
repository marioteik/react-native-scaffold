import {Text} from 'react-native';
import React, {FC} from 'react';
import {useGlobalContext} from '@context/global/global.context';

type HomeScreenProps = {
  children: React.ReactNode;
};

const HomeScreen: FC<HomeScreenProps> = () => {
  const {user} = useGlobalContext();

  console.log(user);

  return <Text>Home Screen</Text>;
};

export {HomeScreen};
