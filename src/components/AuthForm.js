import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitbuttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3> {headerText} </Text>
      </Spacer>
      <Input
        label="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Spacer />

      <Input
        secureTextEntry
        label="Password"
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitbuttonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
  },
});

export default AuthForm;
