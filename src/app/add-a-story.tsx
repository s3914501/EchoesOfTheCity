import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
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

export default function AddStoryScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [story, setStory] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [location, setLocation] = useState("");

  const choosePhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Photo access needed",
        "Please allow photo access to add an image to your story.",
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.9,
    });

    if (!result.canceled && result.assets.length > 0) {
      setPhoto(result.assets[0].uri);
    }
  };

  const removePhoto = () => {
    setPhoto(null);
  };

  const postStory = () => {
    if (!story.trim()) {
      Alert.alert(
        "Add your story",
        "Write something before posting your story.",
      );
      return;
    }

    Alert.alert("Story posted", "Your story has been added to the city.", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + 18,
            paddingBottom: insets.bottom + 125,
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

        <Text style={styles.title}>Add a story</Text>

        <Text style={styles.subtitle}>
          Leave your own story behind.{"\n"}
          Let the city remember your perspective.
        </Text>

        {/* STORY */}

        <Text style={styles.fieldLabel}>YOUR STORY</Text>

        <View style={styles.storyCard}>
          <TextInput
            style={styles.storyInput}
            value={story}
            onChangeText={setStory}
            placeholder="Tell us something about your city..."
            placeholderTextColor="#777A7D"
            multiline={true}
            maxLength={500}
            textAlignVertical="top"
          />

          <Text style={styles.characterCount}>{story.length}/500</Text>
        </View>

        {/* PHOTO */}

        <Text style={styles.fieldLabel}>ADD A PHOTO</Text>

        {photo ? (
          <View style={styles.photoPreviewCard}>
            <Image
              source={{ uri: photo }}
              style={styles.photoPreview}
              resizeMode="cover"
            />

            <Pressable
              style={({ pressed }) => [
                styles.removePhotoButton,
                pressed && styles.pressed,
              ]}
              onPress={removePhoto}
            >
              <Ionicons name="close" size={18} color={WHITE} />
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={({ pressed }) => [
              styles.photoButton,
              pressed && styles.pressed,
            ]}
            onPress={choosePhoto}
          >
            <View style={styles.photoIcon}>
              <Ionicons name="image-outline" size={28} color={TEAL} />
            </View>

            <View style={styles.photoTextContainer}>
              <Text style={styles.photoTitle}>Add a photo</Text>

              <Text style={styles.photoDescription}>
                Show us the place behind your story.
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#777A7D" />
          </Pressable>
        )}

        {/* LOCATION */}

        <Text style={styles.fieldLabel}>WHERE?</Text>

        <View style={styles.locationCard}>
          <Ionicons name="location-outline" size={23} color={TEAL} />

          <TextInput
            style={styles.locationInput}
            value={location}
            onChangeText={setLocation}
            placeholder="Where is your story?"
            placeholderTextColor="#777A7D"
            autoCapitalize="words"
          />
        </View>

        {/* DATE */}

        <View style={styles.todayRow}>
          <Ionicons name="time-outline" size={19} color={TEAL} />

          <Text style={styles.todayText}>Today</Text>

          <View style={styles.todayDot} />

          <Text style={styles.todayDescription}>Added to the city today</Text>
        </View>

        {/* POST */}

        <Pressable
          style={({ pressed }) => [
            styles.postButton,
            pressed && styles.postButtonPressed,
          ]}
          onPress={postStory}
        >
          <Text style={styles.postButtonText}>Post story</Text>

          <Ionicons name="arrow-forward" size={19} color={BLACK} />
        </Pressable>

        <Text style={styles.footerNote}>
          Your story becomes part of the city's living memory.
        </Text>
      </ScrollView>

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
    marginBottom: 7,
  },

  title: {
    color: WHITE,
    fontSize: 29,
    lineHeight: 37,
    fontWeight: "600",
    marginBottom: 5,
  },

  subtitle: {
    color: WHITE,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
    opacity: 0.9,
  },

  fieldLabel: {
    color: TEAL,
    fontSize: 13.5,
    fontWeight: "500",
    letterSpacing: 1,
    marginTop: 30,
    marginBottom: 12,
  },

  storyCard: {
    width: "100%",
    height: 190,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 16,
  },

  storyInput: {
    flex: 1,
    color: WHITE,
    fontSize: 15.5,
    lineHeight: 23,
    fontWeight: "400",
  },

  characterCount: {
    color: "#777A7D",
    fontSize: 11.5,
    textAlign: "right",
    marginTop: 6,
  },

  photoButton: {
    width: "100%",
    minHeight: 82,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  photoIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "rgba(103,212,208,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  photoTextContainer: {
    flex: 1,
    marginLeft: 13,
  },

  photoTitle: {
    color: WHITE,
    fontSize: 15.5,
    fontWeight: "500",
    marginBottom: 3,
  },

  photoDescription: {
    color: GREY,
    fontSize: 12.5,
    lineHeight: 18,
  },

  photoPreviewCard: {
    width: "100%",
    height: 190,
    borderRadius: 23,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    position: "relative",
  },

  photoPreview: {
    width: "100%",
    height: "100%",
  },

  removePhotoButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.72)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },

  locationCard: {
    width: "100%",
    height: 56,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  locationInput: {
    flex: 1,
    color: WHITE,
    fontSize: 14,
    marginLeft: 11,
  },

  todayRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    paddingHorizontal: 2,
  },

  todayText: {
    color: WHITE,
    fontSize: 13,
    marginLeft: 8,
    fontWeight: "500",
  },

  todayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#777A7D",
    marginHorizontal: 9,
  },

  todayDescription: {
    color: GREY,
    fontSize: 12,
  },

  postButton: {
    width: "100%",
    height: 54,
    borderRadius: 27,
    backgroundColor: TEAL,
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  postButtonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.985 }],
  },

  postButtonText: {
    color: BLACK,
    fontSize: 15,
    fontWeight: "600",
    marginRight: 9,
  },

  footerNote: {
    color: "#777A7D",
    fontSize: 11.5,
    textAlign: "center",
    lineHeight: 17,
    marginTop: 12,
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
