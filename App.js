import { View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import LandingPage from "./src/components/page/LandingPage";
import LoginPage from "./src/components/page/LoginPage";
import SignUpPage from "./src/components/page/SignUpPage";
import RestorePasswordPage from "./src/components/page/RestorePasswordPage";
import DashboardPage from "./src/components/page/DashboardPage";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex:1, paddingTop: StatusBar.currentHeight,}}>
        <StatusBar style="dark" />
        <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen 
            name="LandingPage" 
            component={LandingPage} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="LoginPage" 
            component={LoginPage} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="SignUpPage" 
            component={SignUpPage} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="RestorePasswordPage" 
            component={RestorePasswordPage} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="DashboardPage" 
            component={DashboardPage} 
            options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>

  );
}
