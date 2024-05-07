import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import Botao from '../components/Botao'
import AreaInput from '../components/AreaInput'

const NovaConta = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senha2, setSenha2] = useState('')
    const [erro, setErro] = useState('')

    const mostrarErro = (msg) => {
        setErro(msg);
        setTimeout(() => {
            setErro('');
        }, 3000);
    }

    const validarEmail = () => {
        // Expressão regular para validar o formato do e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleCadastrar = () => {
        if(!email || !senha || !senha2){
            mostrarErro('Necessário o preenchimento de todos os campos.')
        } else if (!validarEmail()){
            mostrarErro('E-mail inválido.')
        } else if(senha.length < 6 || senha2.length < 6){
            mostrarErro('Senha deve ser maior do que 5 digitos.')
        } else if(senha != senha2){
            mostrarErro('O campo repetir senha difere da senha.')
        } else {
            createUserWithEmailAndPassword(auth, email, senha)
                .then(() => {
                    props.navigation.navigate('Login')
                })
                .catch(() => {
                    mostrarErro('Erro ao criar o usuário no banco de dados.')
                })
        }
    }

    return(
        <View style={estilos.view}>

                <AreaInput texto='E-mail' placeholder='Coloque seu e-mail' tipoDeCampo='email-address' funcao={setEmail} />
                <AreaInput texto='Senha' placeholder='Coloque sua senha' ehSenha='true' funcao={setSenha} />
                <AreaInput texto='Repetir Senha' placeholder='Coloque novamente a sua senha' ehSenha='true' funcao={setSenha2} />
                <Text style={estilos.erro}>{erro}</Text>

                <Botao texto='CADASTRAR' cor='#41b06c' marginTop='30' funcao={handleCadastrar} />

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
    },
    erro: {
        fontFamily: "AveriaLibre-Regular",
        color: 'red'
    }
})

export default NovaConta