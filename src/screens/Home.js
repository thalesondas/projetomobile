import { useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import { setPesquisas } from '../redux/slicers';
import app from '../firebase/config';
import Botao from '../components/Botao';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';

const Home = props => {

  const dispatch = useDispatch()
  const pesquisas = useSelector(state => state.pesquisas.pesquisas)
  const db = getFirestore(app);

  useEffect(() => {
    const q = query(collection(db, "pesquisas"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listaPesquisas = [];
      snapshot.forEach(doc => {
        listaPesquisas.push({
          id: doc.id,
          ...doc.data()
        })
      })

      dispatch(setPesquisas(listaPesquisas));
    })
  }, []);

  const itemPesquisa = ({ item }) => {
    return(
      <Card
        key={item.id}
        image='https://cdn-icons-png.flaticon.com/512/3474/3474360.png'
        text={item.nome}
        date={item.data}
      />
    )
  }

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
        <FlatList data={pesquisas} renderItem={itemPesquisa} keyExtractor={pesquisa => pesquisa.id} />
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
