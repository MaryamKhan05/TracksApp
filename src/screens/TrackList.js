import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TrackDetailScreen from "./TrackDetailScreen";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("TrackDetailScreen")}
        title="go to track detail"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
