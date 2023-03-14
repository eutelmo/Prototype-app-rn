import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/sociedade";
import Open from "../screens/sociedadeOpen";

const Stack = createStackNavigator();

export default function SociedadeStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sociedade"
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