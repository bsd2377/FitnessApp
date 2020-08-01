import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import colors from '../Constants/colors';
import {
    BarChart,
  } from "react-native-chart-kit";
import Card from './Card';

const BarCharts = props => {
    const data = {
        labels: ["water intake", "set water goal"],
        datasets: [
          {
            data: [20, 45, ]
          }
        ]
      };
    return(
        <Card>
            <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5}}> {props.title} </Text>
            <BarChart
            data={data}
            width = {Dimensions.get('window').width - 50}
            height={220}
            horizontalLabelRotation = {0}
            yAxisSuffix= " L "
            fromZero = {true}
            chartConfig={{
                
                backgroundColor: '#1cc910',
                fillShadowGradientOpacity: 1,
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                decimalPlaces: 1,
                color: () => colors.lightBlue,
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
            accessor="population"
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

export default BarCharts;