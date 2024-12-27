import {View, Text, Image} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Header({title}) {
  return (
    <View style={globalStyles.header}>
      <Image
        source={require('../assets/heart_logo.png')}
        style={globalStyles.headerImage}
      />
      <Text style={globalStyles.headerText}>{title}</Text>
    </View>
  );
}
