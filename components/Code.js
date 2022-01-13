import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import allClues from '../knowledgebase/Clues';

function Code({ navigation }) {
  const [text, setText] = useState(null);

  const onChangeText = (t) => {
    (async () => {
      const codeKey = `code_${t}`;
      console.log(codeKey);
      if (codeKey in allClues) {
        const storedClues = await AsyncStorage.getItem('currentClues');
        const loadedClues = JSON.parse(storedClues || '{}');
        loadedClues[codeKey] = allClues[codeKey];
        loadedClues[codeKey].key = Object.keys(loadedClues).length;
        await AsyncStorage.setItem('currentClues', JSON.stringify(loadedClues));
        navigation.jumpTo('Indices trouvés');
      }
    })();
    setText(t);
  };

  return (
    <View style={styles.main}>
      <Text>Entrez un code à 4 chiffres ou lettres.</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        textAlign="center"
        placeholder={null}
        maxLength={4}
        autoCapitalize="characters"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Code;
