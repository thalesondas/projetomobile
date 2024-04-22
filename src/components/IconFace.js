import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconFace = (props) => {

    return(
        <View style={estilos.iconView} >
            <Text style={estilos.icons}><Icon name={props.nomeIcone} size={60} color={props.cor} /></Text>
            <Text style={estilos.texto}>{props.texto}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    iconView: {
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

export default IconFace