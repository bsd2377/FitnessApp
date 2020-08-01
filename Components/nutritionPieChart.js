import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import colors from '../Constants/colors';
import {
    PieChart,
  } from "react-native-chart-kit";
import Card from './Card';

const PieCharts = props => {
    return(
        <Card>
            <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5}}> {props.title} </Text>
            <PieChart
            data={[
            {
                name: 'protien (grams)',
                population: 75,
                color: colors.lightPink,
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'carbs (grams)',
                population: 50,
                color: colors.orange,
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'fat',
                population: 20,
                color: colors.seaGreen,
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'sugar',
                population: 30,
                color: colors.lightBlue,
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            ]}
            width = {Dimensions.get('window').width - 30}
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

export default PieCharts;