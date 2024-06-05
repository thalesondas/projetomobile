import { View, StyleSheet } from 'react-native'
import { PieChart } from 'react-native-svg-charts'

const Relatorio = () => {
    const data = [
        {
            key: 'Péssimo',
            value: 50,
            svg: { fill: '#53d8d8' },
            arc: { outerRadius: '130%', cornerRadius: 10 }
        },
        {
            key: 'Ruim',
            value: 50,
            svg: { fill: '#ea7288' }
        },
        {
            key: 'Neutro',
            value: 40,
            svg: { fill: '#5fcda4' }
        },
        {
            key: 'Bom',
            value: 95,
            svg: { fill: '#6994fe' }
        },
        {
            key: 'Excelente',
            value: 35,
            svg: { fill: '#f1ce7e' }
        }
    ]

    return (
        <View style={estilos.view}>
            <PieChart
                style={{ height: 500 }}
                outerRadius={'80%'}
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
        flexDirection: 'column',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Relatorio