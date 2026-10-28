import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREY = "#B6B6BA";
const DARK_GREY = "#777A7D";

export default function CityWalkerScreen() {
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
            paddingTop: insets.top + 12,
            paddingBottom: insets.bottom + 35,
          },
        ]}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="arrow-back" size={23} color={WHITE} />
          </Pressable>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerEyebrow}>ACHIEVEMENT</Text>

            <Text style={styles.headerTitle}>City Walker</Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons name="location-outline" size={27} color={TEAL} />
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons name="location" size={34} color={TEAL} />
          </View>

          <Text style={styles.heroTitle}>Walk the city.</Text>

          <Text style={styles.heroDescription}>
            Explore different places around Melbourne and discover the stories
            connected to them.
          </Text>

          <View style={styles.heroProgressHeader}>
            <Text style={styles.heroProgressLabel}>YOUR PROGRESS</Text>

            <Text style={styles.heroProgressNumber}>3 / 5</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: "60%" }]} />
          </View>

          <Text style={styles.progressCaption}>
            2 more places to unlock this achievement.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>PLACES DISCOVERED</Text>

        <View style={styles.placeCard}>
          <View style={styles.placeIcon}>
            <Ionicons name="location" size={22} color={TEAL} />
          </View>

          <View style={styles.placeContent}>
            <Text style={styles.placeNumber}>01</Text>

            <Text style={styles.placeTitle}>Cardigan Street</Text>

            <Text style={styles.placeDescription}>
              Your starting point. Explore stories and echoes around Cardigan.
            </Text>

            <View style={styles.placeStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.placeStatusText}>DISCOVERED</Text>
            </View>
          </View>
        </View>

        <View style={styles.placeCard}>
          <View style={styles.placeIcon}>
            <Ionicons name="location" size={22} color={TEAL} />
          </View>

          <View style={styles.placeContent}>
            <Text style={styles.placeNumber}>02</Text>

            <Text style={styles.placeTitle}>Fitzroy</Text>

            <Text style={styles.placeDescription}>
              A neighbourhood full of memories, street stories and changing
              spaces.
            </Text>

            <View style={styles.placeStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.placeStatusText}>DISCOVERED</Text>
            </View>
          </View>
        </View>

        <View style={styles.placeCard}>
          <View style={styles.placeIcon}>
            <Ionicons name="location" size={22} color={TEAL} />
          </View>

          <View style={styles.placeContent}>
            <Text style={styles.placeNumber}>03</Text>

            <Text style={styles.placeTitle}>University Square</Text>

            <Text style={styles.placeDescription}>
              A shared public space where everyday city life meets the
              university community.
            </Text>

            <View style={styles.placeStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.placeStatusText}>DISCOVERED</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.sectionLabel, styles.nextLabel]}>
          KEEP WALKING
        </Text>

        <View style={[styles.placeCard, styles.lockedPlace]}>
          <View style={styles.lockedIcon}>
            <Ionicons name="location-outline" size={22} color={DARK_GREY} />
          </View>

          <View style={styles.placeContent}>
            <Text style={styles.placeNumberLocked}>04</Text>

            <Text style={styles.lockedTitle}>Another place awaits</Text>

            <Text style={styles.lockedDescription}>
              Explore somewhere new in the city to continue your journey.
            </Text>

            <View style={styles.lockedStatus}>
              <Ionicons
                name="lock-closed-outline"
                size={14}
                color={DARK_GREY}
              />

              <Text style={styles.lockedStatusText}>NOT DISCOVERED</Text>
            </View>
          </View>
        </View>

        <View style={[styles.placeCard, styles.lockedPlace]}>
          <View style={styles.lockedIcon}>
            <Ionicons name="location-outline" size={22} color={DARK_GREY} />
          </View>

          <View style={styles.placeContent}>
            <Text style={styles.placeNumberLocked}>05</Text>

            <Text style={styles.lockedTitle}>Final destination</Text>

            <Text style={styles.lockedDescription}>
              Discover one more place after completing the next step.
            </Text>

            <View style={styles.lockedStatus}>
              <Ionicons
                name="lock-closed-outline"
                size={14}
                color={DARK_GREY}
              />

              <Text style={styles.lockedStatusText}>NOT DISCOVERED</Text>
            </View>
          </View>
        </View>

        <View style={styles.quoteCard}>
          <Ionicons name="footsteps-outline" size={25} color={TEAL} />

          <Text style={styles.quoteText}>
            “The city becomes different when you start paying attention to where
            you walk.”
          </Text>
        </View>

        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.returnButton,
            pressed && styles.returnButtonPressed,
          ]}
        >
          <Ionicons name="arrow-back" size={18} color={BLACK} />

          <Text style={styles.returnButtonText}>BACK TO PROFILE</Text>
        </Pressable>
      </ScrollView>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
    backgroundColor: "rgba(255,255,255,0.045)",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitleContainer: {
    flex: 1,
    marginLeft: 15,
  },

  headerEyebrow: {
    color: TEAL,
    fontSize: 10.5,
    fontWeight: "600",
    letterSpacing: 1.3,
    marginBottom: 3,
  },

  headerTitle: {
    color: WHITE,
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 31,
  },

  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 16,
    backgroundColor: "rgba(103,212,208,0.09)",
    alignItems: "center",
    justifyContent: "center",
  },

  heroCard: {
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.25)",
    backgroundColor: "rgba(103,212,208,0.055)",
    padding: 23,
    marginBottom: 34,
  },

  heroIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor: "rgba(103,212,208,0.11)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 17,
  },

  heroTitle: {
    color: WHITE,
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 8,
  },

  heroDescription: {
    color: GREY,
    fontSize: 13.5,
    lineHeight: 20,
    marginBottom: 23,
  },

  heroProgressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  heroProgressLabel: {
    color: GREY,
    fontSize: 10.5,
    fontWeight: "500",
    letterSpacing: 0.9,
  },

  heroProgressNumber: {
    color: TEAL,
    fontSize: 16,
    fontWeight: "600",
  },

  progressTrack: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: TEAL,
  },

  progressCaption: {
    color: DARK_GREY,
    fontSize: 10.5,
    marginTop: 9,
  },

  sectionLabel: {
    color: TEAL,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginBottom: 15,
  },

  nextLabel: {
    marginTop: 20,
  },

  placeCard: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 17,
    marginBottom: 10,
  },

  placeIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "rgba(103,212,208,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  placeContent: {
    flex: 1,
    marginLeft: 14,
  },

  placeNumber: {
    color: TEAL,
    fontSize: 9.5,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginBottom: 3,
  },

  placeTitle: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
    marginBottom: 5,
  },

  placeDescription: {
    color: GREY,
    fontSize: 11.5,
    lineHeight: 17,
  },

  placeStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  placeStatusText: {
    color: TEAL,
    fontSize: 9,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginLeft: 5,
  },

  lockedPlace: {
    opacity: 0.62,
  },

  lockedIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.045)",
    alignItems: "center",
    justifyContent: "center",
  },

  placeNumberLocked: {
    color: DARK_GREY,
    fontSize: 9.5,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginBottom: 3,
  },

  lockedTitle: {
    color: "#A5A5A8",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
    marginBottom: 5,
  },

  lockedDescription: {
    color: "#707174",
    fontSize: 11.5,
    lineHeight: 17,
  },

  lockedStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  lockedStatusText: {
    color: DARK_GREY,
    fontSize: 9,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginLeft: 5,
  },

  quoteCard: {
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    backgroundColor: "rgba(255,255,255,0.025)",
    padding: 19,
    marginTop: 22,
    marginBottom: 16,
  },

  quoteText: {
    color: GREY,
    fontSize: 12.5,
    lineHeight: 19,
    fontStyle: "italic",
    marginTop: 11,
  },

  returnButton: {
    height: 52,
    borderRadius: 18,
    backgroundColor: TEAL,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },

  returnButtonText: {
    color: BLACK,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginLeft: 8,
  },

  returnButtonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.985 }],
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.985 }],
  },
});
