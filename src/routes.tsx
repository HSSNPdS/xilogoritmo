import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Obras from './pages/Obras';
import ObrasView from './pages/ObrasView';
import Metadados from './pages/Metadados';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Landing" component={Landing}/>
        <AppStack.Screen name="Obras" component={Obras}/>
        <AppStack.Screen name="ObrasView" component={ObrasView}/>
        <AppStack.Screen name="Metadados" component={Metadados}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;