import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/desporto";
import Open from "../screens/desportoOpen";

const Stack = createStackNavigator();

export default function DesportoStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Desporto"
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