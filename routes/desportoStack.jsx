import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/desporto";
import Open from "../screens/openArticle";

import StackHeader from "../shared/stackHeader";

const Stack = createStackNavigator();

export default function DesportoStack() {
  return (
    <Stack.Navigator
      initialRouteName="Desporto"
      screenOptions={{ header: StackHeader }}
    >
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
          title: "desporto",
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
