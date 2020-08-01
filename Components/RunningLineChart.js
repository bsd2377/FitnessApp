import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import colors from '../Constants/colors';
import {
    LineChart,
  } from "react-native-chart-kit";
import Card from './Card';
import { render } from 'react-dom';

const RunChart = () => {
        return(
            <Card>
                <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5}}> Running Over Time </Text>
                <LineChart
                    data={{
                        labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        ],
                        datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                            strokeWidth: 2,
                        },
                        ],
                    }}
                width = {Dimensions.get('window').width - 50}
                height={220}
                chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                }}
                style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                backgroundColor="transparent"
            />
        </Card>
        ); 
};

const styles = StyleSheet.create({
    card :{
        padding: 10,
        borderRadius: 10,
        //only for ios and web 
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: colors.gold,
        //only for andriod
        elevation: 5
    },
});

export default RunChart;