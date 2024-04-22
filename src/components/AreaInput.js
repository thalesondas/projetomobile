import { View, TextInput, Text, StyleSheet } from 'react-native'

const AreaInput = (props) => {

    // Converter string passada para boolean para não gerar problema
    const parseBoolean = () => {
        if(props.ehSenha === 'true'){
            return true
        }
        return null
    }

    // Colocar campo <TextInput> como padrão false para campo de senha
    const ehSenha = parseBoolean(props.ehSenha) || false

    // Colocar tipo de campo sendo default como padrão
    const tipoDeCampo = props.tipoDeCampo || 'default'

    return(
        <View>
            <Text style={estilos.texto}>{props.texto}</Text>
            <TextInput
                secureTextEntry={ehSenha}
                keyboardType={tipoDeCampo}
                placeholder={props.placeholder}
                style={estilos.textoInput}
                onChangeText={props.funcao}>
            </TextInput>
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