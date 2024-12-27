import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#333',
    margin: 6,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    fontSize:16,
    color: "black",
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input:{
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:6,
    padding:10,
    margin:6,
    fontSize:18,
  }, 
  errorText:{
    color:'crimson',
    fontWeight:'bold',
    marginBottom:10,
    marginTop:6,
    textAlign:'center',
  }
});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}
