import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  PanResponder,
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
const RED = "#FF6B6B";

type Echo = {
  id: number;
  time: string;
  duration: string;
};

export default function RecordScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);

  const [echoes, setEchoes] = useState<Echo[]>([
    {
      id: 1,
      time: "4:03 pm",
      duration: "00:02",
    },
  ]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    if (isRecording) {
      timer = setInterval(() => {
        setRecordingDuration((previous) => previous + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRecording]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };

  const startRecording = () => {
    setRecordingDuration(0);
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);

    const now = new Date();

    const time = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    const newEcho: Echo = {
      id: Date.now(),
      time,
      duration: formatDuration(recordingDuration),
    };

    setEchoes((previous) => [newEcho, ...previous]);
    setRecordingDuration(0);
  };

  const handleRecordButton = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const deleteEcho = (id: number) => {
    setEchoes((previous) => previous.filter((echo) => echo.id !== id));
  };

  const playEcho = () => {
    Alert.alert("Echo", "Your echo is ready to play.");
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true}
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

        <Text style={styles.title}>Record a sound</Text>

        <Text style={styles.subtitle}>
          Capture a moment, a voice, or a sound from{"\n"}
          your city.
        </Text>

        {/* RECORDING CARD */}

        <View style={styles.recordCard}>
          <View
            style={[
              styles.recordCircleOuter,
              isRecording && styles.recordingOuter,
            ]}
          >
            <View
              style={[
                styles.recordCircleMiddle,
                isRecording && styles.recordingMiddle,
              ]}
            >
              <Pressable
                style={({ pressed }) => [
                  styles.recordButton,
                  isRecording && styles.recordButtonActive,
                  pressed && styles.pressed,
                ]}
                onPress={handleRecordButton}
              >
                <Ionicons
                  name={isRecording ? "stop" : "mic-outline"}
                  size={38}
                  color={BLACK}
                />
              </Pressable>
            </View>
          </View>

          <Text style={styles.timer}>{formatDuration(recordingDuration)}</Text>

          <Text style={styles.readyText}>
            {isRecording ? "Recording your echo..." : "Your echo is ready"}
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.playButton,
              pressed && styles.pressed,
            ]}
            onPress={playEcho}
          >
            <Ionicons name="play" size={17} color={TEAL} />

            <Text style={styles.playText}>Play echo</Text>
          </Pressable>
        </View>

        {/* PAST ECHOES */}

        <Text style={styles.pastLabel}>PAST ECHOES</Text>

        <View style={styles.echoList}>
          {echoes.map((echo) => (
            <SwipeEcho
              key={echo.id}
              echo={echo}
              onDelete={() => deleteEcho(echo.id)}
              onPlay={playEcho}
            />
          ))}
        </View>
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

function SwipeEcho({
  echo,
  onDelete,
  onPlay,
}: {
  echo: Echo;
  onDelete: () => void;
  onPlay: () => void;
}) {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 10 &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
        );
      },

      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(Math.max(gestureState.dx, -105));
        }
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50) {
          Animated.spring(translateX, {
            toValue: -105,
            useNativeDriver: true,
            friction: 8,
          }).start();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            friction: 8,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={styles.swipeContainer}>
      {/* DELETE AREA BEHIND THE CARD */}

      <View style={styles.deleteBackground}>
        <Pressable
          style={({ pressed }) => [
            styles.deleteButton,
            pressed && styles.deletePressed,
          ]}
          onPress={onDelete}
        >
          <Ionicons name="trash-outline" size={23} color={WHITE} />

          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>

      {/* MOVING CARD */}

      <Animated.View
        style={[
          styles.echoCard,
          {
            transform: [
              {
                translateX,
              },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        {/* ICON */}

        <View style={styles.echoIcon}>
          <Ionicons name="pulse-outline" size={31} color={TEAL} />
        </View>

        {/* INFORMATION */}

        <View style={styles.echoContent}>
          <Text style={styles.echoTitle}>My echo</Text>

          <Text style={styles.echoDetails}>
            Today · {echo.time} · {echo.duration}
          </Text>
        </View>

        {/* PLAY */}

        <Pressable
          style={({ pressed }) => [
            styles.echoPlayButton,
            pressed && styles.pressed,
          ]}
          onPress={onPlay}
        >
          <Ionicons name="play" size={18} color={TEAL} />
        </Pressable>
      </Animated.View>
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

  recordCard: {
    width: "100%",
    height: 405,
    marginTop: 34,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(255,255,255,0.035)",
    alignItems: "center",
    justifyContent: "center",
  },

  recordCircleOuter: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.16)",
    alignItems: "center",
    justifyContent: "center",
  },

  recordingOuter: {
    borderColor: "rgba(103,212,208,0.55)",
  },

  recordCircleMiddle: {
    width: 145,
    height: 145,
    borderRadius: 72.5,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.28)",
    alignItems: "center",
    justifyContent: "center",
  },

  recordingMiddle: {
    borderColor: TEAL,
  },

  recordButton: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
  },

  recordButtonActive: {
    transform: [{ scale: 0.92 }],
  },

  timer: {
    color: WHITE,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: "500",
    marginTop: 16,
  },

  readyText: {
    color: WHITE,
    fontSize: 14,
    marginTop: 3,
    opacity: 0.9,
  },

  playButton: {
    height: 44,
    paddingHorizontal: 22,
    borderRadius: 23,
    borderWidth: 1.5,
    borderColor: TEAL,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  playText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 7,
  },

  pastLabel: {
    color: TEAL,
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginTop: 34,
    marginBottom: 16,
  },

  echoList: {
    gap: 12,
  },

  swipeContainer: {
    width: "100%",
    height: 86,
    borderRadius: 23,
    overflow: "hidden",
    position: "relative",
  },

  deleteBackground: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 105,
    backgroundColor: "#C94F55",
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButton: {
    width: 105,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  deleteText: {
    color: WHITE,
    fontSize: 11,
    fontWeight: "600",
    marginTop: 2,
  },

  deletePressed: {
    opacity: 0.65,
  },

  echoCard: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 86,

    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    backgroundColor: "rgba(17,20,22,1)",

    flexDirection: "row",
    alignItems: "center",

    paddingLeft: 14,
    paddingRight: 12,

    zIndex: 5,
    elevation: 5,
  },

  echoIcon: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: "rgba(103,212,208,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },

  echoContent: {
    flex: 1,
    marginLeft: 13,
    paddingRight: 55,
  },

  echoTitle: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },

  echoDetails: {
    color: WHITE,
    fontSize: 12.5,
    opacity: 0.85,
  },

  echoPlayButton: {
    position: "absolute",
    right: 12,
    top: 23,

    width: 40,
    height: 40,
    borderRadius: 20,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",

    alignItems: "center",
    justifyContent: "center",

    zIndex: 10,
    elevation: 10,
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
