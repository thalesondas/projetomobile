import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Botao from '../components/Botao'
import AreaInput from '../components/AreaInput'

const RecuperarSenha = (props) => {

    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')

    const validarEmail = () => {
        // Expressão regular para validar o formato do e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleRecuperar = () => {
        if(!validarEmail()){
            setErro('E-mail parece ser inválido.')
            setTimeout(() => {
                setErro('')
            }, 3000);
            return
        }
        goToLogin()
    }

    const goToLogin = () => {
        props.navigation.navigate('Login')
    }

    return(
        <View style={estilos.view}>

            <View style={estilos.cPrincipal} >

                <AreaInput texto='E-mail' placeholder='Coloque seu e-mail' tipoDeCampo='email-address' funcao={setEmail} />
                <Text style={estilos.erro}>{erro}</Text>

                <Botao texto='RECUPERAR' cor='#41b06c' marginTop='60' funcao={handleRecuperar} />
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
    },
    erro: {
        color: 'red'
    }
})

export default RecuperarSenha