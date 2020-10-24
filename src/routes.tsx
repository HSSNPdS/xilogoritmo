import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from './pages/Landing';

const {Navigator, Screen} = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="LandingPage" component={Landing}/>
      </Navigator>
    </NavigationContainer>
  )
}