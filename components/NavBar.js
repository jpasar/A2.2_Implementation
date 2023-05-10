import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import SearchPage from './Search/SearchPage';
import HomePage from './Home/HomePage';
import DatePlan from './/DatePlan/DatePlan';
import Sos from './SOS/Sos';
import Profile from './Profile/Profile';

//Screen names
const seachName = "SearchPage";
const homeName = "HomePage";
const dateName = "DatePlan";
const sosName = "SOS";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            style: {
                position: 'absoulte',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#fffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
      >
        <Tab.Screen 
            name={seachName} 
            component={SearchPage} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                            source={require('../assets/icons/search.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#D353FF' : '#748c94',
                            }}
                        />
                    </View>
                ),
            }} 
        />
        <Tab.Screen name={homeName} component={HomePage} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#D353FF' : '#748c94',
                            }}
                        />
                    </View>
                ),
            }}     
        />
        <Tab.Screen name={dateName} component={DatePlan} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                            source={require('../assets/icons/add-filled.png')}
                            resizeMode='contain'
                            style={{
                                width: 58,
                                height: 58,
                            }}
                        />
                    </View>
                ),
            }}  
        />
        <Tab.Screen name={sosName} component={Sos} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                            source={require('../assets/icons/sos.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#F44336' : '#748c94',
                            }}
                        />
                    </View>
                ),
            }} 
        />
        <Tab.Screen name={profileName} component={Profile} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                            source={require('../assets/icons/profile.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#D353FF' : '#748c94',
                            }}
                        />
                    </View>
                ),
            }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
  })

export default NavBar;