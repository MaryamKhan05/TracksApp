import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TrackDetailScreen from "./TrackDetailScreen";

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        onPress={() => navigation.navigate("TrackDetailScreen")}
        title="go to track detail"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
