import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREY = "#B6B6BA";
const DARK_GREY = "#777A7D";

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [progressExpanded, setProgressExpanded] = useState(false);

  const achievements = [
    {
      title: "First Observer",
      description: "Notice your first city story.",
      icon: "eye-outline" as const,
      progress: "UNLOCKED",
      percentage: "100%",
      unlocked: true,
      route: "/app/first-observer",
    },
    {
      title: "City Walker",
      description: "Explore five places.",
      icon: "location-outline" as const,
      progress: "3 / 5",
      percentage: "60%",
      unlocked: true,
      route: "/app/city-walker",
    },
    {
      title: "Echo Maker",
      description: "Record ten sounds.",
      icon: "mic-outline" as const,
      progress: "7 / 10",
      percentage: "70%",
      unlocked: true,
      route: "/app/echo-maker",
    },
    {
      title: "City Memory",
      description: "Share twenty memories.",
      icon: "lock-closed-outline" as const,
      progress: "7 / 20",
      percentage: "35%",
      unlocked: false,
      route: "",
    },
  ];

  const objectives = [
    {
      title: "Explore a new place",
      description: "Discover somewhere around Cardigan.",
      status: "DONE",
      complete: true,
    },
    {
      title: "Share a memory",
      description: "Leave a memory connected to the city.",
      status: "1 / 2",
      complete: false,
    },
    {
      title: "Record a city sound",
      description: "Capture something happening around you.",
      status: "0 / 1",
      complete: false,
    },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + 18,
            paddingBottom: insets.bottom + 115,
          },
        ]}
      >
        <View style={styles.profileHeader}>
          <View style={styles.profilePicture}>
            <Image
              source={require("../../assets/images/harris-profile.jpg")}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Harris</Text>
            <Text style={styles.profileRole}>THE OBSERVER</Text>
            <Text style={styles.profileDescription}>
              You notice the stories others walk past.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>YOUR PROGRESS</Text>

        <Pressable
          onPress={() => setProgressExpanded(!progressExpanded)}
          style={styles.progressCard}
        >
          <View style={styles.progressHeader}>
            <View style={styles.progressTitleContainer}>
              <Text style={styles.progressTitle}>Civic contribution</Text>
              <Text style={styles.progressSubtitle}>
                Your echoes are becoming part of the city.
              </Text>
            </View>

            <View style={styles.progressNumberContainer}>
              <Text style={styles.progressNumber}>68%</Text>
              <Ionicons
                name={progressExpanded ? "chevron-up" : "chevron-down"}
                size={17}
                color={TEAL}
              />
            </View>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: "68%" }]} />
          </View>

          <View style={styles.progressStats}>
            <View style={styles.progressStat}>
              <Ionicons name="pulse-outline" size={18} color={TEAL} />
              <Text style={styles.statText}>7 Sounds</Text>
            </View>
            <View style={styles.progressStat}>
              <Ionicons name="pencil-outline" size={18} color={TEAL} />
              <Text style={styles.statText}>12 Memories</Text>
            </View>
            <View style={styles.progressStat}>
              <Ionicons name="chatbubble-outline" size={18} color={TEAL} />
              <Text style={styles.statText}>5 Stories</Text>
            </View>
          </View>

          {progressExpanded && (
            <View style={styles.expandedDetails}>
              <View style={styles.expandedDivider} />
              <Text style={styles.detailTitle}>Your city contributions</Text>
              <Text style={styles.detailText}>
                7 sounds captured around the city
              </Text>
              <Text style={styles.detailText}>
                12 memories connected to places
              </Text>
              <Text style={styles.detailText}>
                5 stories added to the city's memory
              </Text>
            </View>
          )}
        </Pressable>

        <Text style={[styles.sectionLabel, styles.sectionSpacing]}>
          ACHIEVEMENTS
        </Text>

        <View style={styles.achievementGrid}>
          {achievements.map((achievement) => (
            <Pressable
              key={achievement.title}
              disabled={!achievement.unlocked}
              onPress={() => router.push(achievement.route as never)}
              style={[
                styles.achievementCard,
                !achievement.unlocked && styles.lockedCard,
              ]}
            >
              <View
                style={[
                  styles.achievementIcon,
                  !achievement.unlocked && styles.lockedIcon,
                ]}
              >
                <Ionicons
                  name={achievement.icon}
                  size={26}
                  color={achievement.unlocked ? TEAL : DARK_GREY}
                />
              </View>

              <Text
                style={[
                  styles.achievementTitle,
                  !achievement.unlocked && styles.lockedTitle,
                ]}
              >
                {achievement.title}
              </Text>

              <Text
                style={[
                  styles.achievementDescription,
                  !achievement.unlocked && styles.lockedDescription,
                ]}
              >
                {achievement.description}
              </Text>

              <View style={styles.achievementProgressTrack}>
                <View
                  style={[
                    styles.achievementProgressFill,
                    { width: achievement.percentage },
                  ]}
                />
              </View>

              <Text
                style={[
                  styles.achievementStatus,
                  !achievement.unlocked && styles.lockedDescription,
                ]}
              >
                {achievement.progress}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={[styles.sectionLabel, styles.sectionSpacing]}>
          TODAY'S OBJECTIVES
        </Text>

        <View style={styles.objectivesCard}>
          {objectives.map((objective, index) => (
            <View key={objective.title}>
              {index > 0 && <View style={styles.objectiveDivider} />}

              <View style={styles.objectiveRow}>
                <View
                  style={[
                    styles.objectiveIcon,
                    objective.complete && styles.objectiveIconComplete,
                  ]}
                >
                  <Ionicons
                    name={
                      objective.complete
                        ? "checkmark"
                        : index === 1
                          ? "pencil-outline"
                          : "pulse-outline"
                    }
                    size={19}
                    color={objective.complete ? BLACK : TEAL}
                  />
                </View>

                <View style={styles.objectiveContent}>
                  <Text style={styles.objectiveTitle}>{objective.title}</Text>
                  <Text style={styles.objectiveDescription}>
                    {objective.description}
                  </Text>
                </View>

                {objective.status === "DONE" && (
                  <Text style={styles.objectiveStatus}>DONE</Text>
                )}
              </View>

              {!objective.complete && (
                <Text style={styles.objectiveProgressText}>
                  Progress: {objective.status}
                </Text>
              )}
            </View>
          ))}
        </View>

        <Text style={styles.footerNote}>
          Small actions help build the city's living memory.
        </Text>
      </ScrollView>

      <View
        style={[
          styles.bottomNavWrapper,
          { bottom: Math.max(insets.bottom, 8) },
        ]}
      >
        <BlurView intensity={45} tint="dark" style={styles.bottomNav} />

        <Pressable
          style={[styles.navItem, styles.navItemHome]}
          onPress={() => router.push("/home")}
        >
          <Ionicons name="home-outline" size={24} color="#C5C5C8" />
          <Text style={styles.navText}>Home</Text>
        </Pressable>

        <Pressable
          style={[styles.navItem, styles.navItemExplore]}
          onPress={() => router.push("/map")}
        >
          <Ionicons name="location-outline" size={25} color="#C5C5C8" />
          <Text style={styles.navText}>Map</Text>
        </Pressable>

        <Pressable
          style={[styles.navItem, styles.navItemMap]}
          onPress={() => router.push("/explore")}
        >
          <Ionicons name="map-outline" size={27} color="#C5C5C8" />
          <Text style={styles.navText}>Gameplay</Text>
        </Pressable>

        <Pressable style={[styles.navItem, styles.navItemMe]}>
          <Ionicons name="person" size={25} color={TEAL} />
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
    paddingHorizontal: 30,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 38,
  },
  profilePicture: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.55)",
    backgroundColor: "rgba(103,212,208,0.10)",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 41,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 18,
  },
  profileName: {
    color: WHITE,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "600",
    marginBottom: 4,
  },
  profileRole: {
    color: TEAL,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "500",
    marginBottom: 5,
  },
  profileDescription: {
    color: GREY,
    fontSize: 12.5,
    lineHeight: 18,
  },
  sectionLabel: {
    color: TEAL,
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginBottom: 16,
  },
  progressCard: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 19,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  progressTitleContainer: {
    flex: 1,
  },
  progressTitle: {
    color: WHITE,
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 5,
  },
  progressSubtitle: {
    color: GREY,
    fontSize: 12.5,
    lineHeight: 18,
    maxWidth: 205,
  },
  progressNumberContainer: {
    alignItems: "flex-end",
    gap: 5,
  },
  progressNumber: {
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
    height: "100%",
    borderRadius: 4,
    backgroundColor: TEAL,
  },
  progressStats: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 19,
  },
  progressStat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  statText: {
    color: WHITE,
    fontSize: 11.5,
  },
  expandedDetails: {
    marginTop: 18,
  },
  expandedDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.10)",
    marginBottom: 16,
  },
  detailTitle: {
    color: WHITE,
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "500",
  },
  detailText: {
    color: GREY,
    fontSize: 12,
    marginBottom: 8,
  },
  sectionSpacing: {
    marginTop: 34,
  },
  achievementGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  achievementCard: {
    width: "48%",
    flexGrow: 1,
    flexBasis: "44%",
    minHeight: 174,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    padding: 15,
  },
  achievementIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "rgba(103,212,208,0.10)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  achievementTitle: {
    color: WHITE,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "500",
    marginBottom: 4,
  },
  achievementDescription: {
    color: GREY,
    fontSize: 11.5,
    lineHeight: 17,
    minHeight: 34,
  },
  achievementProgressTrack: {
    width: "100%",
    height: 5,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
    marginTop: 10,
  },
  achievementProgressFill: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: TEAL,
  },
  achievementStatus: {
    color: TEAL,
    fontSize: 9.5,
    fontWeight: "600",
    letterSpacing: 0.6,
    marginTop: 7,
  },
  lockedCard: {
    opacity: 0.72,
  },
  lockedIcon: {
    backgroundColor: "rgba(255,255,255,0.055)",
  },
  lockedTitle: {
    color: "#A5A5A8",
  },
  lockedDescription: {
    color: "#707174",
  },
  objectivesCard: {
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    paddingHorizontal: 17,
  },
  objectiveRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 10,
  },
  objectiveIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "rgba(103,212,208,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  objectiveIconComplete: {
    backgroundColor: TEAL,
  },
  objectiveContent: {
    flex: 1,
    marginLeft: 13,
  },
  objectiveTitle: {
    color: WHITE,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "500",
    marginBottom: 3,
  },
  objectiveDescription: {
    color: GREY,
    fontSize: 11.5,
    lineHeight: 17,
  },
  objectiveStatus: {
    color: TEAL,
    fontSize: 9.5,
    fontWeight: "600",
    marginLeft: 8,
  },
  objectiveDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.09)",
  },
  objectiveProgressText: {
    color: DARK_GREY,
    fontSize: 10,
    marginLeft: 53,
    marginBottom: 15,
  },
  footerNote: {
    color: DARK_GREY,
    fontSize: 11.5,
    lineHeight: 17,
    textAlign: "center",
    marginTop: 14,
    marginBottom: 10,
  },
  bottomNavWrapper: {
    position: "absolute",
    left: 30,
    right: 30,
    height: 82,
    borderRadius: 42,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(35,38,40,0.88)",
  },
  bottomNav: {
    ...StyleSheet.absoluteFillObject,
  },
  navItem: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
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
  navText: {
    color: "#C5C5C8",
    fontSize: 11.5,
    lineHeight: 16,
  },
  navActive: {
    color: TEAL,
  },
});
