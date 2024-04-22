import { View, StyleSheet, Text } from 'react-native'

const AgradecimentoParticipacao = () => {
    return(
        <View style={estilos.view}>

            <Text style={estilos.texto} >Obrigado por participar da pesquisa!</Text>
            <Text style={estilos.texto} >Aguardamos você no próximo ano!</Text>

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
        color: 'white',
        fontSize: 34,
        textAlign: 'center',
        marginBottom: 25
    }
})

export default AgradecimentoParticipacao