import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/gastronomia";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function GastronomiaStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
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