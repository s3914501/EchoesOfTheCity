import React from "react";
import { StyleSheet, View } from "react-native";

export default function EchoGame() {
  return (
    <View style={styles.container}>
      <iframe
        src="http://localhost:8000"
        title="Echoes of the City Gameplay"
        style={styles.game}
        allow="autoplay; fullscreen; gamepad"
        allowFullScreen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    overflow: "hidden",
  },
  game: {
    width: "100%",
    height: "100%",
    border: "none",
    backgroundColor: "#000000",
  } as any,
});
