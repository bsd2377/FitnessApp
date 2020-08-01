import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard, StyleSheet,Button,ScrollView,} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';


import Card from '../Components/Card';
import colors from '../Constants/colors';
import Input from '../Components/Input';
import Header from '../Components/Header';
import {Container} from 'native-base';

const SettingGoal = props => {

    const navigation = useNavigation();

    const [distance, setDistance] = useState('');

    const [enteredValue, setEnteredValue] = useState('');

    const [time, setTime] = useState('');

    // Handles distance value user inputs for running goal 
    const distanceInputHandler = (inputText) => {
        setDistance(inputText.replace(/[^0-9]/g,''));
        // this is a regular expression that removes any non numerical value 
    };
    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };
    const timeInputHandler = (inputText) => {
        setTime(inputText.replace(/[^0-9]/g,''));
    };

    return(
        <Container>
            <Header title = {'Goal setting page'} />
            <View style = {styles.screen}>
                <ScrollView>
                    <View style = {styles.screen}>
                    <Card style = {{...styles.cards,...{backgroundColor: colors.orange}}}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5}}> 
                            Enter distance goal and time duration
                        </Text>
                            <View style = {styles.ButtonContainer}>
                                <View style = {styles.Button}> 
                                    <Button 
                                        title = "Reset" 
                                        //onPress = {resetInputHandler} 
                                        color = {colors.secondary}
                                    />  
                                    </View>
                                <View style = {styles.Button}> 
                                    <Button 
                                        title = "Confirm" 
                                        //onPress = {confirmInputHandler} 
                                        color = {colors.primary}
                                    /> 
                                </View>
                            </View>
                            <View style = {{justifyContent: 'center', flexDirection: 'row'}}>
                                    <Input 
                                        style = {styles.inputFields} 
                                        blurOnSubmit
                                        autoCaptilize = 'none'
                                        autoCorrect = {false}
                                        placeholder = "Distance goal amount"
                                        keyboardType = "number-pad"
                                        maxLength = {6}
                                        onChangeText = {distanceInputHandler}
                                        value = {distance}
                                    />
                                    <View style = {{flexDirection: 'column', width: '70%'}}>
                                        <DropDownPicker
                                            items={[
                                                {label: 'day', value: 1},
                                                {label: 'week', value: 2},
                                                {label: 'month', value: 3},
                                                {label: 'year', value: 4},
                                            ]}
                                            placeholder = 'Select time span'
                                            containerStyle={{height: 40, width: '70%'}}
                                            onChangeItem={item => console.log(item.label, item.value)}
                                        />
                                        <DropDownPicker
                                            items={[
                                                {label: 'kilometers(km)', value: 1},
                                                {label: 'miles(mi)', value: 2},
                                            ]}
                                            placeholder = 'Select units'
                                            containerStyle={{height: 40,width: '70%'}}
                                            onChangeItem={item => console.log(item.label, item.value)}
                                        />
                                    </View>
                            </View>

                    </Card>
                    <Card style = {{...styles.cards,...{backgroundColor: colors.lightPink, marginTop: 40}}}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5}}> 
                            lifting goals: goes to new screen eventually
                        </Text>
                            <View style = {{alignItems: 'center', padding: 10, width: '90%',}}> 
                                    <Button 
                                        title = "Enter/Change your Goals" 
                                        //onPress = {confirmInputHandler} 
                                        color = {colors.primary}
                                    /> 
                            </View>
                    </Card>
                    <Card style = {{...styles.cards,...{backgroundColor: colors.purple}}}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5}}> Nutrition goals: </Text>
                            <View style = {{alignItems: 'center', padding: 10, width: '90%',}}> 
                                <Button 
                                    title = "Enter/change nutrition goals" 
                                    //onPress = {() => navigation.navigate('NutritionGoals', {screen: 'NutritionGoals'})} 
                                    color = {colors.primary}
                                /> 
                            </View>
                    </Card>
                    </View>
                </ScrollView>
            </View>
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
    cards:{
        width: 900,
        marginVertical: 20,
        maxWidth: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 300,
        maxHeight: '25%'
    },
    inputFields:{
        width: '30%',
        alignSelf: 'center',
        height: 50,
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
        paddingVertical: 15
    },

});

export default SettingGoal;