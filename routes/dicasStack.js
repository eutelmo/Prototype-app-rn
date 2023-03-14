import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/dicas";
import Open from "../screens/dicasOpen";

const Stack = createStackNavigator();

export default function DicasStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Boas Dicas"
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