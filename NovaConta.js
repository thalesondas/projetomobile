import { View, StyleSheet } from 'react-native'
import Botao from './src/components/Botao'
import AreaInput from './src/components/AreaInput'

const NovaConta = () => {
    return(
        <View style={estilos.view}>

                <AreaInput texto='E-mail' placeholder='Coloque seu e-mail' tipoDeCampo='email-address' />
                <AreaInput texto='Senha' placeholder='Coloque sua senha' ehSenha='true' />
                <AreaInput texto='Repetir Senha' placeholder='Coloque novamente a sua senha' ehSenha='true' />

                <Botao texto='CADASTRAR' cor='#41b06c' marginTop='30' />

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
    }
})

export default NovaConta