import { View, StyleSheet } from 'react-native'
import Botao from './src/components/Botao'
import AreaInput from './src/components/AreaInput'

const RecuperarSenha = () => {
    return(
        <View style={estilos.view}>

            <View style={estilos.cPrincipal} >

                <AreaInput texto='E-mail' placeholder='Coloque seu e-mail' tipoDeCampo='email-address' />

                <Botao texto='RECUPERAR' cor='#41b06c' marginTop='60' />
            </View>

        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#30236a',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        justifyContent: 'center'
    }
})

export default RecuperarSenha