import React from 'react';
import { Button, View,StyleSheet,SafeAreaView,} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// importing other files in app
import Card from './Components/Card';
import colors from './Constants/colors'
import Nutrition from './Screens/Nutrition';
import TrackingProgress from './Screens/TrackingProgress';
//import OpenStreetMaps from './Components/Geolocation';
import TrackYourRun from './Screens/TrackYourRun';
import WeightLifting from './Screens/WeightLifting';
import { Icon } from 'native-base';

import SettingGoal from './Screens/SettingGoal';
import Profile from './Screens/Profile';
import MainScreen from './Screens/MainScreen';
import PracticeScreen from './Screens/PracticeScreen';
//import OpenStreetMapScreen from './Components/Geolocation';


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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType ={"slide"} 
        drawerStyle = {{backgroundColor:'#BEC6CD',paddingLeft: 15 , width: '75%'}}  initialRouteName="Home">
        <Drawer.Screen name ="User Profile" component={Profile}
          options ={{
            drawerIcon: () => <Icon name = "user" 
            type = "Entypo" size = {30} 
            style = {{color:colors.seaGreen}}
              />
            }}/>
        <Drawer.Screen
          name ="Home" component={MainScreen}
          options ={{
            drawerIcon: () => <Icon name = "home" size = {30}
            style = {{color:colors.orange}}
            />
          }}
        />
        <Drawer.Screen 
          name ="Setting Goals" component={SettingGoal}
          options ={{
            drawerIcon: () => <Icon name = "light-bulb" 
            type = "Entypo" size = {30} style = {{color:colors.lightBlue}}
            />
          }}
        />
        <Drawer.Screen 
          name ="Nutrition" component={Nutrition}
          options ={{
            drawerIcon: () => <Icon name = "food"
            type = "MaterialCommunityIcons"size = {30} style = {{color:colors.primary}}
            />
        }}/>
        <Drawer.Screen 
          name ="Tracking Progress" component={TrackingProgress}
          options ={{
            drawerIcon: () => <Icon name = "rocket" 
            size = {30}
            style = {{color:"red"}}/>
        }}/>
        <Drawer.Screen 
          name ="Weightlifting" component={WeightLifting}
          options ={{drawerIcon: () => 
          <Icon name = "weight" type = "MaterialCommunityIcons"  
          size = {30} style = {{color: colors.secondary}}/>
        }}/>
        <Drawer.Screen 
          name ="Track your run" 
          component={TrackYourRun}
          options ={{drawerIcon: () => 
          <Icon name = "running" type = "FontAwesome5"size = {30} />
        }}/>
        <Drawer.Screen name ="Practice Screen" component={PracticeScreen}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
      width: 500,
      alignContent: 'center',
      justifyContent: 'center',
      maxWidth: '90%'
  },
  Navigation:{
    backgroundColor: colors.orange,
  },
  screen: {
    backgroundColor: colors.lightBlue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonNav:{
    margin: 15,
    width: 200,
    maxWidth: '80%'
  },
});