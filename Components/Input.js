import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return(

        <TextInput  
            {...props}
            style ={{...styles.inputBox, ...props.style}}
        />
    );
};

const styles = StyleSheet.create({
    inputBox:{
        height: 30,
        borderBottomWidth: 2,
        marginVertical: 10,
        borderBottomColor:'black',
        fontSize: 16,
    },
});
export default Input;