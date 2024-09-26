import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');
function MusicPlayer() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.artWorkWrapper}>
          <Image
            source={require('../src/asset/artwork/images/banner3.jpg')}
            style={styles.artWorkImage}
          />
        </View>
        <View>
          <Text style={styles.title}>Song Title</Text>
          <Text style={styles.artist}>Song Artist Name</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#ffd369"
            minimumTrackTintColor="#ffd369"
            maximumTrackTintColor='#ffffff'
            onSlidingComplete={() => {}}
          />
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelText}>0:00</Text>
            <Text style={styles.progressLabelText}>3:55</Text>
          </View>
        </View>
        <View style={styles.musicControls}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="play-skip-back-outline" size={35} color="#ffd369" /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="ios-pause-circle" size={75} color="#ffd369" /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="play-skip-forward-outline" size={35} color="#ffd369" /> 
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderTopColor: '#393E46',
          borderTopColor: '#393e46',
          borderTopWidth: 1,
          width: width,
          alignItems: 'center',
          paddingVertical: 15,
        }}>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomControls}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="heart-outline" size={30} color="#777777" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="repeat" size={30} color="#777777" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="share-outline" size={30} color="#777777" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="ellipsis-horizontal" size={30} color="#777777" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artWorkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,

    /* shadowColor: '#cccccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84, */
  },
  artWorkImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#eeeeee',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#eeeeee',
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#ffffff',
  },
  musicControls: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  bottomContainer: {
    borderTopColor: '#393e46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default MusicPlayer;
