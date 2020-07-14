// Components/ClueList.js

import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ClueItem from './ClueItem';

class ClueList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        style={style.list}
        data={this.props.Clues}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <ClueItem Clue={item} />}
        onEndReachedThreshold={0.25}
        onEndReached={() => {
          console.log('je suis arrive en bas de la liste de Clues');
        }}
      />
    );
  }
}

const style = StyleSheet.create({
  list: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ClueList;
