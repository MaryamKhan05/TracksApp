// import "../mockLocation";
import React, { useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({}) => {

  const isFocused = useIsFocused();
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
