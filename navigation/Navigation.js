import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Clues from '../components/Clues';
import ClueDetail from '../components/ClueDetail';
import Investigations from '../components/Investigations';

import Messages from '../components/Messages';

import colors from '../helpers/Colors';

// {
//     tabBarOptions: {
//       showLabel: true,
//       showIcon: true,
//       labelPosition: 'below-icon',
//       activeTintColor: colors[3],
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

function CluesStackNavigator() {
  const CluesStack = createStackNavigator();

  return (
    <CluesStack.Navigator>
      <CluesStack.Screen
        name="Clues"
        component={Clues}
        options={{
          title: 'Clues',
          headerStyle: {
            backgroundColor: colors[3],
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Roboto',
          },
          cardStyle: {
            backgroundColor: '#FFF',
          },
        }}
      />
      <CluesStack.Screen
        name="ClueDetail"
        component={ClueDetail}
        options={{
          title: 'Détail',
          headerStyle: {
            backgroundColor: colors[3],
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Roboto',
          },
          cardStyle: {
            backgroundColor: '#FFF',
          },
        }}
      />
    </CluesStack.Navigator>
  );
}

export default function simpleTabContainer() {
  // const InvestigationsStack = createStackNavigator();
  //
  // const InvestigationsStackContainer = (
  //   <NavigationContainer>
  //     <InvestigationsStack.Navigator>
  //       <InvestigationsStack.Screen
  //         name="Investigations"
  //         component={Investigations}
  //         options={{
  //           title: 'Investigations',
  //           headerStyle: {
  //             backgroundColor: colors[3],
  //           },
  //           headerTintColor: '#FFF',
  //           headerTitleStyle: {
  //             fontSize: 22,
  //             fontFamily: 'Roboto',
  //           },
  //           cardStyle: {
  //             backgroundColor: '#FFF',
  //           },
  //         }}
  //       />
  //     </InvestigationsStack.Navigator>
  //   </NavigationContainer>
  // );

  const MessagesStack = createStackNavigator();

  const MessagesStackContainer = (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="Messages"
        components={Messages}
        options={{
          title: 'Messages',
          headerStyle: {
            backgroundColor: colors[3],
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Roboto',
          },
          cardStyle: {
            backgroundColor: '#FFF',
          },
        }}
      />
    </MessagesStack.Navigator>
  );

  const ClueLoggerTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <ClueLoggerTab.Navigator>
        <ClueLoggerTab.Screen
          name="Investigations"
          component={Investigations}
          options={{
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
          }}
        />
        <ClueLoggerTab.Screen
          name="CluesStack"
          component={CluesStackNavigator}
          options={{
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
          }}
        />
      </ClueLoggerTab.Navigator>
    </NavigationContainer>
  );
}

//         <ClueLoggerTab.Screen
//           name="Messages"
//           component={MessagesStackContainer}
//           options={{
//             tabBarLabel: 'Messages',
//             tabBarIcon: ({ tintColor }) => {
//               return (
//                 <Icon
//                   name="comments"
//                   solid
//                   size={28}
//                   color={tintColor}
//                   style={styles.icon}
//                 />
//               );
//             },
//           }}
//         />
