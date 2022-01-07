import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ClueItem from './ClueItem';

function ClueList(props) {
  return (
    <FlatList
      style={style.list}
      data={props.Clues}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <ClueItem Clue={item} navigation={props.navigation} />
      )}
      onEndReachedThreshold={0.25}
    />
  );
}

const style = StyleSheet.create({
  list: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ClueList;
