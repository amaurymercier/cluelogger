// Components/Clues.js

import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import {PacmanIndicator} from 'react-native-indicators'

import ClueList from './ClueList'

import my_colors from '../Helpers/MyColors.js'


// for testing purposes -> shall be replced with server messages
import my_clues from '../Helpers/MyClues.js'




class Clues extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading : true
    }

  }



  componentDidMount(){
    this.setState({
      clues: my_clues,
      isLoading: false
    })
  }







  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <PacmanIndicator size={60} color={my_colors[3]}/>
        </View>
      )
    }
  }








  render() {

    return (

      <View style={styles.main_container}>

        <ClueList
          Clues = {this.state.clues}
          navigation = {this.props.navigation}
        />

        {this._displayLoading()}
      </View>
    )
  }


}











const styles = StyleSheet.create({
  main_container:{
    flex: 1,
    marginTop: 10
  },





  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})




export default Clues
