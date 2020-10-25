import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from './pages/Landing';
import Create from './pages/Create';

const {Navigator, Screen} = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#f2f3f4'}}}>
        <Screen name="LandingPage" component={Landing}/>
        <Screen name="CreatePage" component={Create}/>
      </Navigator>
    </NavigationContainer>
  )
}