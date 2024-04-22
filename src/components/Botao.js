import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Botao = (props) => {

    // Colocar a margin top para 15px como padrão
    const marginTop = parseInt(props.marginTop) || 15

    return(
        <TouchableOpacity onPress={props.funcao} style={[estilos.fundo, { backgroundColor: props.cor, marginTop: marginTop}]}>
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