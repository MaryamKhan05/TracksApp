import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } =
    useContext(AuthContext);

  {
    /************/
  }
  // useEffect(() => {
  //   tryLocalSignin();
  // }, []);
  {
    /************/
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation, clearErrorMessage]);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker "
        errorMessage={state.errorMessage}
        submitbuttonText="Sign Up"
        onSubmit={signup}
      />

      <NavLink
        routeName="SignIn"
        text="Already have an account? Sign In instead"
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
export default SignUpScreen;
