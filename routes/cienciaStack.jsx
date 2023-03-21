import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/ciencia";
import Open from "../screens/openArticle";

import StackHeader from "../shared/stackHeader";

const Stack = createStackNavigator();

export default function CienciaStack() {
  return (
    <Stack.Navigator
      initialRouteName="Ciencia"
      screenOptions={{ header: StackHeader }}
    >
      <Stack.Screen
        name="Ciencia"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
        component={Open}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "Ciência",
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
