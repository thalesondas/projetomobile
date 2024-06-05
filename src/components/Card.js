import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Card = props => {

  return (
    <TouchableOpacity style={styles.container} onPress={props.funcao}>
      <View style={styles.icon}>
        <Image
          style={styles.image}
          source={{
            uri: props.image,
          }}
        />
      </View>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.textDate}>{props.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 271,
    height: 238,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  icon: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 42.96,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular',
  },
  textDate: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.09,
    color: '#8B8B8B',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Card;
