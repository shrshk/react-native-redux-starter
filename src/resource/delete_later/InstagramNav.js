import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> This is my Home screen </Text>
        </View>
    );
};

const ExploreScreen = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
            <Text> This is my Explore screen </Text>
        </View>
    );
};

function InstagramNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={ExploreScreen} />
        </Tab.Navigator>
    );
}

export default InstagramNav;

//
//const NotificationsScreen = () => {
//    return(
//        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
//            <Text> This is my Notifications screen </Text>
//        </View>
//    );
//};
//
//const ProfileScreen = () => {
//    return(
//        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
//            <Text> This is my Profile screen </Text>
//        </View>
//    );
//};
//
//export const InstagramNav = createBottomTabNavigator(
//    {
//        Home: {
//            screen: HomeScreen,
//            navigationOptions: {
//                tabBarIcon: ({ tintColor }) => (
//                    <Icon name="home" size={25} color={tintColor} />
//                )
//            }
//        },
//        Explore: {
//            screen: ExploreScreen,
//            navigationOptions: {
//                tabBarIcon: ({ tintColor }) => (
//                    <Icon name="comments" size={25} color={tintColor} />
//                )
//            }
//        },
//        Notifications: {
//            screen: NotificationsScreen,
//            navigationOptions: {
//                tabBarIcon: ({ tintColor }) => (
//                    <Icon name="search" size={25} color={tintColor} />
//                )
//            }
//        },
//        Profile: {
//            screen: ProfileScreen,
//            navigationOptions: {
//                tabBarIcon: ({ tintColor }) => (
//                    <Icon name="user" size={25} color={tintColor} />
//                )
//            }
//        },
//    },
//    {
//        initialRouteName: 'Home',
//        tabBarOptions: {
//            activeTintColor: '#eb6e3d'
//        }
//    }
//);