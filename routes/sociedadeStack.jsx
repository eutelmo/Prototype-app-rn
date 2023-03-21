import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/sociedade";
import Open from "../screens/openArticle";

const Stack = createStackNavigator();

export default function SociedadeStack() {
  return (
    <Stack.Navigator initialRouteName="Sociedade">
      <Stack.Screen
        name="Sociedade"
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
