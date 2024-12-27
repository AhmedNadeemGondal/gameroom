import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import {ImageBackground} from 'react-native';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Game Zone"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        // options={{headerShown: false}}
        options={{
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
        }}
      />
    </Stack.Navigator>
  );
}
