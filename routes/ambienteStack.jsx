import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/ambiente";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function AmbienteStack() {
  return (
    <Stack.Navigator initialRouteName="Ambiente">
      <Stack.Screen
        name="Ambiente"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
        component={Open}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "Ambiente"
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
