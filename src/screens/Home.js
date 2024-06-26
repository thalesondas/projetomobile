import { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import { setPesquisa, setListaPesquisas, setPessimo, setRuim, setNeutro, setBom, setExcelente } from '../redux/slicers';
import app from '../firebase/config';
import Botao from '../components/Botao';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';

const Home = props => {

  const dispatch = useDispatch()
  const listaPesquisas = useSelector(state => state.listaPesquisas.listaPesquisas)
  const db = getFirestore(app);

  const [filtroPesquisa, setFiltroPesquisa] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'pesquisas'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listaPesquisasAux = [];
      snapshot.forEach(doc => {
        listaPesquisasAux.push({
          id: doc.id,
          ...doc.data()
        })
      })

      dispatch(setListaPesquisas(listaPesquisasAux));

      return () => unsubscribe();
    })
  }, []);

  const itemPesquisa = ({ item }) => {

    const funcaoNavegacao = () => {
      dispatch(setPesquisa({ id: item.id, nome: item.nome, data: item.data, urlFoto: item.urlFoto }));
      dispatch(setPessimo(item.voto.pessimo));
      dispatch(setRuim(item.voto.ruim));
      dispatch(setNeutro(item.voto.neutro));
      dispatch(setBom(item.voto.bom));
      dispatch(setExcelente(item.voto.excelente));
      goToPagina('AcoesPesquisa');
    }

    return(
      <Card
        key={item.id}
        funcao={funcaoNavegacao}
        image={item.urlFoto}
        text={item.nome}
        date={item.data}
      />
    )
  }
  
  const listaFiltrada = listaPesquisas.filter(pesquisa =>
    pesquisa.nome.toLowerCase().includes(filtroPesquisa.toLowerCase())
  );

  const goToPagina = pagina => {
    props.navigation.navigate(pagina);
  };

  return (
    <View style={styles.view}>
      <View style={styles.search}>
        <View style={styles.searchSection}>
          <Icon name="search" size={40}></Icon>
          <TextInput
            onChangeText={texto => setFiltroPesquisa(texto)}
            style={styles.searchBar}
            placeholder="Insira o termo de busca"
          />
        </View>
      </View>
      <View style={styles.carousel}>
        <FlatList
          data={listaFiltrada}
          renderItem={itemPesquisa}
          keyExtractor={pesquisa => pesquisa.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
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
