import { View, Text, StyleSheet } from 'react-native'
import Botao from './src/components/Botao'
import AreaInput from './src/components/AreaInput'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Login = () => {
    return(
        <View style={estilos.view}>
            <View style={estilos.cTitulo} >
                <Text style={estilos.textoHeader}>Satisfying.you </Text>
                <Text style={estilos.textoHeader}> <Icon name='mood' size={50} color='white' /></Text>
            </View>

            <View style={estilos.cInput} >

                <AreaInput texto='E-mail' placeholder='Coloque seu e-mail' tipoDeCampo='email-address' />
                <AreaInput texto='Senha' placeholder='Coloque sua senha' ehSenha='true' />

                <Botao texto='Entrar' cor='#41b06c' marginTop='30' />
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
    textoHeader: {
        fontSize: 34,
        color: 'white'
    },
    cTitulo: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        
    },
    cInput: {
        flex: 0.45,
        justifyContent: 'center'
    },
    cBotao: {
        flex: 0.40,
        justifyContent: 'center'
    }
})

export default Login