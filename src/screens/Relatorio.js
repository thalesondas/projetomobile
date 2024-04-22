import { View, StyleSheet, Image } from 'react-native'

const Relatorio = () => {
    return(
        <View style={estilos.view}>

            <Image
                style={{ width: 400, height: 200 }}
                source={require('../images/relatorioimg.png')}
            />

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
        alignItems: 'center'
    }
})

export default Relatorio