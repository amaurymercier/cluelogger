// Components/ClueItem.js

import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';

import colors from '../helpers/Colors';

const indiceImage = require('../assets/clue.png');

function ClueItem(props) {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const { Clue, navigation } = props;

  return (
    // <FadeIn>
    <View style={styles.main_container}>
      <View style={styles.left_panel}>
        <TouchableOpacity
          onPress={() => navigation.push('ClueDetail', { clueId: props.Clue._id })}
          activeOpacity={0.9}
        >
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={indiceImage}
              onLoadEnd={() => setIsLoadingImage(false)}
            />
          </View>
        </TouchableOpacity>

        {isLoadingImage && (
          <View style={styles.loading_container}>
            <WaveIndicator size={30} color={colors[3]} />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.right_panel}
        onPress={() => navigation.push('ClueDetail', { clueId: props.Clue._id })}
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
    // </FadeIn>
  );
}

const styles = StyleSheet.create({
  main_container: {
    height: 140,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: colors[0],
    borderWidth: 1,
    borderColor: colors[1],
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
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
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
