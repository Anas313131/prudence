import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Image,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    "393526742914-1ooaup67kobvaqifq23lcvtuhibpfcva.apps.googleusercontent.com",
});

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);

      Alert.alert("Success", "Logged in successfully");

      navigation.replace("Home");
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const response = await GoogleSignin.signIn();

      const idToken = response.data?.idToken;

      if (!idToken) {
        Alert.alert("Error", "No ID Token received");
        return;
      }

      const googleCredential =
        auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(
        googleCredential
      );

      Alert.alert("Success", "Google Login Success");

      navigation.replace("Home");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Google Login Error",
        error.message
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Prudence</Text>
        <Text style={styles.subtitle}>
          Welcome back 👋
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>
            Login
          </Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.accountText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signup}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <Image
            source={require("../assets/google.png")}
            style={{
              width: 22,
              height: 22,
              resizeMode: "contain",
            }}
          />

          <Text style={styles.googleText}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2436B8",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },

  logo: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#D5D8FF",
    marginTop: 8,
    fontSize: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 30,
    elevation: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 25,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#F4F5FA",
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },

  loginButton: {
    backgroundColor: "#2436B8",
    paddingVertical: 18,
    borderRadius: 15,
  },

  loginText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  accountText: {
    color: "#666",
  },

  signup: {
    color: "#2436B8",
    marginLeft: 6,
    fontWeight: "700",
  },
  googleButton: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  googleText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});