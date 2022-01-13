import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ClueList from './ClueList';

import colors from '../helpers/Colors';

function Clues({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [clues, setClues] = useState({});

  async function fetchClues() {
    try {
      const storedClues = await AsyncStorage.getItem('currentClues');
      const loadedClues = JSON.parse(storedClues || '{}');
      setClues(loadedClues);
      setIsLoading(false);
    } catch (e) {
      console.log('Error while fetching local clues.');
    }
  }

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const focusListener = navigation.addListener(
      'focus',
      () => {
        (async () => {
          await fetchClues();
        })();
      },
      [navigation],
    );
    return () => {
      focusListener.remove();
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // { 3: { _id: 3, title: '...', ...}}
        const storedClues = await AsyncStorage.getItem('currentClues');
        const loadedClues = JSON.parse(storedClues || '{}');
        setClues(loadedClues);
        setIsLoading(false);
      } catch (e) {
        console.log('Error while fetching local clues.');
      }
    })();
  }, []);

  return (
    <View style={styles.main_container}>
      <ClueList Clues={Object.values(clues)} navigation={navigation} />
      {isLoading && (
        <View style={styles.loading_container}>
          <PacmanIndicator size={60} color={colors[3]} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 10,
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
});

export default Clues;
