//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
//import Icon from "react-native-vector-icons/FontAwesome";
//
//export default class MaterialBottomNav extends React.Component {
//    render() {
//        return (
//            <AppContainer />
//        );
//    }
//}
//
//class HomeScreen extends React.Component {
//    render() {
//        return(
//            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                <Text> This is my Home screen </Text>
//            </View>
//        );
//    }
//}
//
//class ExploreScreen extends React.Component {
//    render() {
//        return(
//            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
//                <Text> This is my Explore screen </Text>
//            </View>
//        );
//    }
//}
//
//class NotificationsScreen extends React.Component {
//    render() {
//        return(
//            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
//                <Text> This is my Notifications screen </Text>
//            </View>
//        );
//    }
//}
//
//class ProfileScreen extends React.Component {
//    render() {
//        return(
//            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
//                <Text> This is my Profile screen </Text>
//            </View>
//        );
//    }
//}
//
//const bottomTabNavigator = createBottomTabNavigator(
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
//
//const AppContainer = createAppContainer(bottomTabNavigator);