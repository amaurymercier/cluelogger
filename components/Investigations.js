import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { PacmanIndicator } from 'react-native-indicators';

import colors from '../helpers/Colors';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

function Investigations() {
  const [isLoading, setIsLoading] = useState(true);
  const [switchValue, setSwitchValue] = useState(false);
  const [codeText, setCodeText] = useState('');

  useEffect(() => {
    setIsLoading(false);
  });


}

class _Investigations extends React.Component {
  constructor(props) {
    super(props);
    (this.codeText = ''),
      (this.state = {
        isLoading: true,
        switchValue: false,
      });
  }

  _codeTextChanged(text) {
    this.codeText = text;
  }

  testCode() {
    if (this.codeText !== '') {
      Alert.alert(
        'Oups 🧐',
        'Le code ne correspond à aucun indice... ',
        [{ text: 'Damn !' }],
        { cancelable: false },
      );
    }
  }

  toggleSwitch = (value) => {
    if (!value) {
      Alert.alert('📸', 'Lecteur de QR code coupé', [{ text: 'Okay' }], {
        cancelable: false,
      });
    }
    this.setState({ switchValue: value });
  };

  _displayQRReader() {
    if (this.state.switchValue) {
      return <BarCodeScanner />;
    }
  }

  didScanQrCode = (e) => {
    Alert.alert(
      'Yeay 🎯',
      'Un QR code a été scané :D ',
      [
        {
          text: 'Top !',
          onPress: () => this.scanner.reactivate(),
        },
      ],
      { cancelable: false },
    );
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
  };

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <PacmanIndicator size={60} color={colors[3]} />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.search_panel}>
          <View style={styles.search_bar}>
            <TextInput
              style={styles.search_input}
              placeholder="Tester un code..."
              placeholderTextColor="#CCC"
              onChangeText={(text) => this._codeTextChanged(text)}
              onSubmitEditing={() => this.testCode()}
              clearButtonMode="always"
              clearButtonColor="#CCC"
              tintColor="red"
            />
            <TouchableOpacity
              style={styles.search_button}
              onPress={() => this.testCode()}
            >
              <Icon name="question" size={25} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.qr_panel}>
          <View style={styles.qr_scanner_side}>
            <View style={styles.qr_scanner}>{this._displayQRReader()}</View>
          </View>

          <View style={styles.qr_switch_side}>
            <Switch
              style={styles.switch}
              onValueChange={this.toggleSwitch}
              value={this.state.switchValue}
              trackColor={{ false: '#CCC', true: colors[2] }}
              thumbColor={'white'}
            />
          </View>
        </View>

        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 10,
  },

  search_panel: {
    height: DEVICE_HEIGHT / 4,
    justifyContent: 'flex-end',
  },
  search_bar: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  search_input: {
    marginLeft: 5,
    marginRight: 25,
    paddingLeft: 20,
    height: 50,
    borderColor: colors[2],
    borderWidth: 1,
    borderRadius: 100,
    color: '#666',
    flex: 0.6,
    fontSize: 16,
  },
  search_button: {
    backgroundColor: colors[2],
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  qr_panel: {
    height: DEVICE_HEIGHT / 2,
    // backgroundColor: colors[0],
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  qr_scanner_side: {
    width: DEVICE_WIDTH - 80,
    paddingLeft: DEVICE_WIDTH / 2 - 100,
  },
  qr_scanner: {
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors[4],
    backgroundColor: 'lightgrey',
  },

  qr_switch_side: {
    width: 80,
  },

  switch: {
    transform: [{ rotate: '90deg' }, { scaleX: 0.8 }, { scaleY: 0.8 }],
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
