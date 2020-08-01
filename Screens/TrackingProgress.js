import React, {useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Card from '../Components/Card';
import colors from '../Constants/colors';
import { Container } from 'native-base';

const TrackingProgress = props => {

    const navigation = useNavigation();
    return(
        <Container>
            <View style = {styles.screen}>
                <Card style = {{...styles.cards,...{backgroundColor: colors.lightBlue}}}>
                    <Text> distance info:</Text>
                </Card>
                <Card style = {{...styles.cards,...{backgroundColor: colors.orange}}}>
                    <Text> Weightlifting info </Text>
                </Card>
                <Card style = {{...styles.cards,...{backgroundColor: colors.lightPink,}}}>
                    <Text>sleep and water intake: </Text>
                </Card>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cards:{
        width: 900,
        margin: 10,
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1000,
        maxHeight: '20%',
    }
});

export default TrackingProgress;