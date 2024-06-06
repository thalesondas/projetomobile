import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { PieChart } from 'react-native-svg-charts'

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
        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#30236a',
        flex: 1,
        flexDirection: 'column'
    }
})

export default Relatorio