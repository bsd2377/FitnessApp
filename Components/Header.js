import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../Constants/colors';
import {Container,Left,Right,Icon,Radio} from 'native-base';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Header = props => {
    const navigation = useNavigation();
    return(
        <View style = {styles.Header}>
            <Left style={{ flexDirection: 'row' }}>
              <Icon onPress={() => navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 20, width: 32}} />
            </Left>
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Text style = {{fontSize: 20, fontWeight: 'bold',textAlign: 'center',marginBottom:5, color: 'white'}} >{props.title} </Text>
            </View>
            <Right>
              <Icon name="md-cart" style={{ color: 'white' }} />
            </Right>
        </View>
    );
};

const styles =  StyleSheet.create({
    Header:{
        flexDirection: 'row',
        width: '100%',
        height: 90,
        paddingTop: 36,
        paddingHorizontal: 15,
        backgroundColor: Colors.gold,
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderTitle:{
        color: 'black',
        fontSize: 18,
    }

});

export default Header; 