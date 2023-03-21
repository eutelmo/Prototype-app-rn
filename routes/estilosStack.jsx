import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/estilos";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function EstilosStack() {
  return (
    <Stack.Navigator initialRouteName="Estilos">
      <Stack.Screen
        name="Estilos"
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
