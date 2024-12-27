import {createStackNavigator} from '@react-navigation/stack';

import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About Game Zone"
        component={About}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
