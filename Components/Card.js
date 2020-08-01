import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import colors from '../Constants/colors';

const Card = props => {
    return(
        <View style = {{...styles.card, ...props.style}}>{props.children}</View>
    ); 
};

const styles = StyleSheet.create({
    card :{
        padding: 10,
        borderRadius: 10,
        marginVertical: 15,
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

export default Card;