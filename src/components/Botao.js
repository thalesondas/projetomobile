import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

const Botao = (props) => {
    return(
        <TouchableOpacity style={[estilos.fundo, { backgroundColor: props.cor }]}>
            <Text style={estilos.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo:{
        marginTop: 15,
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