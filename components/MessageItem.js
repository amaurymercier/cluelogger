import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../helpers/Colors';

function MessageItem(props) {
  if (props.message_type === 'received') {
    return (
      <View style={[styles.message, styles.message_received]}>
        <Text style={[styles.message_text, styles.message_text_received]}>
          {props.text}
        </Text>
      </View>
    );
  }
  return (
    <View style={[styles.message, styles.message_sent]}>
      <Text style={[styles.message_text, styles.message_text_sent]}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: colors[2],
    borderRadius: 20,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  message_sent: {
    backgroundColor: colors[3],
    marginLeft: 50,
  },
  message_received: {
    backgroundColor: '#EEE',
    marginRight: 50,
  },

  message_text: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  message_text_sent: {
    color: 'white',
  },
  message_text_received: {
    color: colors[4],
  },
});

export default MessageItem;
