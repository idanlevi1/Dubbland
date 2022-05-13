import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import RootNavigator from './src/routes/RootNavigator';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#ccc',
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#bbb' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#bbb' }}>
        <RootNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
