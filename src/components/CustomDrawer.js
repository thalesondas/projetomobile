import {StyleSheet, View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <View style={styles.user}>
        <Text style={styles.email}>usuario@dominio.com</Text>
      </View>
      <View style={styles.list}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.exit}>
        <DrawerItem
          icon={() => <Icon name="logout" size={48} color="#ffffff"></Icon>}
          labelStyle={{color: '#fff', fontSize: 36, fontFamily: 'AveriaLibre-Regular'}}
          label={'Sair'}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B1F5C',
    color: '#fff',
  },
  user: {
    flex: 0.1,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  list: {
    flex: 0.8,
  },
  email: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  exit: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
});

export default CustomDrawer;
