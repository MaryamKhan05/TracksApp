import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation, clearErrorMessage]);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In To Tracker "
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitbuttonText="Sign In"
      />

      <NavLink
        routeName="SignUp"
        text="Don't have an account? Sign Up instead"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
