
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font';

//import the screens (navigation pages)
import Home from "./screens/Home";
import Details from "./screens/Details";

//To get our stack
const Stack = createStackNavigator();
//creating our custom theme from the default theme
const theme = {
  //spread all the elements of the default theme, access the colors, 
  //spread the defaultTheme.colors, then change the background to transparent
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
