import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { updateDoc, doc, getFirestore, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject, uploadBytes, getDownloadURL } from 'firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TextInputMask } from 'react-native-masked-text';
import app, { storage } from '../firebase/config';
import DateTimePicker from '@react-native-community/datetimepicker';
import Botao2 from '../components/Botao2';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ModificarPesquisa = (props) => {

  const pesquisa = useSelector(state => state.pesquisa)
  const db = getFirestore(app);

  const [txtNome, setNome] = useState(pesquisa.nome);
  const [txtData, setData] = useState(pesquisa.data);
  const [urlFoto, setUrlFoto] = useState(pesquisa.urlFoto)
  const [visibleModal, setVisibleModal] = useState(false);
  const [calendario, setCalendario] = useState(false);

  const Salvar = async() => {
    const pesquisaRef = doc(db, "pesquisas", pesquisa.id);

    const imageRef = ref(storage, `${txtNome}_${txtData.replaceAll("/", "-")}.jpeg`)
    const file = await fetch(urlFoto)
    const blob = await file.blob()

    deletarImagem()
    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then(() => {
        console.log("Arquivo enviado com sucesso.")
        getDownloadURL(imageRef)
          .then((url) => {
            updateDoc(pesquisaRef, {
              nome: txtNome,
              data: txtData,
              urlFoto: url
            })
          })
      })
      .catch((erro) => {
        console.log("Erro no uploadBytes: " + JSON.stringify(erro))
      })

    props.navigation.navigate('DrawerNavigator')
  }

  const deletarImagem = () => {
    deleteObject(ref(storage, pesquisa.urlFoto))
      .then(() => {
        console.log('Imagem deletada com sucesso.');
      })
      .catch((erro) => {
        console.error('Erro ao deletar imagem: ', JSON.stringify(erro));
      });
  }

  const capturarNovaImagem = () => {

    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then((result) => {
        setUrlFoto(result.assets[0].uri)
      })
      .catch((erro) => {
        console.log("Erro ao capturar imagem: " + JSON.stringify(erro))
      })
  }

  const escolherNovaImagem = () => {

    launchImageLibrary()
      .then((result) => {
        setUrlFoto(result.assets[0].uri)
      })
      .catch((erro) => {
        console.log("Erro ao capturar imagem: " + JSON.stringify(erro))
      })
  }

  const Excluir = () => {
    deleteDoc(doc(db, "pesquisas", pesquisa.id))
    deletarImagem()
    ClosePopup()
    props.navigation.navigate('DrawerNavigator')
  }

  const OpenPopup = () => {
    setVisibleModal(true)
  }
  const ClosePopup = () => {
    setVisibleModal(false)
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
            <TextInput style={estilos.input} onChangeText={setNome} value={txtNome}/>
            </View>
            
            <View>
              <Text style={estilos.texto}>Data</Text>

              <View style={estilos.cInputData}>
                <TextInputMask style={estilos.input} value={txtData} onChangeText={setData} type={'datetime'} options={{format: "DD/MM/YYYY"}}/>
                <TouchableOpacity onPress={() => {setCalendario(true)}} style={{position: "absolute"}}>
                  <Icon name="edit-calendar" size={40} color="#000000"></Icon>
                </TouchableOpacity>
              </View>

              {calendario && (<DateTimePicker mode={'date'} value={new Date()} onChange={SelecionarData}/>)}
            </View>
            
            <View>
              <Text style={estilos.texto}>Colocar nova imagem</Text>
              
              <View flexDirection='row' justifyContent='space-between'>
                <TouchableOpacity style={estilos.Imagem} onPress={capturarNovaImagem}>
                  <Text style={estilos.ImagemTexto}>Câmera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.Imagem} onPress={escolherNovaImagem}>
                  <Text style={estilos.ImagemTexto}>Galeria de fotos</Text>
                </TouchableOpacity>
              </View>
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
            <Text style={estilos.texto}>Tem certeza de apagar a pesquisa {pesquisa.nome}?</Text>
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