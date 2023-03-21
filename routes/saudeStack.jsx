import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/saude";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function SaudeStack() {
  return (
    <Stack.Navigator initialRouteName="Saude">
      <Stack.Screen
        name="Saude"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
        component={Open}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: 'Saude'
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
