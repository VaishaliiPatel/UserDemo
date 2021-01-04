import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen/Homescreen';
import { Alert, Button, Image, StyleSheet, Text } from 'react-native';
import { create } from 'react-test-renderer';
// import AddUser from './AddUserScreen/AddUser';
const Stack = createStackNavigator()

export default class Container extends Component {
    navigationRef: any;
    constructor(props: any) {
        super(props)
        this.state = {
        };
        this.navigationRef = React.createRef();
    };
    
    render() {
        return (
            <NavigationContainer ref={this.navigationRef}>
                <Stack.Navigator initialRouteName={"User Data"} screenOptions={{
                    headerStyle: {
                        backgroundColor: '#436EEE',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} >
                    <Stack.Screen
                        component={HomeScreen}
                        name="User Data" 
                        />
                    {/* <Stack.Screen
                        component={AddUser}
                        name="AddUser" /> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const style = StyleSheet.create({
    HeaderStyle:{}
})