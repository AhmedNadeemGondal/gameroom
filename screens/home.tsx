import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import AntIcons from 'react-native-vector-icons/AntDesign';
import ReviewForm from './reviewForm';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem Zelda ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem Pokemon ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem Fantasy ipsum',
      key: '3',
    },
  ]);
  const addReview = review => {
    review.key = Math.random().toString();
    setReviews(currentReviews => {
      return [review, ...currentReviews];
    });
    setModalOpen(false)
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <AntIcons
            name="close"
            size={30}
            onPress={() => setModalOpen(false)}
            style={{...styles.modalToggle, ...styles.modalClose}}
          />
          <ReviewForm addReview={addReview}/>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <AntIcons
        name="plus"
        size={30}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', {item})}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 30,
    marginBottom: 0,
    borderWidth: 0,
  },
});
