import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/insolito";
import Open from "../screens/insolitoOpen";

const Stack = createStackNavigator();

export default function InsolitoStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Insolito"
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