import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/home";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
   
    >
      <Stack.Screen name="hm" component={Category}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}