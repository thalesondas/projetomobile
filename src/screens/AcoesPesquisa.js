import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Relatorio from './Relatorio';

const AcoesPesquisa = (props) => {

  const goToPagina = (pagina) => {
    props.navigation.navigate(pagina)
  }

  return (
    <View style={estilos.fundo}>
      <TouchableOpacity style={estilos.botao} onPress={() => goToPagina('ModificarPesquisa')}>
        <Icon name="edit-document" size={100} color="#ffffff"></Icon>
        <Text style={estilos.texto}>Modificar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={() => goToPagina('Coleta')}>
        <Icon name="check-box" size={100} color="#ffffff"></Icon>
        <Text style={estilos.texto}>Coletar Dados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={() => goToPagina('Relatorio')} >
        <Icon name="donut-large" size={100} color="#ffffff"></Icon>
        <Text style={estilos.texto}>Relatório</Text>
      </TouchableOpacity>
    </View>
  )
}
const estilos = StyleSheet.create({
  fundo: {
      backgroundColor: "#372775",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around"
  },
  botao: {
    backgroundColor: "#312464",
    width: "80%",
    paddingVertical: 30,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center"
  },
  texto: {
    fontFamily: "AveriaLibre-Regular",
    fontSize: 36,
    color: "#ffffff"
  }
})

export default AcoesPesquisa;