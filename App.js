import "react-native-gesture-handler";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";

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

import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token != null ? (
        <Tab.Navigator>
          <Tab.Screen
            options={{ headerShown: false }}
            name="TrackListScreen"
            component={TrackListScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="TrackCreateScreen"
            component={TrackCreateScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="AccountScreen"
            component={AccountScreen}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="LoadingScreen"
            component={LoadingScreen}
          /> */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SigninScreen}
          />
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
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
