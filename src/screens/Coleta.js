import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFace from '../components/IconFace'

const Coleta = () => {
    return(
        <View style={estilos.view}>

            <View style={estilos.cTexto} >
                <Text style={estilos.texto} >O que você achou do Carnaval 2024?</Text>
            </View>

            <View style={estilos.cIcons} >
                <IconFace nomeIcone='sentiment-very-dissatisfied' cor='red' texto='Péssimo' />
                <IconFace nomeIcone='sentiment-dissatisfied' cor='orange' texto='Ruim' />
                <IconFace nomeIcone='sentiment-neutral' cor='yellow' texto='Neutro' />
                <IconFace nomeIcone='sentiment-satisfied' cor='blue' texto='Bom' />
                <IconFace nomeIcone='sentiment-very-satisfied' cor='green' texto='Excelente' />
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