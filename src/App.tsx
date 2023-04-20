import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {HomeScreen} from './screens/HomeScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

  return (
    <NativeRouter>
      <SafeAreaView className={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}

export default App;
