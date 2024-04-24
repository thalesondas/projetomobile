import {View, StyleSheet, TextInput} from 'react-native';
import Botao from '../components/Botao';
import Card from '../components/Card';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = props => {
  const cardsData = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/3474/3474360.png',
      text: 'SECOMP 2023',
      date: '10/10/2023',
    },
    {
      id: 2,
      image: 'https://img.icons8.com/?size=256&id=85167&format=png',
      text: 'UBUNTU',
      date: '05/06/2022',
    },
    {
      id: 3,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6k9K1beGbZbGUGJmkjjjR8lqxpWvNfp7hrU6Del5DA&s',
      text: 'MENINAS CPU',
      date: '01/03/2022',
    },
  ];

  const goToPagina = pagina => {
    props.navigation.navigate(pagina);
  };

  return (
    <View style={styles.view}>
      <View style={styles.search}>
        <View style={styles.searchSection}>
          <Icon name="search" size={40}></Icon>
          <TextInput
            style={styles.searchBar}
            placeholder="Insira o termo de busca"
          />
        </View>
      </View>
      <View style={styles.carousel}>
        {cardsData.map(card => (
          <Card
            key={card.id}
            image={card.image}
            text={card.text}
            date={card.date}
          />
        ))}
      </View>
      <View style={styles.button}>
        <Botao
          texto="Nova Pesquisa"
          cor="#41b06c"
          marginTop="70"
          funcao={() => goToPagina('NovaPesquisa')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#30236a',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20
  },
  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  searchBar: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    backgroundColor: '#fff',
    paddingBottom: 6,
    paddingTop: 6,
    flex: 1,
  },
  carousel: {
    flex: 0.4,
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    flex: 0.3,
    justifyContent: 'flex-start'
  },
  search: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});

export default Home;
