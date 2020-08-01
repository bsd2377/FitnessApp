import React, {useState , useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button,ScrollView,Dimensions,Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {Container} from 'native-base';
import NumberContainer from '../Components/summaryContainer';

import Card from '../Components/Card';
import RunningMan from '../Images/RunningMan.png';
import colors from '../Constants/colors';
import  Header  from '../Components/Header';


const Profile = props => {
    const navigation = useNavigation();
    return(
        <Container>
            <Header  title = {'Profile Page'} />
        <View style = {styles.screen}>
            <ScrollView>
                <View style = {styles.screen}>
                        <Card style = {{...styles.cards,...{backgroundColor: colors.gold}}}>
                            <View style = {{flexDirection: 'row', alignSelf: 'flex-start',}}>
                                <Image
                                    source= {RunningMan}
                                    style={{ width: 75, height: 75, borderRadius: 200 / 2 }}
                                />
                                <View>
                                    <Text style = {styles.text}> Username: </Text>
                                    <Text style = {styles.text}> Probably more stuff: </Text>
                                </View>
                            </View>
                        </Card>

                        <Card style = {{...styles.cards,...{backgroundColor: colors.gold}}}> 
                            <View>
                                <Text style = {styles.text}> Quick Tracking info: </Text>
                            </View>
                        </Card>
                        <Card style = {styles.cards}> 
                            <Text style = {styles.text}> Progress:  </Text>
                        </Card>
                </View>
            </ScrollView>
        </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom:5
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    inScroll: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Buttons:{
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        width: '80%'
    },
    cards:{
        width: 500,
        marginVertical: 20,
        maxWidth: '95%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: "flex-start",
        height: 200,
        maxHeight: '25%'
    },
})

export default Profile;