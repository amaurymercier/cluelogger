// Navigation.js

import React from 'react'
import { StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer} from 'react-navigation'





import Investigations from '../Components/Investigations'

import Clues from '../Components/Clues'
import ClueDetail from '../Components/ClueDetail'

import Messages from '../Components/Messages'



import Icon from 'react-native-vector-icons/FontAwesome5'

import my_colors from '../Helpers/MyColors.js'






const InvestigationsStackNavigator = createStackNavigator({
  Investigations: {
    screen: Investigations,
    navigationOptions: {
      title: 'Investigations',
      headerStyle: {
        backgroundColor: my_colors[3],
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: 22,
        fontFamily: "Avenir"
      },
      cardStyle: {
        backgroundColor: '#FFF',
      },
    }
  }
})




const CluesStackNavigator = createStackNavigator({
  Clues: {
    screen: Clues,
    navigationOptions: {
      title: 'Clues',
      headerStyle: {
        backgroundColor: my_colors[3],
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: 22,
        fontFamily: "Avenir"
      },
      cardStyle: {
        backgroundColor: '#FFF',
      },
    }
  },
  ClueDetail: {
    screen: ClueDetail,
    navigationOptions: {
      title: 'Détail',
      headerStyle: {
        backgroundColor: my_colors[3],
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: 22,
        fontFamily: "Avenir"
      },
      cardStyle: {
        backgroundColor: '#FFF',
      },
    }
  }
})




const MessagesStackNavigator = createStackNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: {
      title: 'Messages',
      headerStyle: {
        backgroundColor: my_colors[3],
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: 22,
        fontFamily: "Avenir"
      },
      cardStyle: {
        backgroundColor: '#FFF',
      },
    }
  }
})










const ClueLoggerTabNavigator = createBottomTabNavigator(
  {
    Investigations: {
      screen: InvestigationsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Investigations',
        tabBarIcon: ({tintColor}) => {
          return (<Icon name="search" size={28} color={tintColor} style={styles.icon} />)
        },
      }
    },
    Clues: {
      screen: CluesStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Clues',
        tabBarIcon: ({tintColor}) => {
          return (<Icon name="list-ul" size={28} color={tintColor} style={styles.icon}  />)
        }
      }
    },
    Messages: {
      screen: MessagesStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Messages',
        tabBarIcon: ({tintColor}) => {
          return (<Icon name="comments" solid size={28} color={tintColor} style={styles.icon} />)
        }
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      labelPosition: 'below-icon',
      activeTintColor: my_colors[3],
      inactiveTintColor: '#CCC',
      style: {
        backgroundColor: '#FFF',
        borderTopWidth: 0.5,
        borderTopColor: "transparent"
      },
    },
  }
)



const styles = StyleSheet.create({
  icon: {
    marginTop : 5
  }
})






export default createAppContainer(ClueLoggerTabNavigator)
