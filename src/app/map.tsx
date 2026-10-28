import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WHITE = "#FFFFFF";
const BLACK = "#000000";

const MEMORY_GREEN = "#67B85A";
const DARK_GREEN = "#164A2B";

const GRADIENT_TOP = "#003F38";
const GRADIENT_MID = "#006B5E";
const GRADIENT_BOTTOM = "#12BFA8";

const WAVE_GREEN = "#5FE0D7";

const memorySeats = [
  {
    id: "memory-seat-1",
    latitude: -37.80485,
    longitude: 144.96355,
    theme: "normal",
  },
  {
    id: "memory-seat-2",
    latitude: -37.80555,
    longitude: 144.96505,
    theme: "normal",
  },
  {
    id: "memory-seat-3",
    latitude: -37.80635,
    longitude: 144.96355,
    theme: "normal",
  },
  {
    id: "memory-seat-4",
    latitude: -37.80595,
    longitude: 144.96195,
    theme: "normal",
  },
  {
    id: "state-library-inside",
    latitude: -37.80925,
    longitude: 144.96535,
    theme: "dark",
  },
  {
    id: "state-library-front",
    latitude: -37.80975,
    longitude: 144.96515,
    theme: "dark",
  },
  {
    id: "state-library-surrounding",
    latitude: -37.81025,
    longitude: 144.96575,
    theme: "dark",
  },
];

const memoryContent: Record<
  string,
  {
    story: string;
    author: string;
    date: string;
  }
> = {
  "memory-seat-1": {
    story:
      "“The Cardigan Festival made the street feel completely different. There was music, food, people talking and so many small moments happening around us. For a few hours, Cardigan Street felt less like a road and more like a place where everyone could belong.”",
    author: "– Mia",
    date: "21/09/2026",
  },

  "memory-seat-2": {
    story:
      "“I used to walk through this part of Melbourne every day without really noticing it. After a while, the familiar buildings, streets and people started becoming part of my routine. Sometimes you don't realise a place matters until you look back.”",
    author: "– Daniel",
    date: "14/03/2026",
  },

  "memory-seat-3": {
    story:
      "“Whenever university gets overwhelming, I come here for a few minutes and just sit. The trees make the city feel quieter, even though the streets around me are still busy. It has become my little pause in Melbourne.”",
    author: "– Sophie",
    date: "02/05/2026",
  },

  "memory-seat-4": {
    story:
      "“One of my favourite things about Melbourne is how many different communities can exist within the same neighbourhood. The food, buildings, languages and people around these streets all add another layer to the city.”",
    author: "– Marco",
    date: "27/06/2026",
  },

  "state-library-inside": {
    story:
      "“Won my first chess game in Melbourne here and won 10 bucks from a bet with a stranger. 😆”",
    author: "– John White",
    date: "13/02/2026",
  },

  "state-library-front": {
    story:
      "“Lost my wedding ring in this bush two years ago and cannot find it. 😭😭😭”",
    author: "– Anna",
    date: "08/08/2024",
  },

  "state-library-surrounding": {
    story:
      "“I remember sitting here after a long day and watching people move through the city. Everyone seemed to be going somewhere, but for a moment I had nowhere I needed to be.”",
    author: "– Alex",
    date: "19/11/2025",
  },
};

const waveformHeights = [18, 30, 45, 28, 52, 34, 20];

export default function MapScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);

  const slideAnim = useRef(new Animated.Value(500)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const waveAnimations = useRef(
    waveformHeights.map(() => new Animated.Value(0.5)),
  ).current;

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Location access needed",
          "Allow location access to see your position on the map.",
        );
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (selectedMemory) {
      slideAnim.setValue(500);
      fadeAnim.setValue(0);

      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 0,
          damping: 22,
          stiffness: 180,
          mass: 0.8,
          useNativeDriver: true,
        }),

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start();

      waveAnimations.forEach((animation, index) => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(animation, {
              toValue: index % 2 === 0 ? 1 : 0.35,
              duration: 420 + index * 55,
              useNativeDriver: true,
            }),
            Animated.timing(animation, {
              toValue: index % 2 === 0 ? 0.35 : 1,
              duration: 420 + index * 55,
              useNativeDriver: true,
            }),
          ]),
        ).start();
      });
    } else {
      waveAnimations.forEach((animation) => {
        animation.stopAnimation();
      });
    }
  }, [selectedMemory]);

  const openMemory = (memoryId: string) => {
    setSelectedMemory(memoryId);
  };

  const closeMemory = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 500,
        duration: 220,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSelectedMemory(null);
    });
  };

  const selectedContent = selectedMemory ? memoryContent[selectedMemory] : null;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -37.8072,
          longitude: 144.9643,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={false}
        showsScale={false}
      >
        {memorySeats.map((seat) => {
          const isDark = seat.theme === "dark";

          return (
            <Marker
              key={seat.id}
              coordinate={{
                latitude: seat.latitude,
                longitude: seat.longitude,
              }}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Pressable
                onPress={() => openMemory(seat.id)}
                style={({ pressed }) => [
                  styles.markerTouchable,
                  pressed && styles.markerTouchablePressed,
                ]}
              >
                <View
                  style={[
                    styles.memorySeatMarker,
                    isDark && styles.darkMemorySeatMarker,
                  ]}
                >
                  <Image
                    source={
                      isDark
                        ? require("../../assets/images/memory-seeds-dark.png")
                        : require("../../assets/images/memory-seeds.jpg")
                    }
                    style={styles.memorySeatImage}
                    resizeMode="contain"
                  />
                </View>
              </Pressable>
            </Marker>
          );
        })}
      </MapView>

      <View
        pointerEvents="none"
        style={[styles.mapTitleWrapper, { top: insets.top + 10 }]}
      >
        <LinearGradient
          colors={[GRADIENT_TOP, GRADIENT_MID, GRADIENT_BOTTOM]}
          locations={[0, 0.45, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.mapTitleGradient}
        >
          <Text style={styles.mapTitleText}>Memory Seed Map</Text>
        </LinearGradient>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.closeButton,
          { top: insets.top + 14 },
          pressed && styles.pressed,
        ]}
        onPress={() => router.back()}
      >
        <Ionicons name="close" size={25} color={WHITE} />
      </Pressable>

      <Modal
        visible={selectedMemory !== null}
        transparent
        animationType="none"
        onRequestClose={closeMemory}
      >
        <View style={styles.modalContainer}>
          <Animated.View
            style={[styles.backgroundFade, { opacity: fadeAnim }]}
          />

          <Animated.View
            style={[
              styles.memoryPanelWrapper,
              {
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <View style={styles.grabberContainer}>
              <View style={styles.panelHandle} />
            </View>

            <LinearGradient
              colors={[GRADIENT_TOP, GRADIENT_MID, GRADIENT_BOTTOM]}
              locations={[0, 0.45, 1]}
              start={{ x: 0.1, y: 0 }}
              end={{ x: 0.9, y: 1 }}
              style={[
                styles.memoryPanel,
                {
                  paddingTop: Math.max(insets.top, 18),
                  paddingBottom: Math.max(insets.bottom, 18),
                },
              ]}
            >
              <Pressable
                style={({ pressed }) => [
                  styles.backButton,
                  pressed && styles.pressed,
                ]}
                onPress={closeMemory}
              >
                <Ionicons name="arrow-back" size={23} color={WHITE} />
              </Pressable>

              <View style={styles.storyIconContainer}>
                <Image
                  source={require("../../assets/images/memory-seeds-dark.png")}
                  style={styles.storyIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.waveform}>
                {waveformHeights.map((height, index) => (
                  <Animated.View
                    key={index}
                    style={[
                      styles.waveBar,
                      {
                        height,
                        transform: [{ scaleY: waveAnimations[index] }],
                      },
                    ]}
                  />
                ))}
              </View>

              <View style={styles.storyContent}>
                <Text style={styles.storyLabel}>STORY SEED:</Text>

                <Text style={styles.storyText}>{selectedContent?.story}</Text>

                <View style={styles.authorContainer}>
                  <Text style={styles.author}>{selectedContent?.author}</Text>

                  <Text style={styles.date}>{selectedContent?.date}</Text>
                </View>
              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.doneButton,
                  pressed && styles.donePressed,
                ]}
                onPress={closeMemory}
              >
                <Text style={styles.doneText}>Done</Text>
              </Pressable>
            </LinearGradient>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  mapTitleWrapper: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 15,
    elevation: 15,
  },

  mapTitleGradient: {
    minWidth: 190,
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(95,224,215,0.48)",
    alignItems: "center",
    justifyContent: "center",
  },

  mapTitleText: {
    color: "#C8F5D0",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.6,
  },

  markerTouchable: {
    alignItems: "center",
    justifyContent: "center",
  },

  markerTouchablePressed: {
    transform: [{ scale: 0.92 }],
    opacity: 0.75,
  },

  memorySeatMarker: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: WHITE,
    borderWidth: 2,
    borderColor: MEMORY_GREEN,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  darkMemorySeatMarker: {
    backgroundColor: DARK_GREEN,
    borderColor: MEMORY_GREEN,
  },

  memorySeatImage: {
    width: 31,
    height: 31,
  },

  closeButton: {
    position: "absolute",
    right: 18,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
    elevation: 20,
  },

  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backgroundFade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.42)",
  },

  memoryPanelWrapper: {
    width: "100%",
    height: "72%",
    position: "relative",
  },

  grabberContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    height: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    elevation: 50,
  },

  panelHandle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.86)",
  },

  memoryPanel: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    paddingHorizontal: 34,
    alignItems: "center",
    overflow: "hidden",
  },

  backButton: {
    position: "absolute",
    left: 20,
    top: 23,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.38)",
    backgroundColor: "rgba(255,255,255,0.09)",
  },

  storyIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  storyIcon: {
    width: 45,
    height: 45,
  },

  waveform: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginTop: 12,
    marginBottom: 13,
  },

  waveBar: {
    width: 8,
    borderRadius: 5,
    backgroundColor: WAVE_GREEN,
  },

  storyContent: {
    width: "100%",
    flex: 1,
    paddingTop: 2,
  },

  storyLabel: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.35,
    marginBottom: 12,
  },

  storyText: {
    color: WHITE,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "400",
  },

  authorContainer: {
    alignItems: "flex-end",
    marginTop: 12,
    paddingRight: 2,
  },

  author: {
    color: WHITE,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "400",
  },

  date: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 14,
    marginTop: 2,
  },

  doneButton: {
    width: 175,
    height: 46,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.68)",
    backgroundColor: "rgba(95,224,215,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 2,
  },

  donePressed: {
    opacity: 0.65,
    transform: [{ scale: 0.97 }],
  },

  doneText: {
    color: WHITE,
    fontSize: 17,
    fontWeight: "500",
  },
});
