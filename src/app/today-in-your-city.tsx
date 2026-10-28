import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
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

export default function TodayInYourCityScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom + 120,
        }}
      >
        <View style={styles.content}>
          <View style={styles.topBar}>
            <Pressable
              onPress={() => router.back()}
              hitSlop={12}
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name="chevron-back" size={28} color={WHITE} />
            </Pressable>
          </View>

          <View style={styles.headingRow}>
            <View>
              <Text style={styles.title}>Today in Fitzroy</Text>

              <View style={styles.dateRow}>
                <Text style={styles.date}>Wednesday, 21 May</Text>
              </View>
            </View>

            <View style={styles.weather}>
              <Ionicons name="partly-sunny-outline" size={30} color={WHITE} />
              <Text style={styles.temperature}>16°C</Text>
            </View>
          </View>

          <Text style={styles.sectionLabel}>NEARBY STORY</Text>

          <Pressable
            style={({ pressed }) => [
              styles.storyCard,
              pressed && styles.pressed,
            ]}
          >
            <Image
              source={require("../../assets/images/today-in-your-city.jpg")}
              style={styles.storyImage}
              resizeMode="cover"
            />

            <View style={styles.storyOverlay} />

            <View style={styles.bookmark}>
              <Ionicons name="bookmark-outline" size={26} color={TEAL} />
            </View>

            <View style={styles.storyText}>
              <Text style={styles.quote}>
                “This corner used to be where the old cinema stood...”
              </Text>

              <Text style={styles.storyMeta}>Shared by Maria • 2h ago</Text>
            </View>
          </Pressable>

          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabelNoMargin}>RECENT ECHOES</Text>

            <Text style={styles.seeAll}>See all</Text>
          </View>

          <Pressable style={styles.echoCard}>
            <View style={styles.echoIconBox}>
              <Ionicons name="pulse-outline" size={31} color={TEAL} />
            </View>

            <View style={styles.echoContent}>
              <Text style={styles.echoTitle}>Sounds of Brunswick St</Text>

              <Text style={styles.echoMeta}>3h ago • 00:45</Text>
            </View>

            <View style={styles.playButton}>
              <Ionicons name="play-outline" size={20} color={TEAL} />
            </View>
          </Pressable>

          <Pressable style={styles.echoCard}>
            <Image
              source={require("../../assets/images/today-in-your-city.jpg")}
              style={styles.echoImage}
              resizeMode="cover"
            />

            <View style={styles.echoContent}>
              <Text style={styles.echoTitle}>A memory of the market</Text>

              <Text style={styles.echoMeta}>5h ago • by John</Text>
            </View>

            <View style={styles.playButton}>
              <Ionicons name="play-outline" size={20} color={TEAL} />
            </View>
          </Pressable>

          <Pressable style={styles.echoCard}>
            <Image
              source={require("../../assets/images/today-in-your-city.jpg")}
              style={styles.echoImage}
              resizeMode="cover"
            />

            <View style={styles.echoContent}>
              <Text style={styles.echoTitle}>Lygon St in the 90s</Text>

              <Text style={styles.echoMeta}>1d ago • by Amy</Text>
            </View>

            <View style={styles.playButton}>
              <Ionicons name="play-outline" size={20} color={TEAL} />
            </View>
          </Pressable>
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
          onPress={() => router.push("/")}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color="#C5C5C8"
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </Pressable>

        <Pressable style={[styles.navItem, styles.navItemExplore]}>
          <Ionicons name="map" size={25} color={TEAL} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navActive]}>Explore</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK,
  },

  content: {
    paddingHorizontal: 42,
  },

  topBar: {
    height: 48,
    justifyContent: "center",
    marginBottom: 18,
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 43,
  },

  title: {
    color: WHITE,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "500",
  },

  dateRow: {
    marginTop: 8,
  },

  date: {
    color: GREY,
    fontSize: 15,
    lineHeight: 21,
  },

  weather: {
    alignItems: "center",
    paddingTop: 1,
  },

  temperature: {
    color: GREY,
    fontSize: 14,
    marginTop: 4,
  },

  sectionLabel: {
    color: TEAL,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginBottom: 17,
  },

  storyCard: {
    width: "100%",
    height: 302,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    overflow: "hidden",
    backgroundColor: "#202526",
  },

  storyImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },

  storyOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.30)",
  },

  bookmark: {
    position: "absolute",
    right: 18,
    top: 18,
  },

  storyText: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 23,
  },

  quote: {
    color: WHITE,
    fontSize: 21,
    lineHeight: 29,
    fontWeight: "500",
    marginBottom: 9,
  },

  storyMeta: {
    color: "#D0D0D3",
    fontSize: 14,
    lineHeight: 20,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginTop: 22,
    marginBottom: 36,
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#696A70",
  },

  dotActive: {
    backgroundColor: TEAL,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionLabelNoMargin: {
    color: TEAL,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.1,
  },

  seeAll: {
    color: GREY,
    fontSize: 14,
  },

  echoCard: {
    height: 76,
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
    backgroundColor: "rgba(255,255,255,0.035)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  echoIconBox: {
    width: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: "rgba(103,212,208,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },

  echoImage: {
    width: 54,
    height: 54,
    borderRadius: 17,
  },

  echoContent: {
    flex: 1,
    paddingLeft: 14,
  },

  echoTitle: {
    color: WHITE,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "400",
  },

  echoMeta: {
    color: GREY,
    fontSize: 13,
    marginTop: 4,
  },

  playButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.3,
    borderColor: "rgba(255,255,255,0.30)",
    alignItems: "center",
    justifyContent: "center",
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
