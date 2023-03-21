import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/sociedade";
import Open from "../screens/openArticle";

import StackHeader from "../shared/stackHeader";

const Stack = createStackNavigator();

export default function SociedadeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Sociedade"
      screenOptions={{ header: StackHeader }}
    >
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
          title: "Sociedade",
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}
