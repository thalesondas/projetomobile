import { View, StyleSheet, Text } from 'react-native'
import IconColeta from '../components/IconColeta'

const Coleta = (props) => {

    const goToAgradecimentoParticipacao = () => {
        props.navigation.navigate('AgradecimentoParticipacao')
    }

    return(
        <View style={estilos.view}>

            <View style={estilos.cTexto} >
                <Text style={estilos.texto} >O que você achou do Carnaval 2024?</Text>
            </View>

            <View style={estilos.cIcons} >
                <IconColeta funcao={goToAgradecimentoParticipacao} nomeIcone='sentiment-very-dissatisfied' cor='red' texto='Péssimo' />
                <IconColeta funcao={goToAgradecimentoParticipacao} nomeIcone='sentiment-dissatisfied' cor='orange' texto='Ruim' />
                <IconColeta funcao={goToAgradecimentoParticipacao} nomeIcone='sentiment-neutral' cor='yellow' texto='Neutro' />
                <IconColeta funcao={goToAgradecimentoParticipacao} nomeIcone='sentiment-satisfied' cor='#05ad2c' texto='Bom' />
                <IconColeta funcao={goToAgradecimentoParticipacao} nomeIcone='sentiment-very-satisfied' cor='#0ff007' texto='Excelente' />
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