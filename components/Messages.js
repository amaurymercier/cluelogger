import React, {useState} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import MessageItem from './MessageItem';

import colors from '../helpers/Colors';

// for testing purposes -> shall be replced with server messages
import messages from '../helpers/Messages';

// function Messages(props) {
//   let messageText = '';
//   let keyboard
//   [conversation, setConversation] = useState([]);
//
//
// }

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.messageText = '';

    this.state = {
      conversation: [],
    };

    this.keyboardHeight = new Animated.Value(0);
  }

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );

    this.setState({
      conversation: messages,
    });
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      toValue: event.endCoordinates.height,
      useNativeDriver: false,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.keyboardHeight, {
      duration: 100,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  _messageTextChanged(text) {
    this.messageText = text;
  }

  sendMessage() {
    if (this.messageText !== '') {
      Alert.alert('🚀', 'Message envoyé !', [{ text: 'Bien' }], {
        cancelable: false,
      });
    }
  }

  render() {
    return (
      <Animated.View style={{ flex: 1, paddingBottom: this.keyboardHeight }}>
        <View style={styles.main_container}>
          <View style={styles.messages_container}>
            <FlatList
              data={this.state.conversation}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <MessageItem text={item.text} message_type={item.type} />
              )}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.5}
              onEndReached={() => {}}
            />
          </View>

          <View style={styles.writing_container}>
            <TextInput
              style={styles.message_input}
              placeholder="Message..."
              placeholderTextColor="#CCC"
              onChangeText={(text) => this._messageTextChanged(text)}
              onSubmitEditing={() => this.sendMessage()}
              clearButtonMode="always"
              clearButtonColor="#CCC"
            />
            <TouchableOpacity
              style={styles.send_button}
              onPress={() => this.sendMessage()}
            >
              <Icon name="feather" solid size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    margin: 10,
    marginBottom: 0,
    justifyContent: 'flex-end',
  },

  messages_container: {
    flex: 1,
  },

  writing_container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  message_input: {
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 20,
    height: 50,
    borderColor: colors[2],
    borderWidth: 1,
    borderRadius: 100,
    color: '#666',
    flex: 0.95,
    fontSize: 16,
  },
  send_button: {
    backgroundColor: colors[2],
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Messages;
