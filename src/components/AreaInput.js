import { View, TextInput, Text, StyleSheet } from 'react-native'

const AreaInput = (props) => {
    return(
        <View>
            <Text style={estilos.texto}>{props.texto}</Text>
            <TextInput placeholder={props.placeholder} style={estilos.textoInput}></TextInput>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 24,
        color: 'white'
    },
    textoInput: {
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 15,
        fontSize: 20,
        paddingLeft: 10
    }
})

export default AreaInput