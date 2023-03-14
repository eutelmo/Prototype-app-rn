import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/ciencia";
import Open from "../screens/cienciaOpen";

const Stack = createStackNavigator();

export default function CienciaStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CIÊNCIA E TECNOLOGIA"
        component={Open}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}