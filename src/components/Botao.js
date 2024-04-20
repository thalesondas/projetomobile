import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Botao = (props) => {

    const marginTopPadrao = parseInt(props.marginTop) || 15

    return(
        <TouchableOpacity style={[estilos.fundo, { backgroundColor: props.cor, marginTop: marginTopPadrao}]}>
            <Text style={estilos.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo:{
        padding: 5,
        borderWidth: 1
    },
    texto: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    }
})

export default Botao