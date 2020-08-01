/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RunningMan from '../Images/RunningMan.png';
import  Header  from '../Components/Header';
import Input from '../Components/Input';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function PracticeScreen()  {
    const [distance, setDistance] = useState('');
    const distanceInputHandler = (inputText) => {
        setDistance(inputText.replace(/[^0-9]/g,''));
        // this is a regular expression that removes any non numerical value 
    };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header title = " Profile page"/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
          <View style = {{flexDirection: 'row', alignSelf: 'flex-start',paddingTop: 10,paddingLeft:10}}>
                <Image
                    source= {RunningMan}
                    style={{ width: 75, height: 75, borderRadius: 200 / 2 }}
                />
                <View>
                    <Text style = {styles.text}> Username: </Text>
                    <Text style = {styles.text}> Probably more stuff: </Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}> Quick Info </Text>
              <Text style={styles.sectionDescription}>
                Here will be the user quick info
              </Text>
            </View>
            <View style = {{justifyContent: 'center', flexDirection: 'row'}}>
                <View style = {{flexDirection: 'column', width: '70%'}}>
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
                    <DropDownPicker
                        items={[
                            {label: 'day', value: 1},
                            {label: 'week', value: 2},
                            {label: 'month', value: 3},
                            {label: 'year', value: 4},
                        ]}
                        placeholder = 'Select time span'
                        containerStyle={{alignSelf: 'center', height: 40, width: '70%'}}
                        onChangeItem={item => console.log(item.label, item.value)}
                    />
                    <DropDownPicker
                        items={[
                            {label: 'kilometers(km)', value: 1},
                            {label: 'miles(mi)', value: 2},
                        ]}
                        placeholder = 'Select units'
                        containerStyle={{alignSelf: 'center',height: 40,width: '70%'}}
                        onChangeItem={item => console.log(item.label, item.value)}
                    />
                    </View>
                </View>                   
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  text: {
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom:5
},
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  inputFields:{
    width: '60%',
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    backgroundColor: 'grey'
},
});
