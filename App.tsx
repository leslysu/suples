import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from './src/navigation/StackNavigation';
import { Screen1 } from './src/screen/Screen1';



  const App = () => {
    return (
     <NavigationContainer>
      {/* <StackNavigator/> */}
      <Screen1/>
     </NavigationContainer>
    )
    }
    export default App;
