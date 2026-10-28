import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const GREEN = "#67B85A";
const DARK_GREEN = "#164A2B";
const WHITE = "#FFFFFF";

const memories = [
  {
    id: "memory-seat-1",
    label: "Cardigan Festival",
    x: "30%",
    y: "34%",
    story:
      "The Cardigan Festival made the street feel completely different. There was music, food, people talking and so many small moments happening around us. For a few hours, Cardigan Street felt less like a road and more like a place where everyone could belong.",
    author: "Mia",
    date: "21/09/2026",
  },
  {
    id: "memory-seat-2",
    label: "City Routine",
    x: "62%",
    y: "27%",
    story:
      "I used to walk through this part of Melbourne every day without really noticing it. After a while, the familiar buildings, streets and people started becoming part of my routine. Sometimes you don't realise a place matters until you look back.",
    author: "Daniel",
    date: "14/03/2026",
  },
  {
    id: "memory-seat-3",
    label: "Quiet Moment",
    x: "49%",
    y: "52%",
    story:
      "Whenever university gets overwhelming, I come here for a few minutes and just sit. The trees make the city feel quieter, even though the streets around me are still busy. It has become my little pause in Melbourne.",
    author: "Sophie",
    date: "02/05/2026",
  },
  {
    id: "memory-seat-4",
    label: "Community",
    x: "23%",
    y: "65%",
    story:
      "One of my favourite things about Melbourne is how many different communities can exist within the same neighbourhood. The food, buildings, languages and people around these streets all add another layer to the city.",
    author: "Marco",
    date: "27/06/2026",
  },
  {
    id: "state-library-inside",
    label: "State Library",
    x: "77%",
    y: "57%",
    story:
      "Won my first chess game in Melbourne here and won 10 bucks from a bet with a stranger. 😆",
    author: "John White",
    date: "13/02/2026",
  },
  {
    id: "state-library-front",
    label: "Lost Ring",
    x: "69%",
    y: "75%",
    story:
      "Lost my wedding ring in this bush two years ago and cannot find it. 😭😭😭",
    author: "Anna",
    date: "08/08/2024",
  },
  {
    id: "state-library-surrounding",
    label: "City Reflection",
    x: "43%",
    y: "81%",
    story:
      "I remember sitting here after a long day and watching people move through the city. Everyone seemed to be going somewhere, but for a moment I had nowhere I needed to be.",
    author: "Alex",
    date: "19/11/2025",
  },
];

export default function MapScreen() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = memories.find((memory) => memory.id === selectedId);

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <View style={styles.park}>
          <Text style={styles.parkLabel}>CARLTON GARDENS</Text>
        </View>

        <View style={[styles.road, styles.roadHorizontalOne]} />
        <View style={[styles.road, styles.roadHorizontalTwo]} />
        <View style={[styles.road, styles.roadVerticalOne]} />
        <View style={[styles.road, styles.roadVerticalTwo]} />
        <View style={[styles.road, styles.roadDiagonal]} />

        <View style={styles.streetLabelOne}>
          <Text style={styles.streetText}>CARDIGAN STREET</Text>
        </View>
        <View style={styles.streetLabelTwo}>
          <Text style={styles.streetText}>MELBOURNE CBD</Text>
        </View>

        {memories.map((memory, index) => (
          <Pressable
            key={memory.id}
            onPress={() => setSelectedId(memory.id)}
            style={[
              styles.markerPosition,
              { left: memory.x as `${number}%`, top: memory.y as `${number}%` },
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Open memory: ${memory.label}`}
          >
            <View
              style={[
                styles.marker,
                index >= 4 && styles.darkMarker,
                selectedId === memory.id && styles.selectedMarker,
              ]}
            >
              <Ionicons
                name="leaf"
                size={22}
                color={index >= 4 ? "#C8F5D0" : DARK_GREEN}
              />
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.title}>
        <LinearGradient
          colors={["#003F38", "#006B5E", "#12BFA8"]}
          style={styles.titleGradient}
        >
          <Text style={styles.titleText}>Memory Seed Map</Text>
        </LinearGradient>
      </View>

      <Pressable
        onPress={() => router.back()}
        style={styles.closeButton}
        accessibilityRole="button"
        accessibilityLabel="Close map"
      >
        <Ionicons name="close" size={25} color={WHITE} />
      </Pressable>

      <View style={styles.legend}>
        <View style={styles.legendDot} />
        <Text style={styles.legendText}>Explore community memories</Text>
      </View>

      <Modal
        visible={!!selected}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedId(null)}
      >
        <View style={styles.modalBackground}>
          <Pressable style={styles.scrim} onPress={() => setSelectedId(null)} />

          {selected && (
            <LinearGradient
              colors={["#003F38", "#006B5E", "#12BFA8"]}
              locations={[0, 0.45, 1]}
              style={styles.panel}
            >
              <View style={styles.handle} />

              <Pressable
                onPress={() => setSelectedId(null)}
                style={styles.backButton}
                accessibilityRole="button"
                accessibilityLabel="Close memory"
              >
                <Ionicons name="arrow-back" size={23} color={WHITE} />
              </Pressable>

              <View style={styles.seedIcon}>
                <Ionicons name="leaf" size={36} color={DARK_GREEN} />
              </View>

              <Text style={styles.storyLabel}>STORY SEED</Text>

              <ScrollView
                style={styles.storyScroll}
                contentContainerStyle={styles.storyContent}
                showsVerticalScrollIndicator={false}
              >
                <Text style={styles.storyText}>“{selected.story}”</Text>
                <Text style={styles.author}>— {selected.author}</Text>
                <Text style={styles.date}>{selected.date}</Text>
              </ScrollView>

              <Pressable
                onPress={() => setSelectedId(null)}
                style={styles.doneButton}
                accessibilityRole="button"
              >
                <Text style={styles.doneText}>Done</Text>
              </Pressable>
            </LinearGradient>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080C0B",
    overflow: "hidden",
  },
  map: {
    flex: 1,
    backgroundColor: "#192521",
    overflow: "hidden",
  },
  park: {
    position: "absolute",
    left: "8%",
    top: "13%",
    width: "44%",
    height: "35%",
    backgroundColor: "#243D2C",
    borderRadius: 24,
    transform: [{ rotate: "-8deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  parkLabel: {
    color: "#7FA889",
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: "600",
  },
  road: {
    position: "absolute",
    backgroundColor: "#303A36",
    borderColor: "#45514B",
    borderWidth: 1,
  },
  roadHorizontalOne: {
    left: "-10%",
    top: "30%",
    width: "120%",
    height: 25,
    transform: [{ rotate: "-5deg" }],
  },
  roadHorizontalTwo: {
    left: "-10%",
    top: "62%",
    width: "120%",
    height: 30,
    transform: [{ rotate: "4deg" }],
  },
  roadVerticalOne: {
    left: "37%",
    top: "-10%",
    width: 25,
    height: "120%",
    transform: [{ rotate: "8deg" }],
  },
  roadVerticalTwo: {
    left: "70%",
    top: "-10%",
    width: 23,
    height: "120%",
    transform: [{ rotate: "-6deg" }],
  },
  roadDiagonal: {
    left: "-10%",
    top: "48%",
    width: "120%",
    height: 18,
    transform: [{ rotate: "-23deg" }],
    opacity: 0.8,
  },
  streetLabelOne: {
    position: "absolute",
    left: "8%",
    top: "53%",
    transform: [{ rotate: "-23deg" }],
  },
  streetLabelTwo: {
    position: "absolute",
    right: "8%",
    top: "42%",
  },
  streetText: {
    color: "#8B9890",
    fontSize: 9,
    letterSpacing: 1.5,
  },
  markerPosition: {
    position: "absolute",
    marginLeft: -22,
    marginTop: -22,
    zIndex: 5,
  },
  marker: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: WHITE,
    borderWidth: 2,
    borderColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  darkMarker: {
    backgroundColor: DARK_GREEN,
  },
  selectedMarker: {
    borderWidth: 3,
    borderColor: "#B8F5A9",
    transform: [{ scale: 1.12 }],
  },
  title: {
    position: "absolute",
    top: 18,
    left: 16,
    right: 70,
    alignItems: "center",
  },
  titleGradient: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(95,224,215,0.48)",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#C8F5D0",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.6,
  },
  closeButton: {
    position: "absolute",
    right: 18,
    top: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  legend: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  legendDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: GREEN,
  },
  legendText: {
    color: WHITE,
    fontSize: 12,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
  },
  panel: {
    height: "75%",
    width: "100%",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 35,
    paddingHorizontal: 28,
    paddingBottom: 24,
    alignItems: "center",
    overflow: "hidden",
  },
  handle: {
    position: "absolute",
    top: 10,
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 22,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.38)",
    backgroundColor: "rgba(255,255,255,0.09)",
  },
  seedIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  storyLabel: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  storyScroll: {
    flex: 1,
    width: "100%",
  },
  storyContent: {
    paddingBottom: 16,
  },
  storyText: {
    color: WHITE,
    fontSize: 18,
    lineHeight: 27,
  },
  author: {
    color: WHITE,
    fontSize: 19,
    textAlign: "right",
    marginTop: 20,
  },
  date: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 13,
    textAlign: "right",
    marginTop: 4,
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
    marginTop: 12,
  },
  doneText: {
    color: WHITE,
    fontSize: 17,
    fontWeight: "500",
  },
});
