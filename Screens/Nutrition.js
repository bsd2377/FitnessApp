import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard,VirtualizedList, StyleSheet,Button,ScrollView} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import Card from '../Components/Card';
import colors from '../Constants/colors';
import Header from '../Components/Header';
import PieCharts  from '../Components/nutritionPieChart';
import Input from '../Components/Input';
import {Container} from 'native-base';
import BarCharts from '../Components/BarChart';

const Nutrition = props => {
    const navigation = useNavigation();
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
        // this is a regular expression that removes any non numerical 
        // value 
    };
        //piechart with ring 
    return(
        <Container>
            <Header title ={'Nutrition info'}/> 
                <ScrollView>
                <View style = {styles.screen}>
                    <Card style = {{...styles.cards,...{backgroundColor: colors.lightBlue}}}>
                        <Text style = {styles.text}> Calorie intake: </Text>
                        {/* contorls the input og  */}
                        <Text style = {styles.text}> Calorie remaining: </Text>
                    </Card>
                    <Card style = {{...styles.cards,...{backgroundColor: colors.orange}}}>
                        <Text style = {{...styles.text,...{alignSelf: 'flex-start',marginBottom: 15}}}> Raw Nutrition values: </Text>
                        <Text style = {styles.text}> protein: </Text>
                        <Text style = {styles.text}> carbs: </Text>
                        <Text style = {styles.text}> fat: </Text>
                        <Text style = {styles.text}> sugar: </Text>
                        <Text style = {styles.text}> calories: </Text>
                    </Card>
                    <PieCharts title = 'Nutrition Breakdown'/>
                    <BarCharts title = 'Water Intake in Liters' />
                    <Card style = {{...styles.cards,...{backgroundColor: colors.secondary}}}>
                        <Button
                            //onPress={() => navigation.openDrawer()} 
                            title="Show data ->" 
                        />
                    </Card>
                </View>
                </ScrollView>
            
        </Container>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text:{
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:5, 
        color: 'white'
    },
    cards:{
        width: 900,
        margin: 10,
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        //height: 100,
        //maxHeight: '20%',
    },
    inputFields:{
        width: 200,
        textAlign: 'center',
        backgroundColor: 'grey'
    },
    Button:{
        flexDirection: 'column',
        width: 90,
    },
    ButtonContainer:
    {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5
    },

});

export default Nutrition;