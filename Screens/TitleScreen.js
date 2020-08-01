import React, {useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import Card from '../Components/Card';
import Colors from '../Constants/colors';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const TitleScreen = props => {
    return(
        <Card>
            <Text> We In this bitch</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    card: {
        width: 500,
        alignItems: 'center',
        maxWidth: '90%'
    }
});

export default TitleScreen;