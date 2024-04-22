import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao = (props) => {
    return (
        <TouchableOpacity style={[estilos.fundo, {backgroundColor: props.cor, width: props.width || "100%"}]} onPress={props.funcao}>
            <Text style={estilos.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: 50
    },
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
        color: "#FFFFFF",
    }
})

export default Botao;