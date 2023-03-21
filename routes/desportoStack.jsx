import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/desporto";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function DesportoStack() {
  return (
    <Stack.Navigator initialRouteName="Desporto">
      <Stack.Screen
        name="Desporto"
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
