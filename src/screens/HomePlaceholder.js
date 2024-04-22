import { View, StyleSheet, Text } from 'react-native'
import Botao from '../components/Botao'

const HomePlaceholder = (props) => {

    const goToPagina = (pagina) => {
        props.navigation.navigate(pagina)
    }

    return(
        <View style={estilos.view}>
            <Text style={estilos.texto} >Placeholder para a página do Home</Text>

            <Botao texto='Nova Pesquisa' cor='#41b06c' marginTop='60' funcao={() => goToPagina('NovaPesquisa')} />
            <Botao texto='Ações Pesquisa' cor='#41b06c' marginTop='60' funcao={() => goToPagina('AcoesPesquisa')} />
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
    }
})

export default HomePlaceholder