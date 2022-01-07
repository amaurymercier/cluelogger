import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';

import ClueList from './ClueList';

import colors from '../helpers/Colors';

// for testing purposes -> shall be replced with server messages
import basicClues from '../helpers/Clues';

function Clues(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [clues, setClues] = useState({});

  useEffect(() => {
    setClues(basicClues);
    setIsLoading(false);
  });

  return (
    <View style={styles.main_container}>
      <ClueList Clues={clues} navigation={props.navigation} />
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
