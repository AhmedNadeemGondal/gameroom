import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import Header from '../shared/header.tsx';
import {globalStyles} from '../styles/global';

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerBackground: () => (
            <ImageBackground
              source={require('../assets/images.jpeg')}
              style={{flex: 1}}
            />
          ),
        }}>
        {/* <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={({route}) => ({
            headerTitle: () => (
              <Header title={getFocusedRouteNameFromRoute(route) ?? 'Game Zone'} />
            ),
          })}
        /> */}

        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={({route}) => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? 'Game Zone';
            return {
              headerTitle: () => <Header title={routeName} />,
              headerShown: routeName === 'Game Zone',
            };
          }}
        />

        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={({route}) => ({
            headerTitle: () => (
              <Header
                title={getFocusedRouteNameFromRoute(route) ?? 'About Game Zone'}
              />
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
