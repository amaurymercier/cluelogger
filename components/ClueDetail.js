// Components/ClueDetail.js

import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import moment from 'moment/min/moment-with-locales';
import { PacmanIndicator, WaveIndicator } from 'react-native-indicators';

import colors from '../helpers/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const indiceImage = require('../assets/indice.png');

function adaptDatabaseText(text) {
  let adaptedText = '';
  if (text !== undefined) {
    adaptedText = text.replace(/\\n/g, '\n');
  }
  return adaptedText;
}

function Clue(props) {
  return (
    <View style={styles.top_container}>
      <View style={styles.white_top}>
        <View style={styles.title_container}>
          <Text style={styles.title_text} numberOfLines={2}>
            {props.clue.title}{' '}
          </Text>
        </View>
        <View style={styles.icon_bar}>
          <Text style={styles.date_text}>
            {moment(props.clue.date).format('LL')}
          </Text>
        </View>
      </View>
    </View>
  );
}

function ClueDetail({ route, navigation }) {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [clue, setClue] = useState([]);

  // const clueId = route.params.clueId;

  useEffect(() => {
    // getClueWithIdFromApi(props.navigation.state.params.idClue).then( (data) => {
    (async () => {
      const storedClues = await AsyncStorage.getItem('currentClues');
      const loadedClues = JSON.parse(storedClues || '{}');
      if (route.params.clueId in loadedClues) {
        setClue(loadedClues[route.params.clueId]);
      } else {
        setClue({
          _id: -1,
          title: 'Indice introuvable.',
          text: 'Impossible de charger cet indice.',
          image_path: 'indice.png',
        });
      }
      setIsLoading(false);
    })();
  }, [route.params.clueId]);

  return (
    <ScrollView style={styles.main_container} stickyHeaderIndices={[1]}>
      <View style={styles.top_image}>
        <Image
          style={styles.image}
          source={indiceImage}
          onLoadEnd={() => setIsLoadingImage(false)}
        />
        {isLoadingImage && (
          <View style={styles.loading_image_container}>
            <WaveIndicator size={30} color={colors[3]} />
          </View>
        )}
      </View>

      {Clue({ clue })}

      <View style={styles.description_container}>
        <Text style={styles.description_text}>
          {adaptDatabaseText(clue.text)}
        </Text>
      </View>

      {isLoading && (
        <View style={styles.loading_container}>
          <PacmanIndicator size={60} color={colors[3]} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginBottom: 10,
  },

  top_image: {
    height: 200,
    width: Dimensions.get('window').width,
    backgroundColor: '#EEE',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
  },

  top_container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  white_top: {
    backgroundColor: 'white',
    paddingTop: 20,
  },

  bottom_gradient: {
    height: 30,
  },

  title_container: {
    marginTop: 10,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'Roboto',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginBottom: 15,
  },

  icon_bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },

  date_text: {
    textAlign: 'right',
    justifyContent: 'center',
    fontSize: 14,
    marginLeft: 50,
  },

  description_container: {
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    paddingBottom: 20,
  },

  description_text: {
    color: '#666666',
    fontFamily: 'Roboto',
    textAlign: 'justify',
    fontSize: 15,
    lineHeight: 25,
  },

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loading_image_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClueDetail;
