import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'

import Investigations from '../components/Investigations';

import Clues from '../components/Clues';
import ClueDetail from '../components/ClueDetail';

import Messages from '../components/Messages';

import Icon from 'react-native-vector-icons/FontAwesome5';

import my_colors from '../helpers/Colors.js';

// const InvestigationsStack = createStackNavigator();


// const InvestigationsStackContainer = (
//   <NavigationContainer>
//     <InvestigationsStack.Navigator>
//       <InvestigationsStack.Screen
//         name="Investigations"
//         component={Investigations}
//         options={
//           {
//             title: 'Investigations',
//             headerStyle: {
//               backgroundColor: my_colors[3],
//             },
//             headerTintColor: '#FFF',
//             headerTitleStyle: {
//               fontSize: 22,
//               fontFamily: 'Avenir',
//             },
//             cardStyle: {
//               backgroundColor: '#FFF',
//             },
//           }
//         }
//       />
//     </InvestigationsStack.Navigator>
//   </NavigationContainer>
// );


const CluesStack = createStackNavigator();

const CluesStackContainer = (
  <NavigationContainer>
    <CluesStack.Navigator>
      <CluesStack.Screen
        name="Clues"
        children={() => <Clues />}
        options={
          {
            title: 'Clues',
            headerStyle: {
              backgroundColor: my_colors[3],
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: 'Avenir',
            },
            cardStyle: {
              backgroundColor: '#FFF',
            },
          }
        }
      />
      <CluesStack.Screen
        name="ClueDetail"
        component={ClueDetail}
        options={
          {
            title: 'Détail',
            headerStyle: {
              backgroundColor: my_colors[3],
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: 'Avenir',
            },
            cardStyle: {
              backgroundColor: '#FFF',
            },
          }
        }
      />
    </CluesStack.Navigator>
  </NavigationContainer>
);


const MessagesStack = createStackNavigator();

const MessagesStackContainer = (
  <NavigationContainer>
    <MessagesStack.Navigator>
      <MessagesStack.Screen 
        name="Messages"
        components={Messages}
        options={
          {
            title: 'Messages',
            headerStyle: {
              backgroundColor: my_colors[3],
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: 'Avenir',
            },
            cardStyle: {
              backgroundColor: '#FFF',
            },
          }
        }
      />
    </MessagesStack.Navigator>
  </NavigationContainer>
);


const ClueLoggerTab = createBottomTabNavigator();

const ClueLoggerTabContainer = (
  <NavigationContainer>
    <ClueLoggerTab.Navigator>
{/*      <ClueLoggerTab.Screen 
        name="Investigations"
        component={InvestigationsStackContainer}
        options={
          {
            tabBarLabel: 'Investigations',
            tabBarIcon: ({ tintColor }) => {
              return (
                <Icon
                  name="search"
                  size={28}
                  color={tintColor}
                  style={styles.icon}
                />
              );
            },
          }
        }
      />*/}
      <ClueLoggerTab.Screen
        name="Clues"
        component={CluesStackContainer}
        options={
          {
            tabBarLabel: 'Clues',
            tabBarIcon: ({ tintColor }) => {
              return (
                <Icon
                  name="list-ul"
                  size={28}
                  color={tintColor}
                  style={styles.icon}
                />
              );
            },
          }
        }
      />
      <ClueLoggerTab.Screen
        name="Messages"
        component={MessagesStackContainer}
        options={
          {
            tabBarLabel: 'Messages',
            tabBarIcon: ({ tintColor }) => {
              return (
                <Icon
                  name="comments"
                  solid
                  size={28}
                  color={tintColor}
                  style={styles.icon}
                />
              );
            },
          }
        }
      />
    </ClueLoggerTab.Navigator>
  </NavigationContainer>
)


// {
//     tabBarOptions: {
//       showLabel: true,
//       showIcon: true,
//       labelPosition: 'below-icon',
//       activeTintColor: my_colors[3],
//       inactiveTintColor: '#CCC',
//       style: {
//         backgroundColor: '#FFF',
//         borderTopWidth: 0.5,
//         borderTopColor: 'transparent',
//       },
//     },
//   },

const styles = StyleSheet.create({
  icon: {
    marginTop: 5,
  },
});

export default function simpleTabContainer() {
  return ClueLoggerTabContainer;
}
