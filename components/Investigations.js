import React, { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, View, Text } from 'react-native';

import { PacmanIndicator } from 'react-native-indicators';

import { BarCodeScanner } from 'expo-barcode-scanner';
import colors from '../helpers/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

import allClues from '../knowledgebase/Clues';

function Investigations({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    const focusListener = navigation.addListener('focus', () => {
      setScanned(false);
      setIsFocused(true);
    });
    const blurListener = navigation.addListener('blur', () =>
      setIsFocused(false),
    );
    return () => {
      focusListener.remove();
      blurListener.remove();
    };
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // Ensure clue is loaded in storage
    (async () => {
      const clueId = parseInt(data, 10);
      if (clueId in allClues) {
        const storedClues = await AsyncStorage.getItem('currentClues');
        const loadedClues = JSON.parse(storedClues || '{}');
        if (!(clueId in loadedClues)) {
          loadedClues[clueId] = allClues[clueId];
        }
        loadedClues[clueId].key = Object.keys(loadedClues).length;
        await AsyncStorage.setItem('currentClues', JSON.stringify(loadedClues));
        navigation.jumpTo('Indices trouvés');
      } else {
        console.log(`Invalid clueId: ${clueId}`);
      }
    })();
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (!isFocused) {
    return (
      <View>
        <PacmanIndicator size={60} color={colors[3]} />
      </View>
    );
  }

  return (
    <View style={styles.main_container}>
      <View style={styles.qr_panel}>
        {isLoading ? (
          <View style={styles.loading_container}>
            <PacmanIndicator size={60} color={colors[3]} />
          </View>
        ) : null}
        {hasPermission === null ? (
          <Text>Requesting for camera permission</Text>
        ) : null}
        {hasPermission === false ? (
          <Text>No permission for camera usage.</Text>
        ) : null}
        {hasPermission === true ? (
          <View style={styles.qr_scanner}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={styles.qr_screen}
              barCodeTypes={['qr']}
            />
            {scanned ? (
              <Button
                title="Tap to Scan Again"
                onPress={() => setScanned(false)}
              />
            ) : null}
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  qr_panel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  qr_scanner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  qr_screen: {
    flex: 1,
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

export default Investigations;
