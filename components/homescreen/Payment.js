import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
import StripeApp from "../stripe/StripeApp"
export default function Payment() {
  return (
    <StripeProvider publishableKey="pk_test_51KMJCzJjz4NZgBf7m96z90sCInlvuk2lDuJq2nKEu6PNZyKFx9KxTC2g6DGcgMYtHjYPG2nNrwsL90dxMGeFxi3F00BlnXR8FB">
      <StripeApp/>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});