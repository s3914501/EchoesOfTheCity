import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREY = "#B6B6BA";

export default function ShareMemoryScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [place, setPlace] = useState("");
  const [year, setYear] = useState("");
  const [memory, setMemory] = useState("");

  const handleShareMemory = () => {
    if (!place.trim() || !memory.trim()) {
      Alert.alert(
        "Almost there",
        "Please add a place and your memory before sharing.",
      );
      return;
    }

    Alert.alert(
      "Memory shared",
      "Your memory has been added to the city's collective story.",
      [
        {
          text: "Done",
          onPress: () => router.back(),
        },
      ],
    );
  };

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingTop: insets.top + 18,
              paddingBottom: insets.bottom + 120,
            },
          ]}
        >
          {/* BACK */}

          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={WHITE} />

            <Text style={styles.backText}>Home</Text>
          </Pressable>

          {/* HEADER */}

          <Text style={styles.sectionLabel}>MAKE AN ECHO</Text>

          <Text style={styles.title}>Share a memory</Text>

          <Text style={styles.subtitle}>
            Give a place a story. Tell us something{"\n"}
            you remember about your city.
          </Text>

          {/* WHERE */}

          <Text style={styles.questionLabel}>WHERE?</Text>

          <View style={styles.inputCard}>
            <Ionicons name="location-outline" size={23} color={TEAL} />

            <TextInput
              value={place}
              onChangeText={setPlace}
              placeholder="Where did it happen?"
              placeholderTextColor="#77787D"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          {/* WHEN */}

          <Text style={styles.questionLabel}>WHEN?</Text>

          <View style={styles.inputCard}>
            <Ionicons name="calendar-outline" size={22} color={TEAL} />

            <TextInput
              value={year}
              onChangeText={setYear}
              placeholder="What year do you remember?"
              placeholderTextColor="#77787D"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={4}
            />
          </View>

          {/* WHAT */}

          <Text style={styles.questionLabel}>WHAT DO YOU REMEMBER?</Text>

          <View style={styles.memoryInputCard}>
            <TextInput
              value={memory}
              onChangeText={setMemory}
              placeholder="I remember..."
              placeholderTextColor="#77787D"
              style={styles.memoryInput}
              multiline
              textAlignVertical="top"
              maxLength={500}
            />

            <Text style={styles.characterCount}>{memory.length}/500</Text>
          </View>

          {/* PHOTO */}

          <Text style={styles.questionLabel}>
            ADD A PHOTO
            <Text style={styles.optional}> OPTIONAL</Text>
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.photoCard,
              pressed && styles.pressed,
            ]}
            onPress={() =>
              Alert.alert(
                "Add a photo",
                "Photo selection will be connected here.",
              )
            }
          >
            <View style={styles.photoIcon}>
              <Ionicons name="image-outline" size={25} color={TEAL} />
            </View>

            <View style={styles.photoTextContainer}>
              <Text style={styles.photoTitle}>Add an old photo</Text>

              <Text style={styles.photoSubtitle}>
                Bring the memory back to life.
              </Text>
            </View>

            <Ionicons name="add" size={24} color={GREY} />
          </Pressable>

          {/* SHARE BUTTON */}

          <Pressable
            style={({ pressed }) => [
              styles.shareButton,
              pressed && styles.pressed,
            ]}
            onPress={handleShareMemory}
          >
            <Text style={styles.shareButtonText}>Share memory</Text>

            <Ionicons name="arrow-forward" size={20} color={BLACK} />
          </Pressable>

          <Text style={styles.footerText}>
            Your memory becomes part of the city's
            {"\n"}collective story.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* BOTTOM NAVIGATION */}

      <View
        style={[
          styles.bottomNavWrapper,
          {
            bottom: Math.max(insets.bottom, 8),
          },
        ]}
      >
        <BlurView intensity={45} tint="dark" style={styles.bottomNav} />

        <Pressable
          style={[styles.navItem, styles.navItemHome]}
          onPress={() => router.push("/home")}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color="#C5C5C8"
            style={styles.navIcon}
          />

          <Text style={styles.navText}>Home</Text>
        </Pressable>

        <Pressable
          style={[styles.navItem, styles.navItemExplore]}
          onPress={() => router.push("/explore")}
        >
          <Ionicons
            name="map-outline"
            size={25}
            color="#C5C5C8"
            style={styles.navIcon}
          />

          <Text style={styles.navText}>Explore</Text>
        </Pressable>

        <Pressable style={[styles.navItem, styles.navItemMake]}>
          <Ionicons
            name="add-circle"
            size={27}
            color={TEAL}
            style={styles.navIcon}
          />

          <Text style={[styles.navText, styles.navActive]}>Make</Text>
        </Pressable>

        <Pressable style={[styles.navItem, styles.navItemMe]}>
          <Ionicons
            name="person-outline"
            size={25}
            color="#C5C5C8"
            style={styles.navIcon}
          />

          <Text style={styles.navText}>Me</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK,
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 44,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginLeft: -5,
  },

  backText: {
    color: WHITE,
    fontSize: 14,
    marginLeft: 2,
  },

  sectionLabel: {
    color: TEAL,
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginBottom: 8,
  },

  title: {
    color: WHITE,
    fontSize: 31,
    lineHeight: 39,
    fontWeight: "600",
    marginBottom: 7,
  },

  subtitle: {
    color: GREY,
    fontSize: 15.5,
    lineHeight: 23,
    fontWeight: "400",
    marginBottom: 8,
  },

  questionLabel: {
    color: TEAL,
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 1,
    marginTop: 28,
    marginBottom: 11,
  },

  optional: {
    color: GREY,
    fontSize: 10,
    letterSpacing: 0.8,
  },

  inputCard: {
    width: "100%",
    minHeight: 58,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
  },

  input: {
    flex: 1,
    color: WHITE,
    fontSize: 15,
    marginLeft: 12,
    paddingVertical: 15,
  },

  memoryInputCard: {
    width: "100%",
    height: 155,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    paddingHorizontal: 17,
    paddingTop: 14,
  },

  memoryInput: {
    flex: 1,
    color: WHITE,
    fontSize: 15,
    lineHeight: 23,
    padding: 0,
  },

  characterCount: {
    color: "#77787D",
    fontSize: 11,
    textAlign: "right",
    marginBottom: 9,
  },

  photoCard: {
    width: "100%",
    minHeight: 76,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  photoIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "rgba(103,212,208,0.11)",
    alignItems: "center",
    justifyContent: "center",
  },

  photoTextContainer: {
    flex: 1,
    marginLeft: 13,
  },

  photoTitle: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 3,
  },

  photoSubtitle: {
    color: GREY,
    fontSize: 12.5,
  },

  shareButton: {
    width: "100%",
    height: 56,
    borderRadius: 28,
    backgroundColor: TEAL,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 31,
  },

  shareButtonText: {
    color: BLACK,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 9,
  },

  footerText: {
    color: "#77787D",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 10,
  },

  bottomNavWrapper: {
    position: "absolute",
    left: 30,
    right: 30,
  },

  bottomNav: {
    height: 82,
    borderRadius: 42,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(35,38,40,0.88)",
  },

  navItem: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },

  navItemHome: {
    left: "0%",
  },

  navItemExplore: {
    left: "25%",
  },

  navItemMake: {
    left: "50%",
  },

  navItemMe: {
    left: "75%",
  },

  navIcon: {
    marginBottom: 4,
  },

  navText: {
    color: "#C5C5C8",
    fontSize: 12.5,
    lineHeight: 16,
  },

  navActive: {
    color: TEAL,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.985 }],
  },
});
