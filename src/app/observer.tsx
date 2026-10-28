import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREY = "#B6B6BA";

export default function ObserverScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + 18,
            paddingBottom: insets.bottom + 115,
          },
        ]}
      >
        <View style={styles.topBar}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={10}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.backArrow}>‹</Text>
            <Text style={styles.backText}>home</Text>
          </Pressable>
        </View>

        <View style={styles.header}>
          <Text style={styles.identityLabel}>YOUR CIVIC IDENTITY</Text>

          <Text style={styles.identityTitle}>The Observer</Text>

          <Text style={styles.identityDescription}>
            You notice the stories{"\n"}others walk past.
          </Text>
        </View>

        <View style={styles.visualContainer}>
          <View style={styles.visualGlow} />

          <View style={styles.outerRing}>
            <View style={styles.middleRing}>
              <View style={styles.innerRing}>
                <View style={styles.eyeShape}>
                  <View style={styles.eyePupil} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.aboutCard}>
          <Text style={styles.cardLabel}>ABOUT THE OBSERVER</Text>

          <Text style={styles.aboutTitle}>You see what others miss.</Text>

          <Text style={styles.aboutText}>
            You naturally notice the details of a place — the people, the
            atmosphere, and the stories hidden in everyday moments.
          </Text>
        </View>

        <View style={styles.traitsCard}>
          <Text style={styles.cardLabel}>YOUR TRAITS</Text>

          <TraitRow label="Curiosity" value={86} />
          <TraitRow label="Awareness" value={91} />
          <TraitRow label="Empathy" value={74} />
          <TraitRow label="Reflection" value={82} />
        </View>
      </ScrollView>

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
            color={TEAL}
            style={styles.navIcon}
          />
          <Text style={[styles.navText, styles.navActive]}>Home</Text>
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
            name="add-circle-outline"
            size={27}
            color="#C5C5C8"
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Make</Text>
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

function TraitRow({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.traitRow}>
      <Text style={styles.traitLabel}>{label}</Text>

      <View style={styles.traitTrack}>
        <View
          style={[
            styles.traitProgress,
            {
              width: `${value}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.traitValue}>{value}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK,
  },

  scrollContent: {
    paddingHorizontal: 30,
  },

  topBar: {
    height: 42,
    justifyContent: "center",
    marginBottom: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    height: 40,
  },

  backArrow: {
    color: WHITE,
    fontSize: 38,
    fontWeight: "200",
    lineHeight: 40,
    marginRight: 3,
  },

  backText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "400",
  },

  header: {
    marginBottom: 4,
  },

  identityLabel: {
    color: TEAL,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginBottom: 8,
  },

  identityTitle: {
    color: WHITE,
    fontSize: 32,
    lineHeight: 39,
    fontWeight: "500",
    marginBottom: 8,
  },

  identityDescription: {
    color: GREY,
    fontSize: 17,
    lineHeight: 26,
    fontWeight: "400",
  },

  visualContainer: {
    height: 245,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 8,
  },

  visualGlow: {
    position: "absolute",
    width: 175,
    height: 175,
    borderRadius: 88,
    backgroundColor: "rgba(103,212,208,0.035)",
  },

  outerRing: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },

  middleRing: {
    width: 157,
    height: 157,
    borderRadius: 79,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.30)",
    alignItems: "center",
    justifyContent: "center",
  },

  innerRing: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.45)",
    backgroundColor: "rgba(103,212,208,0.035)",
    alignItems: "center",
    justifyContent: "center",
  },

  eyeShape: {
    width: 72,
    height: 45,
    borderRadius: 38,
    backgroundColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-8deg" }],
  },

  eyePupil: {
    width: 23,
    height: 23,
    borderRadius: 12,
    backgroundColor: BLACK,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.35)",
  },

  aboutCard: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.17)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 25,
    marginBottom: 20,
  },

  cardLabel: {
    color: TEAL,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.9,
    marginBottom: 15,
  },

  aboutTitle: {
    color: WHITE,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "500",
    marginBottom: 8,
  },

  aboutText: {
    color: GREY,
    fontSize: 15.5,
    lineHeight: 25,
    fontWeight: "400",
  },

  traitsCard: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.17)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 25,
    marginBottom: 20,
  },

  traitRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 40,
  },

  traitLabel: {
    width: 82,
    color: WHITE,
    fontSize: 14.5,
    fontWeight: "400",
  },

  traitTrack: {
    flex: 1,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#303235",
    overflow: "hidden",
    marginRight: 12,
  },

  traitProgress: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: TEAL,
  },

  traitValue: {
    width: 38,
    color: GREY,
    fontSize: 13,
    textAlign: "right",
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
