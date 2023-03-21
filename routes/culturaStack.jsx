import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/cultura";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function CulturaStack() {
  return (
    <Stack.Navigator initialRouteName="Cultura">
      <Stack.Screen
        name="Cultura"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
        component={Open}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: 'Saúde'
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
