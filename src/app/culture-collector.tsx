import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

export default function CultureCollectorScreen() {
  const router = useRouter();
  const safeAreaInsets = useSafeAreaInsets();

  const [gender, setGender] = useState<"male" | "female">("male");

  const characterImage =
    gender === "male"
      ? require("../../assets/images/culture-collector-male.jpg")
      : require("../../assets/images/culture-collector-female.jpg");

  return (
    <View style={styles.screen}>
      <View style={styles.background} />

      <View
        style={[
          styles.header,
          {
            paddingTop: safeAreaInsets.top,
          },
        ]}
      >
        <Pressable
          onPress={() => router.back()}
          hitSlop={10}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.backText}>questions</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.identityLabel}>YOUR CIVIC IDENTITY</Text>

        <Text style={styles.identityTitle}>Culture Collector</Text>

        <View style={styles.characterArea}>
          <Image
            source={characterImage}
            style={styles.characterImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.chooseText}>Choose your character</Text>

        <View style={styles.genderContainer}>
          <Pressable
            onPress={() => setGender("male")}
            style={styles.genderOption}
          >
            <View
              style={[
                styles.genderCircle,
                gender === "male" && styles.genderCircleSelected,
              ]}
            >
              {gender === "male" && <View style={styles.genderInnerCircle} />}
            </View>

            <Text
              style={[
                styles.genderText,
                gender === "male" && styles.genderTextSelected,
              ]}
            >
              Male
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setGender("female")}
            style={styles.genderOption}
          >
            <View
              style={[
                styles.genderCircle,
                gender === "female" && styles.genderCircleSelected,
              ]}
            >
              {gender === "female" && <View style={styles.genderInnerCircle} />}
            </View>

            <Text
              style={[
                styles.genderText,
                gender === "female" && styles.genderTextSelected,
              ]}
            >
              Female
            </Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => router.replace("/home")}
          style={({ pressed }) => [
            styles.selectButton,
            pressed && styles.selectPressed,
          ]}
        >
          <BlurView
            intensity={45}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.buttonFill} />

          <Text style={styles.selectText}>Select</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK,
    overflow: "hidden",
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BLACK,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    zIndex: 30,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 130,
    height: 42,
    marginLeft: 18,
    marginTop: -4,
  },

  backArrow: {
    color: WHITE,
    fontSize: 34,
    fontWeight: "300",
    lineHeight: 34,
    marginRight: 3,
  },

  backText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "400",
  },

  pressed: {
    opacity: 0.6,
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "8.5%",
    paddingTop: 112,
  },

  identityLabel: {
    color: TEAL,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  identityTitle: {
    color: WHITE,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "600",
  },

  characterArea: {
    width: "100%",
    height: 455,
    alignItems: "center",
    justifyContent: "center",
  },

  characterImage: {
    width: "100%",
    height: "100%",
  },

  chooseText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 0,
    marginBottom: 13,
  },

  genderContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 42,
    marginBottom: 18,
  },

  genderOption: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 45,
  },

  genderCircle: {
    width: 27,
    height: 27,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  genderCircleSelected: {
    borderColor: TEAL,
  },

  genderInnerCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: TEAL,
  },

  genderText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: "400",
  },

  genderTextSelected: {
    color: TEAL,
  },

  selectButton: {
    width: 132,
    height: 52,
    borderRadius: 27,
    overflow: "hidden",
    backgroundColor: "rgba(103, 212, 208, 0.10)",
    borderWidth: 1.5,
    borderColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(103, 212, 208, 0.08)",
  },

  selectPressed: {
    transform: [{ scale: 0.97 }],
  },

  selectText: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "500",
    zIndex: 3,
  },
});
