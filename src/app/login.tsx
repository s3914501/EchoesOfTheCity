import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/echoes-login-logo.jpg")}
          style={styles.logo}
          contentFit="contain"
        />

        <Text style={styles.title}>ECHOES OF THE CITY</Text>

        <Text style={styles.subtitle}>
          Discover places, plants your memories.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
          />

          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>

        <View style={styles.bottomRow}>
          <Pressable
            onPress={() => {
              console.log("Sign Up pressed");
            }}
          >
            <Text style={styles.signUp}>Sign Up</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.nextButton,
              pressed && styles.nextButtonPressed,
            ]}
            onPress={() => {
              router.push("/question");
            }}
          >
            <Text style={styles.nextText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logo: {
    width: 185,
    height: 185,
    marginBottom: 8,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "500",
    letterSpacing: 0.5,
    marginTop: 2,
  },

  subtitle: {
    color: "#BDBDBD",
    fontSize: 11,
    marginTop: 16,
    letterSpacing: 0.1,
  },

  form: {
    width: "84%",
    marginTop: 54,
  },

  label: {
    color: "#67D4D0",
    fontSize: 15,
    marginBottom: 8,
  },

  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 24,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  bottomRow: {
    width: "84%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  signUp: {
    color: "#67D4D0",
    fontSize: 15,
  },

  nextButton: {
    width: 140,
    height: 56,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#67D4D0",
    backgroundColor: "#1C6F70",
    alignItems: "center",
    justifyContent: "center",
  },

  nextButtonPressed: {
    opacity: 0.7,
  },

  nextText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "500",
  },
});
