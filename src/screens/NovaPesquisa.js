import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import Botao2 from '../components/Botao2';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import app from '../../src/firebase/config.js'

const NovaPesquisa = (props) => {
  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');
  const [erroNome, setErroNome] = useState(false);
  const [erroData, setErroData] = useState(false);
  const [calendario, setCalendario] = useState(false);

  const db = getFirestore(app);
  const projetoCollection = collection(db, "projetos");

  const addProjeto = () => {
    const docProjeto = {
      nome: txtNome,
      data: txtData
    }

    addDoc(projetoCollection, docProjeto)
      .then((docRef) => {
        console.log("DocRef" + docRef.id)
      })
      .catch((erro) => {
        console.log("Erro: "+ erro)
      })
  }

  const Validar = () => {
    nome = txtNome === ''
    data = txtData === ''
    
    setErroNome(nome);
    setErroData(data);
    return !(nome || data)
  }

  const Cadastrar = () => {
    if (!Validar()) return;
    addProjeto();
    props.navigation.navigate('DrawerNavigator')
  }

  const SelecionarData = (evento, data) => {
    setCalendario(false)
    if (data) {
      let dia = data.getDate().toString().padStart(2, '0')
      let mes = (data.getMonth() + 1).toString().padStart(2, '0')
      let ano = data.getFullYear().toString()
      setData(dia + "/" + mes + "/" + ano)
    }
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

            <View style={estilos.cInputData}>
              <TextInputMask style={estilos.input} value={txtData} onChangeText={setData} type={'datetime'} options={{format: "DD/MM/YYYY"}} placeholder='DD/MM/YYYY'/>
              <TouchableOpacity onPress={() => {setCalendario(true)}} style={{position: "absolute"}}>
                <Icon name="edit-calendar" size={40} color="#000000"></Icon>
              </TouchableOpacity>
            </View>

            {calendario && (<DateTimePicker mode={'date'} value={new Date()} onChange={SelecionarData}/>)}
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
          <Botao2 texto="CADASTRAR" onclick={() => addProjeto()} funcao={Cadastrar} cor="#37BD6D"/>
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
    color: "#3F92C5",
    width: "100%"
  },
  cInputData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end'
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