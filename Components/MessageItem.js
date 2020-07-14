// Components/Messages.js

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import my_colors from '../Helpers/MyColors.js';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.message_type == 'received') {
      return (
        <View style={[styles.message, styles.message_received]}>
          <Text style={[styles.message_text, styles.message_text_received]}>
            {this.props.text}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.message, styles.message_sent]}>
          <Text style={[styles.message_text, styles.message_text_sent]}>
            {this.props.text}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: my_colors[2],
    borderRadius: 20,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  message_sent: {
    backgroundColor: my_colors[3],
    marginLeft: 50,
  },
  message_received: {
    backgroundColor: '#EEE',
    marginRight: 50,
  },

  message_text: {
    fontFamily: 'Avenir',
    fontSize: 16,
  },
  message_text_sent: {
    color: 'white',
  },
  message_text_received: {
    color: my_colors[4],
  },
});

export default MessageItem;
