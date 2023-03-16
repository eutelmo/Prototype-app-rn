import { createStackNavigator } from "@react-navigation/stack";

import Ambiente from "../screens/ambiente";
import AmbienteOpen from "../screens/openArticle";

const Stack = createStackNavigator();

export default function AmbienteStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Ambiente}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
        component={AmbienteOpen}
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
