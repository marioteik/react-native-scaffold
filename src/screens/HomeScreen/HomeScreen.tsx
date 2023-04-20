import {Text} from 'react-native';
import React, {FC} from 'react';

type HomeScreenProps = {
  children: React.ReactNode;
};

const HomeScreen: FC<HomeScreenProps> = () => {
  return <Text>Home Screen</Text>;
};

export {HomeScreen};
