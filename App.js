import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import MusicPlayer from './component/MusicPlayer';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <MusicPlayer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;