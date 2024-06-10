import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Botao = (props) => {

    return(
        <TouchableOpacity
            onPress={props.funcao}
            style={ [estilos.fundo, { backgroundColor: props.cor, marginTop: parseInt(props.marginTop) || 15, width: props.width || "100%" }] }>
            <Text style={estilos.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo:{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: 8,
        borderWidth: 1
    },
    texto: {
        fontFamily: "AveriaLibre-Regular",
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    }
})

export default Botao