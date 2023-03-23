import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

//Fonts Import
import { useFonts } from "expo-font";

// import Tab screen
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//import Stack
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "./routes/homeStack";
import Ambiente from "./routes/ambienteStack";
import Ciencia from "./routes/cienciaStack";
import Cultura from "./routes/culturaStack";
import Desporto from "./routes/desportoStack";
import Estilos from "./routes/estilosStack";
import Gastroniomia from "./routes/gastronomiaStack";
import Saude from "./routes/saudeStack";

// import Header
import Header from "./shared/header";

export default function App() {
  //Fonts Import loader
  const [loaded] = useFonts({
    RegularFont: require("./assets/fonts/Montserrat-Regular.ttf"),
    SemiBoldFont: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    BoldFont: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  // Tab Screen
  const Tab = createMaterialTopTabNavigator();
  const TabsNavigate = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarPosition="top"
        keyboardDismissMode="on-drag"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: "#06EA80",
          },
          tabBarActiveTintColor: "#06EA80",
          tabBarInactiveTintColor: "#333",
        }}
      >
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="GASTRONOMIA" component={Gastroniomia} />
        <Tab.Screen name="ESTILOS DE VIdA" component={Estilos} />
        <Tab.Screen name="CULTURA" component={Cultura} />
        <Tab.Screen name="DESPORTO" component={Desporto} />
        <Tab.Screen name="CIÊNCIA" component={Ciencia} />
        <Tab.Screen name="SAÚDE" component={Saude} />
        <Tab.Screen name="AMBIENTE" component={Ambiente} />
      </Tab.Navigator>
    );
  };

  //stack
  const Stack = createStackNavigator();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            tabBarAndroidRipple: { borderless: false },
            tabBarPressColor: "#333",
            tabBarScrollEnabled: false,
            swipeEnabled: true,
            header: Header,
          }}
        >
          <Stack.Screen name="Tabs" component={TabsNavigate} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
