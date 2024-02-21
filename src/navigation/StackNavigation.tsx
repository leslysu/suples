import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screen/Screen1';
import { Screen2 } from '../screen/Screen2';
import { Screen3 } from '../screen/Screen3';

const Stack = createStackNavigator();
   
export const StackNavigator=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen 3" component={Screen3} />

    </Stack.Navigator>
  );
}