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

export default function HomeScreen() {
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
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.greetingSecond}>
            <Text style={styles.melbourne}>Melbourne</Text>
            <Text style={styles.isAwake}> is awake.</Text>
          </Text>
        </View>

        <Text style={styles.sectionLabel}>YOUR CIVIC IDENTITY</Text>

        <Pressable
          style={({ pressed }) => [
            styles.identityCard,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push("/observer")}
        >
          <View style={styles.identityContent}>
            <Text style={styles.identityRole}>OBSERVER</Text>
            <Text style={styles.identityTitle}>The Observer</Text>
            <Text style={styles.identityDescription}>
              You notice the stories{"\n"}others walk past.
            </Text>
            <View style={styles.identityDots}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </Pressable>

        <Text style={[styles.sectionLabel, styles.makeLabel]}>
          MAKE AN ECHO
        </Text>

        <View style={styles.actionRow}>
          <Pressable
            style={({ pressed }) => [
              styles.actionCard,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push("/record")}
          >
            <Ionicons
              name="pulse-outline"
              size={30}
              color={TEAL}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Record{"\na sound"}</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.actionCard,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push("/share-memory")}
          >
            <Ionicons
              name="pencil-outline"
              size={29}
              color={TEAL}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Share{"\na memory"}</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.actionCard,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push("/add-a-story")}
          >
            <Ionicons
              name="chatbubble-outline"
              size={30}
              color={TEAL}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Add{"\na story"}</Text>
          </Pressable>
        </View>

        <Text style={[styles.sectionLabel, styles.cityLabel]}>
          TODAY IN YOUR CITY
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.memoryCard,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push("/today-in-your-city")}
        >
          <View style={styles.memoryImage}>
            <Image
              source={require("../../assets/images/today-in-your-city.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.memoryContent}>
            <Text style={styles.location}>FITZROY</Text>
            <Text style={styles.memoryTitle}>A memory was shared nearby.</Text>
            <Text style={styles.memoryDescription}>
              “This corner used to be where the old cinema stood...”
            </Text>
          </View>
        </Pressable>

        <Text style={[styles.sectionLabel, styles.cardiganLabel]}>
          TODAY AT CARDIGAN
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.cardiganCard,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push("/cardigan")}
        >
          <View style={styles.cardiganVisual}>
            <Image
              source={require("../../assets/images/today-at-cardigan.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.cardiganContent}>
            <Text style={styles.cardiganMeta}>OCTOBER 3 • CARDIGAN STREET</Text>
            <Text style={styles.cardiganTitle}>
              What’s happening at today’s event.
            </Text>
            <Text style={styles.cardiganDescription}>
              Join activities, explore stories and reimagine our future
              together.
            </Text>
          </View>
        </Pressable>

        <View style={styles.bottomSpace} />
      </ScrollView>

      <View
        style={[
          styles.bottomNavWrapper,
          { bottom: Math.max(insets.bottom, 8) },
        ]}
      >
        <BlurView intensity={45} tint="dark" style={styles.bottomNav} />

        <Pressable style={[styles.navItem, styles.navItemHome]}>
          <Ionicons name="home" size={24} color={TEAL} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navActive]}>Home</Text>
        </Pressable>

        <Pressable
          style={[styles.navItem, styles.navItemMake]}
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
          <Text style={styles.navText}>Gameplay</Text>
        </Pressable>

        <Pressable
          style={[styles.navItem, styles.navItemMe]}
          onPress={() => router.push("/profile")}
        >
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
  header: {
    marginBottom: 42,
  },
  greeting: {
    color: WHITE,
    fontSize: 29,
    fontWeight: "400",
    lineHeight: 38,
  },
  greetingSecond: {
    fontSize: 39,
    lineHeight: 47,
    fontWeight: "600",
  },
  melbourne: {
    color: TEAL,
    fontWeight: "600",
  },
  isAwake: {
    color: WHITE,
    fontWeight: "600",
  },
  sectionLabel: {
    color: TEAL,
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginBottom: 16,
  },
  cityLabel: {
    marginTop: 38,
  },
  cardiganLabel: {
    marginTop: 38,
  },
  makeLabel: {
    marginTop: 38,
  },
  identityCard: {
    width: "100%",
    height: 190,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    overflow: "hidden",
  },
  identityContent: {
    flex: 1,
    padding: 27,
    justifyContent: "center",
  },
  identityRole: {
    color: TEAL,
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 7,
  },
  identityTitle: {
    color: WHITE,
    fontSize: 26,
    fontWeight: "500",
    marginBottom: 7,
  },
  identityDescription: {
    color: GREY,
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "400",
    maxWidth: "78%",
  },
  identityDots: {
    flexDirection: "row",
    gap: 11,
    marginTop: 13,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#696A70",
  },
  dotActive: {
    backgroundColor: TEAL,
  },
  memoryCard: {
    width: "100%",
    height: 190,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  memoryImage: {
    width: 118,
    height: 154,
    marginLeft: 17,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#252B2D",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  memoryContent: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 12,
  },
  location: {
    color: TEAL,
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 10,
  },
  memoryTitle: {
    color: WHITE,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "500",
    marginBottom: 7,
  },
  memoryDescription: {
    color: GREY,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
  },
  cardiganCard: {
    width: "100%",
    height: 190,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  cardiganVisual: {
    width: 118,
    height: 154,
    marginLeft: 17,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#092A2B",
  },
  cardiganContent: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 12,
  },
  cardiganMeta: {
    color: TEAL,
    fontSize: 11.5,
    fontWeight: "500",
    letterSpacing: 0.35,
    lineHeight: 17,
    marginBottom: 9,
  },
  cardiganTitle: {
    color: WHITE,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "500",
    marginBottom: 7,
  },
  cardiganDescription: {
    color: GREY,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
  },
  actionCard: {
    flex: 1,
    minHeight: 112,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
  },
  actionIcon: {
    marginBottom: 7,
  },
  actionText: {
    color: WHITE,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "center",
  },
  bottomSpace: {
    height: 20,
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
    left: "50%",
  },
  navItemMake: {
    left: "25%",
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
