import React from "react";
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";

export default function Footer() {
  return (
    <>
      <View style={styles.footer}>
          <View style={[styles.button, styles.buttonRegister]}>
            <Text style={[styles.buttonText, styles.buttonRegisterText]}>Martin Lopez</Text>
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    button: {
      height: 42,
      borderRadius: 6,
      justifyContent: "center",
      marginVertical: 15,
    },
    buttonText: {
      color: "#b4cafb",
      textAlign: "center",
      fontSize: 16,
    },
    footer: {
      alignItems: "center",
      padding: 22,
      paddingBottom: 0,
    },
    buttonRegister: {
      width: "100%",
    },
    buttonRegisterText: {
      color: "#1077f7",
    },
  });