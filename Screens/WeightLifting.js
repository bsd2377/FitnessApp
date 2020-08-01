import React, {useState , useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button,Alert, ScrollView} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import NumberContainer from '../Components/summaryContainer';
import Card from '../Components/Card';
import Header from '../Components/Header';
import colors from '../Constants/colors';
import { Container } from 'native-base';


function NotificationsScreen({ navigation }) {
    return (
      <SafeAreaView>
      <View style = {styles.screen}>
        <View style = {{...styles.card,...styles.ButtonNav}}>
          <Button onPress={() => navigation.goBack()} title="Go back home" />
          <Button onPress={() => navigation.openDrawer()} title="Open Screen" />
          <Button onPress={() => navigation.closeDrawer()} title="Close Screen" />
        </View>
      </View>
      </SafeAreaView>
    );
}
const WeightLifting = props => {
    const navigation = useNavigation();
    return(
        <Container>
            <Header title = {'Getting shwole'} />
            <View style = {styles.screen}>
            <ScrollView>
            <View style = {styles.screen}>
                <Card style = {{...styles.cards,...{backgroundColor: colors.lightBlue}}}>
                    <Text> Current Workout Type: </Text>
                    <Button
                        onPress={() => navigation.openDrawer()} 
                        title="Open Screen" 
                    />
                </Card> 
                <Card style = {{...styles.cards,...{backgroundColor: colors.orange}}}>
                    <Text> quick progress</Text>
                </Card>
                <Card style = {{...styles.cards,...{backgroundColor: colors.lightPink,}}}>
                    <Text>goes to chart </Text>
                </Card>
                <Card style = {{...styles.cards,...{backgroundColor: colors.purple}}}>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    Buttons:{
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    cards:{
        width: 900,
        margin: 10,
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        maxHeight: '20%',
    }
})

export default WeightLifting;