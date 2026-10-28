import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREY = "#B6B6BA";
const DARK_GREY = "#777A7D";

export default function EchoMakerScreen() {
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
        {/* HEADER */}

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

            <Text style={styles.headerTitle}>Echo Maker</Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons name="mic-outline" size={27} color={TEAL} />
          </View>
        </View>

        {/* HERO */}

        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons name="mic" size={32} color={TEAL} />
          </View>

          <Text style={styles.heroTitle}>Listen closely.</Text>

          <Text style={styles.heroDescription}>
            Capture the sounds that make the city feel alive. Every recording
            becomes another echo in the city's living memory.
          </Text>

          <View style={styles.heroProgressHeader}>
            <Text style={styles.heroProgressLabel}>YOUR PROGRESS</Text>

            <Text style={styles.heroProgressNumber}>7 / 10</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: "70%" }]} />
          </View>

          <Text style={styles.progressCaption}>
            3 more sounds needed to unlock Echo Maker.
          </Text>
        </View>

        {/* CAPTURED SOUNDS */}

        <Text style={styles.sectionLabel}>SOUNDS CAPTURED</Text>

        <View style={styles.soundCard}>
          <View style={styles.soundIcon}>
            <Ionicons name="pulse-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumber}>01</Text>

            <Text style={styles.soundTitle}>Cardigan Street footsteps</Text>

            <Text style={styles.soundDescription}>
              Footsteps moving through the street during the morning.
            </Text>

            <View style={styles.soundStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.soundStatusText}>CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={styles.soundCard}>
          <View style={styles.soundIcon}>
            <Ionicons name="pulse-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumber}>02</Text>

            <Text style={styles.soundTitle}>Tram passing nearby</Text>

            <Text style={styles.soundDescription}>
              The sound of a tram moving through the neighbourhood.
            </Text>

            <View style={styles.soundStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.soundStatusText}>CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={styles.soundCard}>
          <View style={styles.soundIcon}>
            <Ionicons name="pulse-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumber}>03</Text>

            <Text style={styles.soundTitle}>Street conversation</Text>

            <Text style={styles.soundDescription}>
              Voices and conversations becoming part of the street atmosphere.
            </Text>

            <View style={styles.soundStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.soundStatusText}>CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={styles.soundCard}>
          <View style={styles.soundIcon}>
            <Ionicons name="pulse-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumber}>04</Text>

            <Text style={styles.soundTitle}>City crossing signal</Text>

            <Text style={styles.soundDescription}>
              The familiar rhythm of a pedestrian crossing signal.
            </Text>

            <View style={styles.soundStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.soundStatusText}>CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={styles.soundCard}>
          <View style={styles.soundIcon}>
            <Ionicons name="pulse-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumber}>05</Text>

            <Text style={styles.soundTitle}>Park sounds</Text>

            <Text style={styles.soundDescription}>
              Birds, movement and quiet moments inside the park.
            </Text>

            <View style={styles.soundStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.soundStatusText}>CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={styles.soundCard}>
          <View style={styles.soundIcon}>
            <Ionicons name="pulse-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumber}>06</Text>

            <Text style={styles.soundTitle}>Morning city ambience</Text>

            <Text style={styles.soundDescription}>
              The layered sounds of the city beginning another day.
            </Text>

            <View style={styles.soundStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.soundStatusText}>CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={styles.soundCard}>
          <View style={styles.soundIcon}>
            <Ionicons name="pulse-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumber}>07</Text>

            <Text style={styles.soundTitle}>Evening street ambience</Text>

            <Text style={styles.soundDescription}>
              The changing rhythm of the neighbourhood after dark.
            </Text>

            <View style={styles.soundStatus}>
              <Ionicons name="checkmark-circle" size={15} color={TEAL} />

              <Text style={styles.soundStatusText}>CAPTURED</Text>
            </View>
          </View>
        </View>

        {/* NEXT SOUNDS */}

        <Text style={[styles.sectionLabel, styles.nextLabel]}>NEXT ECHOES</Text>

        <View style={[styles.soundCard, styles.lockedSound]}>
          <View style={styles.lockedIcon}>
            <Ionicons name="mic-outline" size={23} color={DARK_GREY} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumberLocked}>08</Text>

            <Text style={styles.lockedTitle}>Find another city sound</Text>

            <Text style={styles.lockedDescription}>
              Listen for something unexpected happening around you.
            </Text>

            <View style={styles.lockedStatus}>
              <Ionicons name="ellipse-outline" size={14} color={DARK_GREY} />

              <Text style={styles.lockedStatusText}>NOT CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={[styles.soundCard, styles.lockedSound]}>
          <View style={styles.lockedIcon}>
            <Ionicons name="mic-outline" size={23} color={DARK_GREY} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumberLocked}>09</Text>

            <Text style={styles.lockedTitle}>Listen somewhere new</Text>

            <Text style={styles.lockedDescription}>
              Move through the city and capture a different atmosphere.
            </Text>

            <View style={styles.lockedStatus}>
              <Ionicons name="ellipse-outline" size={14} color={DARK_GREY} />

              <Text style={styles.lockedStatusText}>NOT CAPTURED</Text>
            </View>
          </View>
        </View>

        <View style={[styles.soundCard, styles.lockedSound]}>
          <View style={styles.lockedIcon}>
            <Ionicons name="mic-outline" size={23} color={DARK_GREY} />
          </View>

          <View style={styles.soundContent}>
            <Text style={styles.soundNumberLocked}>10</Text>

            <Text style={styles.lockedTitle}>Final echo</Text>

            <Text style={styles.lockedDescription}>
              Capture your tenth sound and unlock the Echo Maker achievement.
            </Text>

            <View style={styles.lockedStatus}>
              <Ionicons
                name="lock-closed-outline"
                size={14}
                color={DARK_GREY}
              />

              <Text style={styles.lockedStatusText}>LOCKED</Text>
            </View>
          </View>
        </View>

        {/* MESSAGE */}

        <View style={styles.messageCard}>
          <Ionicons name="ear-outline" size={25} color={TEAL} />

          <Text style={styles.messageTitle}>Every sound tells a story.</Text>

          <Text style={styles.messageDescription}>
            From footsteps to distant conversations, the smallest sounds can
            reveal how a place feels.
          </Text>
        </View>

        {/* RETURN */}

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

  /* HEADER */

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

  /* HERO */

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

  soundCard: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 17,
    marginBottom: 10,
  },

  soundIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "rgba(103,212,208,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  soundContent: {
    flex: 1,
    marginLeft: 14,
  },

  soundNumber: {
    color: TEAL,
    fontSize: 9.5,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginBottom: 3,
  },

  soundTitle: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
    marginBottom: 5,
  },

  soundDescription: {
    color: GREY,
    fontSize: 11.5,
    lineHeight: 17,
  },

  soundStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  soundStatusText: {
    color: TEAL,
    fontSize: 9,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginLeft: 5,
  },

  lockedSound: {
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

  soundNumberLocked: {
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

  messageCard: {
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.18)",
    backgroundColor: "rgba(103,212,208,0.035)",
    padding: 20,
    marginTop: 22,
    marginBottom: 16,
  },

  messageTitle: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 11,
    marginBottom: 6,
  },

  messageDescription: {
    color: GREY,
    fontSize: 12,
    lineHeight: 18,
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
