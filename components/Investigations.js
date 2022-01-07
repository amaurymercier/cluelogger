import React, { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, View, Text } from 'react-native';

import { PacmanIndicator } from 'react-native-indicators';

import { BarCodeScanner } from 'expo-barcode-scanner';
import colors from '../helpers/Colors';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

function Investigations() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  console.log(hasPermission);
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
