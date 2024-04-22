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
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name='NovaConta' component={NovaConta} />
                <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} />
                <Stack.Screen name='HomePlaceholder' component={HomePlaceholder} options={{ headerShown: false }}/>
                <Stack.Screen name='AcoesPesquisa' component={AcoesPesquisa} />
                <Stack.Screen name='NovaPesquisa' component={NovaPesquisa} />
                <Stack.Screen name='ModificarPesquisa' component={ModificarPesquisa} />
                <Stack.Screen name='Coleta' component={Coleta} />
                <Stack.Screen name='Relatorio' component={Relatorio} />
                <Stack.Screen name='AgradecimentoParticipacao' component={AgradecimentoParticipacao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App