import { View, StyleSheet, Text } from 'react-native'
import IconColeta from '../components/IconColeta'
import { useDispatch, useSelector } from 'react-redux'
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import app from '../firebase/config';
import { setBom, setExcelente, setNeutro, setPessimo, setRuim } from '../redux/slicers';

const Coleta = (props) => {
    
    const pesquisa = useSelector(state => state.pesquisa)
    const db = getFirestore(app);
    const pesquisaRef = doc(db, "pesquisas", pesquisa.id);
    const dispatch = useDispatch()

    const adicionarENavegar = (tipoVoto) => {
        switch (tipoVoto) {
            case 'pessimo':
                updateDoc(pesquisaRef, { 'voto.pessimo': ++pesquisa.voto.pessimo })
                dispatch(setPessimo(++pesquisa.voto.pessimo))
                break;
            case 'ruim':
                updateDoc(pesquisaRef, { 'voto.ruim': ++pesquisa.voto.ruim})
                dispatch(setRuim(++pesquisa.voto.ruim))
                break;
            case 'neutro':
                updateDoc(pesquisaRef, { 'voto.neutro': ++pesquisa.voto.neutro })
                dispatch(setNeutro(++pesquisa.voto.neutro))
                break;
            case 'bom':
                updateDoc(pesquisaRef, { 'voto.bom': ++pesquisa.voto.bom })
                dispatch(setBom(++pesquisa.voto.bom))
                break;
            case 'excelente':
                updateDoc(pesquisaRef, { 'voto.excelente': ++pesquisa.voto.excelente })
                dispatch(setExcelente(++pesquisa.voto.excelente))
                break;
            default:
                break;
        }
        props.navigation.navigate('AgradecimentoParticipacao');
    };

    return(
        <View style={estilos.view}>

            <View style={estilos.cTexto} >
                <Text style={estilos.texto} >O que você achou do Carnaval 2024?</Text>
            </View>

            <View style={estilos.cIcons} >
                <IconColeta funcao={() => adicionarENavegar('pessimo')} nomeIcone='sentiment-very-dissatisfied' cor='red' texto='Péssimo' />
                <IconColeta funcao={() => adicionarENavegar('ruim')} nomeIcone='sentiment-dissatisfied' cor='orange' texto='Ruim' />
                <IconColeta funcao={() => adicionarENavegar('neutro')} nomeIcone='sentiment-neutral' cor='yellow' texto='Neutro' />
                <IconColeta funcao={() => adicionarENavegar('bom')} nomeIcone='sentiment-satisfied' cor='#05ad2c' texto='Bom' />
                <IconColeta funcao={() => adicionarENavegar('excelente')} nomeIcone='sentiment-very-satisfied' cor='#0ff007' texto='Excelente' />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#30236a',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontFamily: "AveriaLibre-Regular",
        fontSize: 36,
        color: 'white',
        textAlign: 'center'
    },
    cTexto: {
        flex: 0.3,
        justifyContent: 'center'
    },
    cIcons: {
        flex: 0.7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})

export default Coleta