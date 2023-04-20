import React from 'react';
import {HomeScreen} from './HomeScreen';
import {Text, View} from 'react-native';

const HomeScreenWrapper = () => {
  return (
    <HomeScreen>
      <View>
        <Text>Home Screen</Text>
      </View>
    </HomeScreen>
  );
};

export {HomeScreenWrapper as HomeScreen};
