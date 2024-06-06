import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app, { storage } from '../../src/firebase/config.js'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';
import Botao2 from '../components/Botao2';
import Icon from 'react-native-vector-icons/MaterialIcons'

const NovaPesquisa = (props) => {
  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [erroNome, setErroNome] = useState(false);
  const [erroData, setErroData] = useState(false);
  const [calendario, setCalendario] = useState(false);

  const db = getFirestore(app);
  const pesquisaCollection = collection(db, "pesquisas");

  const capturarImagem = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then((result) => {
        setUrlFoto(result.assets[0].uri)
      })
      .catch((erro) => {
        console.log("Erro ao capturar imagem: " + JSON.stringify(erro))
      })
  }

  const escolherImagem = () => {
    launchImageLibrary()
      .then((result) => {
        setUrlFoto(result.assets[0].uri)
      })
      .catch((erro) => {
        console.log("Erro ao capturar imagem: " + JSON.stringify(erro))
      })
  }

  const addPesquisa = async() => {

    const imageRef = ref(storage, `${txtNome}_${txtData.replaceAll("/", "-")}.jpeg`)
    const file = await fetch(urlFoto)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then(() =>{
        console.log("Arquivo enviado com sucesso.")
        getDownloadURL(imageRef)
          .then((url) => {
            const docPesquisa = {
              nome: txtNome,
              data: txtData,
              urlFoto: url,
              voto: { pessimo: 0, ruim: 0, neutro: 0, bom: 0, excelente: 0 }
            }

            addDoc(pesquisaCollection, docPesquisa)
              .then((docRef) => {
                console.log("DocRef" + docRef.id)
              })
              .catch((erro) => {
                console.log("Erro: "+ erro)
              })
          })
          .catch((erro) => {
            console.log("Erro ao pegar imagem da URL: " + JSON.stringify(erro))
          })
      })
      .catch((erro) => {
        console.log("Erro ao enviar o arquivo: " + JSON.stringify(erro))
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
    addPesquisa();
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
            <View flexDirection='row' justifyContent='space-between'>
              <TouchableOpacity style={estilos.Imagem} onPress={capturarImagem}>
                <Text style={estilos.ImagemTexto}>Câmera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={estilos.Imagem} onPress={escolherImagem}>
                <Text style={estilos.ImagemTexto}>Galeria de fotos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Botao2 texto="CADASTRAR" onclick={() => addPesquisa()} funcao={Cadastrar} cor="#37BD6D"/>
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
    width: "47%",
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