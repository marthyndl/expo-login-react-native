import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import Login from "./src/pages/Login";
import MobileLogin from "./assets/mobile-login.jpg";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Technical challenge Prokeep</Text>
        <Text style={styles.loginText}>Login</Text>
        <Image source={MobileLogin} style={styles.banner} />
        <Login />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "50%",
    height: "20%",
    aspectRatio: 750 / 460,
  },
  container: {
    margin: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'initial',
  },
  titleText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  loginText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});
