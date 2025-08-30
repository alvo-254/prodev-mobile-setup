import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "../styles";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Title */}
        <Text style={styles.largeText}>Welcome Back!</Text>
        <Text style={styles.placeholderText}>
          Enter your email and password to sign in.
        </Text>

        {/* Email Input */}
        <View style={styles.formGroup}>
          <TextInput
            placeholder="Email"
            style={styles.inputField}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.passwordGroup}>
          <TextInput
            placeholder="Password"
            style={styles.inputField}
            secureTextEntry
          />
        </View>

        {/* Forgot Password */}
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.socialMediaButton, { backgroundColor: "#4A90E2" }]}
        >
          <Ionicons name="log-in-outline" size={20} color="white" />
          <Text style={[styles.socialMediaText, { color: "white" }]}>
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Social Login */}
        <View style={styles.navGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Image
              source={require("@/assets/images/google.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.socialMediaText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <Image
              source={require("@/assets/images/facebook.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.socialMediaText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
