import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREY = "#B6B6BA";
const DARK_GREY = "#777A7D";

export default function FirstObserverScreen() {
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
            paddingBottom: insets.bottom + 125,
          },
        ]}
      >
        {/* HEADER */}

        <View style={styles.topBar}>
          <Pressable
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={21} color={WHITE} />
          </Pressable>
        </View>

        {/* ACHIEVEMENT HERO */}

        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Ionicons name="eye-outline" size={38} color={TEAL} />
          </View>

          <Text style={styles.heroLabel}>ACHIEVEMENT UNLOCKED</Text>

          <Text style={styles.heroTitle}>First Observer</Text>

          <Text style={styles.heroDescription}>
            You noticed something others walked past.
          </Text>
        </View>

        {/* COMPLETION */}

        <View style={styles.completionCard}>
          <View style={styles.completionHeader}>
            <View>
              <Text style={styles.completionTitle}>Achievement complete</Text>

              <Text style={styles.completionSubtitle}>
                Your first city story became part of Melbourne's living memory.
              </Text>
            </View>

            <Text style={styles.completionNumber}>100%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* YOUR FIRST OBSERVATION */}

        <Text style={styles.sectionLabel}>YOUR FIRST OBSERVATION</Text>

        <View style={styles.observationCard}>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={19} color={TEAL} />

            <Text style={styles.locationText}>FITZROY</Text>
          </View>

          <Text style={styles.observationTitle}>
            A memory was shared nearby.
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quote}>
              “This corner used to be where the old cinema stood...”
            </Text>
          </View>

          <Text style={styles.observationDescription}>
            You discovered a piece of Melbourne's history and connected it to
            the place where it happened.
          </Text>
        </View>

        {/* WHAT YOU DID */}

        <Text style={[styles.sectionLabel, styles.whatYouDidLabel]}>
          WHAT YOU DID
        </Text>

        <View style={styles.actionCard}>
          <View style={styles.actionRow}>
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={17} color={BLACK} />
            </View>

            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Discovered a city story</Text>

              <Text style={styles.actionDescription}>
                You noticed a story connected to your city.
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.actionRow}>
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={17} color={BLACK} />
            </View>

            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Connected it to a place</Text>

              <Text style={styles.actionDescription}>
                The observation was connected to Fitzroy.
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.actionRow}>
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={17} color={BLACK} />
            </View>

            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>
                Added your first observation
              </Text>

              <Text style={styles.actionDescription}>
                Your contribution became part of the city's living memory.
              </Text>
            </View>
          </View>
        </View>

        {/* MILESTONE */}

        <View style={styles.milestoneCard}>
          <View style={styles.milestoneIcon}>
            <Ionicons name="sparkles-outline" size={23} color={TEAL} />
          </View>

          <View style={styles.milestoneContent}>
            <Text style={styles.milestoneLabel}>FIRST MILESTONE</Text>

            <Text style={styles.milestoneTitle}>
              Your civic journey has begun.
            </Text>

            <Text style={styles.milestoneDescription}>
              Keep exploring, listening and sharing to help build Melbourne's
              living memory.
            </Text>
          </View>
        </View>

        <Text style={styles.footerNote}>
          Small observations can become part of a bigger story.
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

        {/* HOME */}

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

        {/* EXPLORE */}

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

        {/* MAP */}

        <Pressable
          style={[styles.navItem, styles.navItemMap]}
          onPress={() => router.push("/map")}
        >
          <Ionicons
            name="location-outline"
            size={27}
            color="#C5C5C8"
            style={styles.navIcon}
          />

          <Text style={styles.navText}>Map</Text>
        </Pressable>

        {/* ME */}

        <Pressable
          style={[styles.navItem, styles.navItemMe]}
          onPress={() => router.push("/profile")}
        >
          <Ionicons
            name="person-outline"
            size={25}
            color={TEAL}
            style={styles.navIcon}
          />

          <Text style={[styles.navText, styles.navActive]}>Me</Text>
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

  topBar: {
    height: 44,
    justifyContent: "center",
    marginBottom: 8,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },

  hero: {
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 30,
  },

  heroIcon: {
    width: 76,
    height: 76,
    borderRadius: 25,
    backgroundColor: "rgba(103,212,208,0.10)",
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.35)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  heroLabel: {
    color: TEAL,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.2,
    marginBottom: 7,
  },

  heroTitle: {
    color: WHITE,
    fontSize: 30,
    lineHeight: 37,
    fontWeight: "600",
    marginBottom: 7,
  },

  heroDescription: {
    color: GREY,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    maxWidth: 270,
  },

  completionCard: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 19,
  },

  completionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  completionTitle: {
    color: WHITE,
    fontSize: 16.5,
    fontWeight: "500",
    marginBottom: 5,
  },

  completionSubtitle: {
    color: GREY,
    fontSize: 12,
    lineHeight: 18,
    maxWidth: 205,
  },

  completionNumber: {
    color: TEAL,
    fontSize: 21,
    fontWeight: "600",
  },

  progressTrack: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
    marginTop: 17,
  },

  progressFill: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    backgroundColor: TEAL,
  },

  sectionLabel: {
    color: TEAL,
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginBottom: 16,
    marginTop: 34,
  },

  observationCard: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 19,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  locationText: {
    color: TEAL,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    marginLeft: 7,
  },

  observationTitle: {
    color: WHITE,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "500",
    marginBottom: 14,
  },

  quoteBox: {
    borderLeftWidth: 2,
    borderLeftColor: TEAL,
    paddingLeft: 13,
    marginBottom: 15,
  },

  quote: {
    color: "#D0D0D3",
    fontSize: 14,
    lineHeight: 22,
    fontStyle: "italic",
  },

  observationDescription: {
    color: GREY,
    fontSize: 12.5,
    lineHeight: 19,
  },

  whatYouDidLabel: {
    marginTop: 34,
  },

  actionCard: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    paddingHorizontal: 17,
  },

  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
  },

  checkCircle: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
  },

  actionContent: {
    flex: 1,
    marginLeft: 13,
  },

  actionTitle: {
    color: WHITE,
    fontSize: 14.5,
    lineHeight: 19,
    fontWeight: "500",
    marginBottom: 3,
  },

  actionDescription: {
    color: GREY,
    fontSize: 11.5,
    lineHeight: 17,
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.09)",
  },

  milestoneCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.22)",
    backgroundColor: "rgba(103,212,208,0.045)",
    padding: 17,
    marginTop: 34,
  },

  milestoneIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "rgba(103,212,208,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  milestoneContent: {
    flex: 1,
    marginLeft: 13,
  },

  milestoneLabel: {
    color: TEAL,
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 5,
  },

  milestoneTitle: {
    color: WHITE,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    marginBottom: 5,
  },

  milestoneDescription: {
    color: GREY,
    fontSize: 11.5,
    lineHeight: 17,
  },

  footerNote: {
    color: DARK_GREY,
    fontSize: 11.5,
    lineHeight: 17,
    textAlign: "center",
    marginTop: 15,
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

  navItemMap: {
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
    transform: [{ scale: 0.96 }],
  },
});
