import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
  } from "react-native";
import useUser from "../../hooks/useUser";
import Footer from '../../pages/Footer';


export default function Login({ onLogin }) {
  const [email, setStateEmail] = useState("");
  const [password, setStatePassword] = useState("");
  const [emailValidate, setStateEmailValidate] = useState("");
  const [passwordValidate, setStatePasswordValidate] = useState("");
  const { isLoginLoading, hasLoginError, login, isLogged, token } = useUser();

  useEffect(() => {
    if (isLogged) {
      onLogin && onLogin();
    }
  }, [isLogged, onLogin]);

  const onChangeEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
        setStateEmailValidate('Email is Not Correct')
        setStateEmail(text)
        return false;
    }
    else {
        setStateEmail(text)
        setStateEmailValidate('Email is Correct')
    }
  }

  const onChangePassword = (text) => {
    if (text) {
        setStatePasswordValidate('Password is Correct')
        setStatePassword(text)
        return false;
    }
    else {
        setStatePassword(text)
        setStatePasswordValidate('Password is Not Correct')
    }
  }

  const handleSubmit = () => {
    login({ email, password });
  };

  return (
    <>
      {isLoginLoading && <Text style={styles.linkText}>Checking credentials...</Text>}
      {!isLoginLoading && (
        <View style={styles.content}>
          <TextInput
            style={[styles.input, styles.inputUsername]}
            placeholder="email"
            placeholderTextColor="#cdcdcf"
            value={email}
            onChangeText={(text) => onChangeEmail(text)}
          />
           <View style={styles.link}>
             <Text style={styles.linkText}>{emailValidate}</Text>
           </View>
            
          <TextInput
            style={[styles.input, styles.inputPassword]}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor="#cdcdcf"
            value={password}
            onChangeText={(text) => onChangePassword(text)}
          />
          <View style={styles.link}>
            <Text style={styles.linkText}>{passwordValidate}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text testID="login" style={styles.buttonText}>Login Submit</Text>
          </TouchableOpacity>
          {(token !== '') && <Text style={styles.linkText}>Login - successful</Text>}
          {hasLoginError && <Text style={styles.linkText}>Credentials are invalid</Text>}
          <Footer />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
    content: {
      padding: 22,
    },
    input: {
      borderWidth: 1,
      borderColor: "#cdcdcf",
      color: "#333333",
      fontSize: 16,
      height: 44,
      paddingHorizontal: 15,
    },
    inputUsername: {
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
    },
    inputPassword: {
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
    },
    button: {
      height: 42,
      borderRadius: 6,
      backgroundColor: "#1977f3",
      justifyContent: "center",
      marginVertical: 15,
    },
    buttonText: {
      color: "#b4cafb",
      textAlign: "center",
      fontSize: 16,
    },
    link: {
      paddingVertical: 8,
    },
    linkText: {
      color: "#1c6ede",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "500",
    },
  });