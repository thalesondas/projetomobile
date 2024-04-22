import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import NovaConta from "./src/screens/NovaConta"
import RecuperarSenha from "./src/screens/RecuperarSenha"
import HomePlaceholder from "./src/screens/HomePlaceholder"
import AcoesPesquisa from "./src/screens/AcoesPesquisa"
import NovaPesquisa from "./src/screens/NovaPesquisa"
import ModificarPesquisa from "./src/screens/ModificarPesquisa"
import Coleta from "./src/screens/Coleta"
import Relatorio from "./src/screens/Relatorio"
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao"

const App = () => {

    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#21174c' }, headerTintColor: 'white' }}>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name='NovaConta' component={NovaConta} options={{ headerTitle: 'Nova Conta' }}/>
                <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} options={{ headerTitle: 'Recuperar Senha' }}/>
                <Stack.Screen name='HomePlaceholder' component={HomePlaceholder} options={{ headerShown: false }}/>
                <Stack.Screen name='AcoesPesquisa' component={AcoesPesquisa} options={{ headerTitle: 'Ações da Pesquisa' }}/>
                <Stack.Screen name='NovaPesquisa' component={NovaPesquisa} options={{ headerTitle: 'Criar uma Nova Pesquisa' }}/>
                <Stack.Screen name='ModificarPesquisa' component={ModificarPesquisa} options={{ headerTitle: 'Modificar Pesquisa' }}/>
                <Stack.Screen name='Coleta' component={Coleta} options={{ headerTitle: 'Coleta de Dados' }}/>
                <Stack.Screen name='Relatorio' component={Relatorio} options={{ headerTitle: 'Relatório' }}/>
                <Stack.Screen name='AgradecimentoParticipacao' component={AgradecimentoParticipacao} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App