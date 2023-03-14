import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/saude";
import Open from "../screens/saudeOpen";

const Stack = createStackNavigator();

export default function SaudeStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Saude"
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