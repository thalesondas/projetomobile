import { useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useNavigate from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconColeta = (props) => {

    return(
        <TouchableOpacity style={estilos.container} onPress={props.funcao}>
            <Text style={estilos.icons}><Icon name={props.nomeIcone} size={60} color={props.cor} /></Text>
            <Text style={estilos.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    container: {
        margin: 30
    },
    texto: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    icons: {
        textAlign: 'center'
    } 
})

export default IconColeta