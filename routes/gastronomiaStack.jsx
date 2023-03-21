import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/gastronomia";
import Open from "../screens/openArticle";

import StackHeader from "../shared/stackHeader";

const Stack = createStackNavigator();

export default function GastronomiaStack() {
  return (
    <Stack.Navigator
      initialRouteName="Gastronomia"
      screenOptions={{ header: StackHeader }}
    >
      <Stack.Screen
        name="Gastronomia"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
        component={Open}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "Gastronomia",
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
