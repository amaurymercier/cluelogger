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
import Code from '../components/Code';

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
    <CluesStack.Navigator
      screenOptions={{
        header: () => {},
      }}
    >
      <CluesStack.Screen
        name="Clues"
        component={Clues}
        options={{
          title: 'Indices trouvés',
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
          name="Code"
          component={Code}
          options={{
            tabBarLabel: 'Code',
            tabBarIcon: ({ tintColor }) => {
              return (
                <Icon
                  name="lock"
                  size={28}
                  color={tintColor}
                  style={styles.icon}
                />
              );
            },
          }}
        />
        <ClueLoggerTab.Screen
          name="Investigations"
          component={Investigations}
          options={{
            tabBarLabel: 'Scanner',
            tabBarIcon: ({ tintColor }) => {
              return (
                <Icon
                  name="qrcode"
                  size={28}
                  color={tintColor}
                  style={styles.icon}
                />
              );
            },
          }}
        />
        <ClueLoggerTab.Screen
          name="Indices trouvés"
          component={CluesStackNavigator}
          options={{
            tabBarLabel: 'Indices',
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();

              // Do something with the `navigation` object
              navigation.navigate('Indices trouvés', { screen: 'Clues' });
            },
          })}
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
