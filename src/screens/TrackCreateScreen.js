// import "../mockLocation";
import React, { useContext, useEffect, useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({}) => {
  const isFocused = useIsFocused();
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, state.recording);
  },[state.recording]);

  const [err] = useLocation(isFocused||state.recording, callback);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({});

export default TrackCreateScreen;
