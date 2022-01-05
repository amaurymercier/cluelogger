// Components/ClueItem.js

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { WaveIndicator } from 'react-native-indicators';

import my_colors from '../helpers/Colors.js';
import moment from 'moment/min/moment-with-locales';

import FadeIn from './FadeIn';

class ClueItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingImage: true,
    };
  }

  _displayClueImage(Image_path) {
    return (
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../assets/indice.png')}
          onLoadEnd={() => this.setState({ isLoadingImage: false })}
        />
      </View>
    );
  }

  _displayLoading() {
    if (this.state.isLoadingImage) {
      return (
        <View style={styles.loading_container}>
          <WaveIndicator size={30} color={my_colors[3]} />
        </View>
      );
    }
  }

  render() {
    const { Clue, displayDetailForClue } = this.props;

    return (
      <FadeIn>
        <View style={styles.main_container}>
          <View style={styles.left_panel}>
            <TouchableOpacity
              onPress={() => displayDetailForClue(Clue._id)}
              activeOpacity={0.9}
            >
              {this._displayClueImage(Clue.image_path)}
            </TouchableOpacity>
            {this._displayLoading()}
          </View>

          <TouchableOpacity
            style={styles.right_panel}
            onPress={() => displayDetailForClue(Clue._id)}
            activeOpacity={0.9}
          >
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text} numberOfLines={2}>
                  {Clue.title}{' '}
                </Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={8}>
                  {Clue.text}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </FadeIn>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 140,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: my_colors[0],
    borderWidth: 1,
    borderColor: my_colors[1],
    padding: 5,
    borderRadius: 10,
  },
  left_panel: {
    flexDirection: 'column',
  },

  image_container: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
  },

  right_panel: {
    flex: 1,
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    //flex: 4,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Avenir',
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  description_container: {
    flex: 7,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
  },
  description_text: {
    color: '#666666',
    fontFamily: 'Avenir',
    textAlign: 'justify',
  },

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 130,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClueItem;
