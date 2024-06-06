import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { PieChart } from 'react-native-svg-charts';

const Relatorio = () => {

    const pesquisa = useSelector(state => state.pesquisa)

    const data = [
        {
            key: 'pessimo',
            value: pesquisa.voto.pessimo,
            svg: { fill: '#53d8d8' }
        },
        {
            key: 'ruim',
            value: pesquisa.voto.ruim,
            svg: { fill: '#ea7288' }
        },
        {
            key: 'neutro',
            value: pesquisa.voto.neutro,
            svg: { fill: '#5fcda4' }
        },
        {
            key: 'bom',
            value: pesquisa.voto.bom,
            svg: { fill: '#6994fe' }
        },
        {
            key: 'excelente',
            value: pesquisa.voto.excelente,
            svg: { fill: '#f1ce7e' },
            arc: { outerRadius: '130%', cornerRadius: 10 }
        }
    ]

    return (
        <View style={estilos.view}>
            <PieChart
                style={{ height: 500 }}
                outerRadius={'70%'}
                innerRadius={15}
                data={data}
            />
            <View style={estilos.viewText}>
                <Text style={estilos.text}><Text style={estilos.pessimo}>■</Text> Péssimo</Text>
                <Text style={estilos.text}><Text style={estilos.ruim}>■</Text>  Ruim</Text>
                <Text style={estilos.text}><Text style={estilos.neutro}>■</Text>  Neutro</Text>
                <Text style={estilos.text}><Text style={estilos.bom}>■</Text>  Bom</Text>
                <Text style={estilos.text}><Text style={estilos.excelente}>■</Text>  Excelente</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#30236a',
        flex: 1,
        flexDirection: 'column'
    },
    viewText: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginBottom: 10
    },
    pessimo: {
        color: '#53d8d8'
    },
    ruim: {
        color: '#ea7288'
    },
    neutro: {
        color: '#5fcda4'
    },
    bom: {
        color: '#6994fe'
    },
    excelente: {
        color: '#f1ce7e'
    }
})

export default Relatorio