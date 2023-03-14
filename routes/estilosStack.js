import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/estilos";
import Open from "../screens/estilosOpen";

const Stack = createStackNavigator();

export default function EstilosStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Estilos de Via"
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