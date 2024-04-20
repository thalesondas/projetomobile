import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Botao from './src/components/Botao'

const Login = () => {
    return(
        <View style={estilos.view}>
            <View style={estilos.cTitulo} >
                <Text style={estilos.textoHeader}>Satisfying.you</Text>
            </View>

            <View style={estilos.cInput} >
                <Text style={estilos.texto}>E-mail</Text>
                <TextInput style={estilos.textoInput}></TextInput>

                <Text style={estilos.texto}>Senha</Text>
                <TextInput style={estilos.textoInput}></TextInput>

                <Botao texto='Entrar' cor='#41b06c' />
            </View>

            <View style={estilos.cBotao} >
                <Botao texto='Criar minha conta' cor='#3a91d1'/>
                <Botao texto='Esqueci minha senha' cor='#aebeca'/>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#30236a',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    cTitulo: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cInput: {
        flex: 0.45,
        justifyContent: 'center'
    },
    cBotao: {
        flex: 0.40,
        justifyContent: 'center'
    },
    textoHeader: {
        fontSize: 34,
        color: 'white'
    },
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

export default Login