import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/estilos";
import Open from "../screens/openArticle";

import StackHeader from "../shared/stackHeader";

const Stack = createStackNavigator();

export default function EstilosStack() {
  return (
    <Stack.Navigator
      initialRouteName="Estilos"
      screenOptions={{ header: StackHeader }}
    >
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
          title: "Estilos de Vida",
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
