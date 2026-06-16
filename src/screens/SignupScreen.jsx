import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert
} from "react-native";

export default function SignupScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async () => {
  if (!email || !password || !confirm) {
    Alert.alert("Error", "Fill all fields");
    return;
  }

  if (password !== confirm) {
    Alert.alert("Error", "Passwords don't match");
    return;
  }

  try {
    // Create user in Firebase Authentication
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );

    const uid = userCredential.user.uid;

    // Save user data in Firestore
    await firestore()
      .collection("users")
      .doc(uid)
      .set({
        email: email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    Alert.alert("Success", "Account created successfully!");

    navigation.navigate("Login");
  } catch (error) {
    console.log(error);

    if (error.code === "auth/email-already-in-use") {
      Alert.alert("Error", "Email already exists");
    } else if (error.code === "auth/invalid-email") {
      Alert.alert("Error", "Invalid email");
    } else if (error.code === "auth/weak-password") {
      Alert.alert("Error", "Password should be at least 6 characters");
    } else {
      Alert.alert("Error", error.message);
    }
  }
};
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Prudence</Text>

        <Text style={styles.subtitle}>
          Create your account ✨
        </Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.title}>
          Sign Up
        </Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
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

        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
          value={confirm}
          onChangeText={setConfirm}
        />

        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignup}
        >
          <Text style={styles.signupText}>
            Create Account
          </Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.accountText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.login}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#2436B8",
    justifyContent: "center",
    paddingHorizontal: 25
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40
  },

  logo: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold"
  },

  subtitle: {
    color: "#D7DBFF",
    marginTop: 8,
    fontSize: 16
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 28,
    elevation: 10
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center"
  },

  input: {
    backgroundColor: "#F4F5FA",
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    fontSize: 16
  },

  signupButton: {
    backgroundColor: "#2436B8",
    paddingVertical: 18,
    borderRadius: 15,
    marginTop: 10
  },

  signupText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700"
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25
  },

  accountText: {
    color: "#666"
  },

  login: {
    color: "#2436B8",
    marginLeft: 6,
    fontWeight: "700"
  }

});