import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Category from "../screens/home";
import Open from "../screens/openArticle";

import StackHeader from "../shared/stackHeader";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ header: StackHeader }}
    >
      <Stack.Screen
        name="Home"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="openArticle"
        component={Open}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "Home",
        }}
        screenOptions={{
          animationTypeForReplace: "push",
        }}
        navigationOptions={{ tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
}
