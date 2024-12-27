import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

import Card from '../shared/card';


export default function About() {
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text style={globalStyles.paragraph}>About Screen</Text>
      </Card>
    </View>
  );
}
