import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/estilos";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function EstilosStack() {
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
          title: 'Estilos de Vida'
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}