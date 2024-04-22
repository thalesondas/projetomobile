import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { useState } from 'react';
import Botao2 from '../components/Botao2';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ModificarPesquisa = (props) => {
  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);

  const Salvar = () => {
    props.navigation.navigate('HomePlaceholder')
  }

  const Excluir = () => {
    ClosePopup()
    props.navigation.navigate('HomePlaceholder')
  }

  const OpenPopup = () => {
    setVisibleModal(true)
  }
  const ClosePopup = () => {
    setVisibleModal(false)
  }

  return (
    <View style={estilos.fundo}>
      <View style={estilos.componentes}>
        <View style={estilos.cInput}>
            <View>
            <Text style={estilos.texto}>Nome</Text>
            <TextInput style={estilos.input} onChangeText={setNome}/>
            </View>
            
            <View>
            <Text style={estilos.texto}>Data</Text>
            <TextInput style={estilos.input} onChangeText={setData}/>
            </View>
            
            <View>
            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.Imagem}>
              <Image style={{width: 60, height: 60}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
            </TouchableOpacity>
            </View>
        </View>

        <View style={estilos.ViewBotao2}>
          <Botao2 texto="SALVAR" funcao={Salvar} cor="#37BD6D" style={estilos.Botao2}/>
          <TouchableOpacity style={estilos.deleteView} onPress={OpenPopup}>
            <Icon name="delete" size={40} color="#ffffff"></Icon>
            <Text style={estilos.deleteTexto}>Apagar</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={visibleModal} transparent={true}>
          <View style={estilos.modal}>
            <Text style={estilos.texto}>Tem certeza de apagar essa pesquisa?</Text>
            <View style={estilos.modalBotoes}>
              <Botao2 texto="SIM" funcao={Excluir} cor="#FF8383" width="40%"/>
              <Botao2 texto="CANCELAR" funcao={ClosePopup} cor="#3F92C5" width="40%"/>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  fundo: {
      backgroundColor: "#372775",
      flex: 1,
  },
  componentes: {
    width: "90%",
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-around"
  },
  cInput: {
    gap: 30
  },
  texto: {
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    color: "#ffffff"
  },
  input: {
    backgroundColor: "#ffffff",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    color: "#3F92C5"
  },
  Imagem: {
    backgroundColor: "#ffffff",
    width: "75%",
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  ImagemTexto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    color: "#939393"
  },
  ViewBotao2: {
    flexDirection: "row",
    width: "80%",
    gap: 10
  },
  deleteView: {
    flexDirection: "column",
    alignItems: "center"
  },
  deleteTexto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    color: "#939393"
  },
  modal: {
    backgroundColor: "#2B1F5C",
    flex: 0.3,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto"
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  }
})

export default ModificarPesquisa;