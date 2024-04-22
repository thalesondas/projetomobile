import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Botao2 from '../components/Botao2';

const NovaPesquisa = (props) => {
  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');
  const [erroNome, setErroNome] = useState(false);
  const [erroData, setErroData] = useState(false);

  const Validar = () => {
    nome = txtNome === ''
    data = txtData === ''
    setErroNome(nome);
    setErroData(data);
    return !(nome || data)
  }

  const Cadastrar = () => {
    if (!Validar()) return;
    console.log("cadastrado");
    props.navigation.navigate('HomePlaceholder')
  }

  return (
    <View style={estilos.fundo}>
      <View style={estilos.componentes}>
        <View style={estilos.cInput}>
          <View>
            <Text style={estilos.texto}>Nome</Text>
            <TextInput style={estilos.input} onChangeText={setNome}/>
            {erroNome && (<Text style={estilos.textoErro}>Preencha no nome da pesquisa</Text>)}
          </View>
          
          <View>
            <Text style={estilos.texto}>Data</Text>
            <TextInput style={estilos.input} onChangeText={setData}/>
            {erroData && (<Text style={estilos.textoErro}>Preencha a data</Text>)}
          </View>
          
          <View>
            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.Imagem}>
              <Text style={estilos.ImagemTexto}>Câmera/Galeria de imagens</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Botao2 texto="CADASTRAR" funcao={Cadastrar} cor="#37BD6D"/>
        </View>
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
    flexDirection: "column",
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
  textoErro: {
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 18,
      color: "#FD7979"
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
  }
})

export default NovaPesquisa;