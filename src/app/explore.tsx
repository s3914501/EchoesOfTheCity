import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

const gameVideo = require("../../assets/images/echoes-game.mp4");

const GAME_URL =
  "https://play.unity.com/en/games/50872a5c-3c17-4928-bdef-d4f5da92d1ab/echoes-of-the-city";

export default function ExploreScreen() {
  const router = useRouter();

  const player = useVideoPlayer(gameVideo, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  const openGame = async () => {
    await Linking.openURL(GAME_URL);
  };

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={styles.video}
        contentFit="contain"
        nativeControls
        allowsFullscreen={false}
      />

      <View style={styles.gameLinkContainer}>
        <Pressable
          onPress={openGame}
          accessibilityRole="link"
          accessibilityLabel="Play the full Echoes of the City game"
          style={({ pressed }) => [styles.gameLink, pressed && styles.pressed]}
        >
          <LinearGradient
            colors={["#003F38", "#006B5E", "#12BFA8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gameLinkGradient}
          >
            <Ionicons
              name="game-controller-outline"
              size={19}
              color="#C8F5D0"
            />
            <Text style={styles.gameLinkText}>PLAY THE FULL GAME</Text>
            <Ionicons name="open-outline" size={17} color="#C8F5D0" />
          </LinearGradient>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Close gameplay"
      >
        <Ionicons name="close" size={24} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
  },

  video: {
    width: "100%",
    height: "100%",
  },

  gameLinkContainer: {
    position: "absolute",
    top: 58,
    left: 18,
    right: 76,
    zIndex: 10,
  },

  gameLink: {
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(95,224,215,0.48)",
  },

  gameLinkGradient: {
    minHeight: 44,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  gameLinkText: {
    color: "#C8F5D0",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.7,
  },

  closeButton: {
    position: "absolute",
    top: 55,
    right: 18,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 11,
  },

  pressed: {
    opacity: 0.6,
  },
});
