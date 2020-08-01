import React, {useState} from 'react';
import {
    View,Text,StyleSheet,TouchableWithoutFeedback,Button,Keyboard,Alert
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import Card from '../Components/Card';
import Input from '../Components/Input';
import Header from '../Components/Header';
import Colors from '../Constants/colors';
import NumberContainer from '../Components/summaryContainer'
import { Container } from 'native-base';
import RunChart from '../Components/RunningLineChart';
import { ScrollView } from 'react-native-gesture-handler';
// imports all color themes and can become more estensive 

const TrackYourRun = props => {
    const navigation = useNavigation();
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
        // this is a regular expression that removes any non numerical 
        // value 
    };
    const locationHandler = () => {
        //<Geolocation />
        <Text> locations should be happening now</Text>
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 9999 ){
            Alert.alert(
                "Alert Number", 
                "The fuck is your problem bro", 
                [
                    {
                        text:"Okay", 
                        onPress: resetInputHandler, 
                        style: "destructive"
                    }
                ]
            );//which throws an alert
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue(''); //qued for next rendeer cycle
        Keyboard.dismiss();
    };
    let confirmedOutput;

    if(confirmed){
        confirmedOutput = 
            <Card style = {styles.inputContainer}> 
                <Text style = {{alignItems:'center'}}> Chosen Number: </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title = "START GAME" onPress = {() => props.onStartGame(selectedNumber)} />
            </Card>
    }

    return(
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss();}}>
        <Container>
            <Header title = {'Running Station'} />
                <ScrollView>
                <View style ={styles.screen}>
                <Card style = {styles.inputContainer}>
                    <Text style = {{fontSize: 20, marginVertical: 10}}> Start your Run! </Text>
                    <View style = {styles.ButtonContainer}>
                        <View style = {styles.Button}> 
                            <Button 
                                title = "Cancel" 
                                onPress = {resetInputHandler} 
                                color = {Colors.lightSeaGreen}
                            />  
                        </View>
                        <View style = {styles.Button}> 
                            <Button 
                                title = "Start" 
                                onPress = {locationHandler} 
                                color = {Colors.primary}/> 
                        </View>
                    </View>
                </Card>
                <Card style = {styles.inputContainer}>
                    <Text style = {{fontSize: 20, marginBottom: 15}}> Stop Run </Text>
                    <View style = {{alignContent: 'center'}}>
                            <Button 
                                title = "Press to stop" 
                                onPress = {resetInputHandler} 
                                color = {Colors.primary}
                            />  
                    </View>
                </Card>
                <Card style = {styles.inputContainer}>
                    <View style = {{alignContent: 'center'}}>
                        <Text style = {{fontSize: 20, marginBottom: 15}}> Current Run Stats: </Text>
                        <Text>Total run time today: [insert data]</Text>
                        <Text>Overall run time: [data data data]  </Text>
                    </View>
                </Card>
                <RunChart/>
                </View>
            </ScrollView>

        </Container>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    Input:{
        width: 200,
        textAlign: 'center',
    },
    screen:{
        flex:1,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    ButtonContainer:
    {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    inputContainer:{
        marginVertical: 15,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    Button:{
        width: 90,
    },
    Confirm:{
        alignItems: 'center',
        marginTop:30,
        backgroundColor: 'white'
    },
});

export default TrackYourRun;
