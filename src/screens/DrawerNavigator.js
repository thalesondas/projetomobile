import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePlaceholder from './HomePlaceholder';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {color: '#fff'},
        drawerActiveBackgroundColor: '#2B1F5C',
        drawerActiveTintColor: '#fff',
        headerTitle: '',
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#2B1D62'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Pesquisas"
        component={HomePlaceholder}
        options={{
          drawerIcon: () => (
            <Icon name="description" size={48} color="#ffffff"></Icon>
          ),
          drawerLabelStyle: {
            fontSize: 24,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
