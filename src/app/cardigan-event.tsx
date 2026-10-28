import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const GREY = "#B6B6BA";
const DARK_GREY = "#8D8F94";

export default function CardiganEventScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const { title, category, description, detail, time, location, icon } =
    useLocalSearchParams<{
      title?: string;
      category?: string;
      description?: string;
      detail?: string;
      time?: string;
      location?: string;
      icon?: string;
    }>();

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + 18,
            paddingBottom: insets.bottom + 35,
          },
        ]}
      >
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={23} color={WHITE} />
          </Pressable>

          <View style={styles.headerText}>
            <Text style={styles.eyebrow}>TODAY AT</Text>

            <Text style={styles.headerTitle}>Cardigan Street</Text>

            <Text style={styles.subtitle}>October 3 • Melbourne</Text>
          </View>
        </View>

        <View style={styles.heroIcon}>
          <Ionicons
            name={(icon || "people-outline") as any}
            size={34}
            color={TEAL}
          />
        </View>

        <Text style={styles.category}>{category}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="time-outline" size={20} color={TEAL} />
            </View>

            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>TIME</Text>
              <Text style={styles.infoValue}>{time}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="location-outline" size={20} color={TEAL} />
            </View>

            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>LOCATION</Text>
              <Text style={styles.infoValue}>{location}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ABOUT THIS ACTIVITY</Text>

          <Text style={styles.detailText}>{detail}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },

  scrollContent: {
    paddingHorizontal: 22,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 28,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#111214",
    borderWidth: 1,
    borderColor: "#292B2E",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  pressed: {
    opacity: 0.65,
  },

  headerText: {
    flex: 1,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.5,
    color: TEAL,
    marginBottom: 4,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: WHITE,
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 13,
    color: DARK_GREY,
  },

  heroIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#071B1B",
    borderWidth: 1,
    borderColor: "#1D3D3D",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 22,
  },

  category: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1.3,
    color: TEAL,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "600",
    color: WHITE,
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: GREY,
    marginBottom: 26,
  },

  infoCard: {
    backgroundColor: "#0B0D0E",
    borderWidth: 1,
    borderColor: "#25282A",
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 30,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
  },

  infoIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#071B1B",
    borderWidth: 1,
    borderColor: "#1D3D3D",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  infoText: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 1.3,
    color: DARK_GREY,
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 15,
    color: WHITE,
    lineHeight: 20,
  },

  divider: {
    height: 1,
    backgroundColor: "#25282A",
  },

  section: {
    paddingBottom: 20,
  },

  sectionLabel: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.4,
    color: TEAL,
    marginBottom: 12,
  },

  detailText: {
    fontSize: 16,
    lineHeight: 25,
    color: GREY,
  },
});
