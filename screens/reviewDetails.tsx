import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {globalStyles, images} from '../styles/global';
import {useRoute} from '@react-navigation/native';
import Card from '../shared/card';

export default function ReviewDetails({navigation}) {
  const route = useRoute();
  const {item} = route.params;
  const currentRating = item.rating;
  // console.log(currentRating)

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.paragraph}>{item.title}</Text>
        <Text style={globalStyles.paragraph}>{item.body}</Text>
        {/* <Text style={globalStyles.paragraph}>Rating: {item.rating}</Text> */}
        <View style={styles.rating}>
          <Text style={globalStyles.paragraph}>Game Zone Rating: </Text>
          <Image source={images.ratings[currentRating]} />
        </View>
      </Card>
      <View style={{marginTop:6,marginHorizontal:4,}}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
