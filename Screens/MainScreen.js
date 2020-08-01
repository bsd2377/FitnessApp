import React, {useState} from 'react';
import {View, Text, SafeAreaView,StyleSheet,Button,ImageBackground,} from 'react-native';
import {Container,Left,Right,Icon,Radio} from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import Card from '../Components/Card';
import colors from '../Constants/colors';
import Nutrition from './Nutrition';
import TrackYourRun from './TrackYourRun';
import RunningMan from '../Images/RunningMan.png';
import Header from '../Components/Header';

const Drawer = createDrawerNavigator();

const MainScreen = props => {
    const navigation = useNavigation();
        return (
            <Container>
            <Header title ={'Main Screen'}/> 
            <View style = {styles.screen}>               
              <ImageBackground source={RunningMan} style={{resizeMode: 'contain'}}>
                <View style = {styles.InImage}> 
                  <View style = {{marginTop: '90%'}}>
                      <Card style = {{marginTop: 25, justifyContent:'center',alignItems:  'center'}}> 
                          <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5}}> 
                              Welcome to the (full potential) fitness App! </Text>
                          <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center'}}> 
                              the one stop shop to accomplish your fitness goals </Text>
                      </Card>
                  </View>
                </View>

              </ImageBackground>
            </View>
            </Container>
        );

};

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.gold,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
        cards:{
        width: 900,
        marginVertical: 20,
        maxWidth: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxHeight: '25%'
    },
    InImage: {
        flex:1,
        marginVertical: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }
});

export default MainScreen;