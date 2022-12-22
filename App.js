import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SigninScreen from "./src/screens/SigninScreen";
import SignUpScreen from "./src/screens/SignupScreen";
import DetailsScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackList";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import LoadingScreen from "./src/screens/LoadinScreen";

import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token != null ? (
        <Tab.Navigator>
          <Tab.Screen name="TrackListScreen" component={TrackListScreen} />
          <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
          <Tab.Screen name="AccountScreen" component={AccountScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoadingScreen"
            component={LoadingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn" 
          component={SigninScreen} />
          <Stack.Screen name="TrackDetailScreen" component={DetailsScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

const MyApp = App;

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
