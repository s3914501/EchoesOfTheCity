import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TEAL = "#67D4D0";
const WHITE = "#FFFFFF";
const GREY = "#B6B6BA";
const DARK_GREY = "#8D8F94";

const activities = [
  {
    icon: "restaurant-outline",
    category: "COMMUNITY TABLE",
    title: "Free Food Exchange",
    detailTitle: "Free Food Exchange",
    description:
      "Share food, discover something new and meet people from the Cardigan Street community.",
    detailDescription:
      "Bring a little extra food, discover something new or simply sit down and share a meal with people from the Cardigan Street community.",
    detail:
      "The Community Table creates a simple space for people to exchange food and conversation. You can bring something to share, try food from someone else or just join the table and meet people from the neighbourhood.",
    time: "10:00 AM – 12:00 PM",
    location: "Cardigan Street Community Table",
  },
  {
    icon: "chatbubbles-outline",
    category: "STORY EXCHANGE",
    title: "Share a Memory",
    detailTitle: "Share a Memory",
    description:
      "Exchange a personal memory about Cardigan Street and hear how the place has shaped someone else's story.",
    detailDescription:
      "Share a personal memory connected to Cardigan Street and listen to stories from other people who have experienced the street in different ways.",
    detail:
      "Everyone experiences a place differently. At Story Exchange, you can share a memory, listen to another person's experience or simply discover how everyday moments can become part of a city's collective story.",
    time: "11:00 AM – 1:00 PM",
    location: "Cardigan Street Story Corner",
  },
  {
    icon: "bulb-outline",
    category: "STREET OF IDEAS",
    title: "Future Street Lab",
    detailTitle: "Future Street Lab",
    description:
      "Imagine what Cardigan Street could become. Add your ideas for a more connected and sustainable future.",
    detailDescription:
      "Imagine a different future for Cardigan Street and contribute ideas for making the area more connected, welcoming and sustainable.",
    detail:
      "The Future Street Lab invites people to think beyond the street as it exists today. Add an idea, respond to someone else's suggestion or explore different possibilities for the future of Cardigan Street.",
    time: "12:00 PM – 2:00 PM",
    location: "Cardigan Street Ideas Lab",
  },
  {
    icon: "leaf-outline",
    category: "FUTURE GARDEN",
    title: "Grow the Street",
    detailTitle: "Grow the Street",
    description:
      "Help create a temporary community garden and explore ways to bring more nature into the city.",
    detailDescription:
      "Get involved in creating a temporary community garden and explore simple ways to bring more nature into Melbourne's streets.",
    detail:
      "Grow the Street is a hands-on activity focused on bringing nature into the urban environment. Help plant, arrange and care for the temporary garden while talking with others about greener city spaces.",
    time: "1:00 PM – 3:00 PM",
    location: "Cardigan Street Future Garden",
  },
  {
    icon: "musical-notes-outline",
    category: "SOUNDS OF CARDIGAN",
    title: "Voices of the Street",
    detailTitle: "Voices of the Street",
    description:
      "Listen to recorded voices, sounds and stories collected from people who know Cardigan Street.",
    detailDescription:
      "Listen to recorded voices, everyday sounds and personal stories collected from people connected to Cardigan Street.",
    detail:
      "The Sounds of Cardigan activity turns the street into a collection of voices and sounds. Explore recordings from local people and discover the small details that make Cardigan Street feel familiar.",
    time: "2:00 PM – 4:00 PM",
    location: "Cardigan Street Sound Station",
  },
  {
    icon: "construct-outline",
    category: "REPAIR & REUSE",
    title: "Community Make",
    detailTitle: "Community Make",
    description:
      "Bring an old object back to life and learn how repairing and reusing can reduce waste.",
    detailDescription:
      "Bring an old object and give it a second life while learning how repair and reuse can become part of everyday community life.",
    detail:
      "Community Make is a practical space for repairing, creating and sharing skills. Bring something that needs a little attention, learn from others and explore how small acts of repair can reduce waste.",
    time: "2:00 PM – 4:00 PM",
    location: "Cardigan Street Repair Workshop",
  },
  {
    icon: "mic-outline",
    category: "OPEN MIC",
    title: "Our City",
    detailTitle: "Our City",
    description:
      "Take the microphone, tell a story, share an idea or simply say what Melbourne means to you.",
    detailDescription:
      "Take the microphone and share a story, idea, memory or thought about what Melbourne means to you.",
    detail:
      "Our City is an open space for different voices. You can tell a story, share an idea, talk about a place that matters to you or simply listen to what other people have to say about Melbourne.",
    time: "4:00 PM – 5:00 PM",
    location: "Cardigan Street Open Mic",
  },
  {
    icon: "walk-outline",
    category: "MEMORY WALK",
    title: "Walk the Street",
    detailTitle: "Walk the Street",
    description:
      "Follow a guided walk through Cardigan Street and discover memories connected to places around you.",
    detailDescription:
      "Join a guided walk through Cardigan Street and discover memories, stories and small details connected to places around you.",
    detail:
      "Walk the Street is a guided exploration of Cardigan Street. Along the route, you'll discover stories connected to specific places and see how everyday spaces can hold memories for different people.",
    time: "4:30 PM – 5:30 PM",
    location: "Cardigan Street Meeting Point",
  },
];

export default function CardiganScreen() {
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

            <Text style={styles.title}>Cardigan Street</Text>

            <Text style={styles.subtitle}>October 3 • Melbourne</Text>
          </View>
        </View>

        <View style={styles.intro}>
          <Text style={styles.introTitle}>Something is happening here.</Text>

          <Text style={styles.introDescription}>
            Explore activities, meet people, exchange stories and imagine what
            Cardigan Street could become together.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionLabel}>TODAY'S ACTIVITIES</Text>

          <Text style={styles.activityCount}>
            {activities.length} activities
          </Text>
        </View>

        <View style={styles.activityList}>
          {activities.map((activity) => (
            <Pressable
              key={activity.title}
              style={({ pressed }) => [
                styles.activityCard,
                pressed && styles.pressed,
              ]}
              onPress={() =>
                router.push({
                  pathname: "/cardigan-event",
                  params: {
                    title: activity.detailTitle,
                    category: activity.category,
                    description: activity.detailDescription,
                    detail: activity.detail,
                    time: activity.time,
                    location: activity.location,
                    icon: activity.icon,
                  },
                })
              }
            >
              <View style={styles.iconContainer}>
                <Ionicons name={activity.icon as any} size={27} color={TEAL} />
              </View>

              <View style={styles.activityContent}>
                <Text style={styles.category}>{activity.category}</Text>

                <Text style={styles.activityTitle}>{activity.title}</Text>

                <Text style={styles.activityDescription}>
                  {activity.description}
                </Text>

                <View style={styles.timeRow}>
                  <Ionicons name="time-outline" size={15} color={DARK_GREY} />

                  <Text style={styles.time}>{activity.time}</Text>
                </View>
              </View>

              <View style={styles.arrowContainer}>
                <Ionicons name="chevron-forward" size={19} color={DARK_GREY} />
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.footer}>
          <Ionicons name="people-outline" size={25} color={TEAL} />

          <Text style={styles.footerTitle}>Be part of the story.</Text>

          <Text style={styles.footerDescription}>
            Every conversation, memory and idea helps shape the future of
            Cardigan Street.
          </Text>
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
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 8,
    marginBottom: 32,
  },

  backButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.06)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 17,
  },

  headerText: {
    flex: 1,
    paddingTop: 1,
  },

  eyebrow: {
    color: TEAL,
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 1.4,
    marginBottom: 5,
  },

  title: {
    color: WHITE,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: "600",
  },

  subtitle: {
    color: GREY,
    fontSize: 15,
    marginTop: 5,
  },

  intro: {
    paddingHorizontal: 8,
    marginBottom: 34,
  },

  introTitle: {
    color: WHITE,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: "500",
    marginBottom: 9,
  },

  introDescription: {
    color: GREY,
    fontSize: 16,
    lineHeight: 24,
  },

  sectionHeader: {
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  sectionLabel: {
    color: TEAL,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.1,
  },

  activityCount: {
    color: DARK_GREY,
    fontSize: 13,
  },

  activityList: {
    width: "100%",
  },

  activityCard: {
    minHeight: 158,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
    backgroundColor: "rgba(255,255,255,0.035)",
    marginBottom: 12,
    padding: 18,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(103,212,208,0.3)",
    backgroundColor: "rgba(103,212,208,0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  activityContent: {
    flex: 1,
    paddingRight: 5,
  },

  category: {
    color: TEAL,
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0.9,
    marginBottom: 5,
  },

  activityTitle: {
    color: WHITE,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: "500",
    marginBottom: 6,
  },

  activityDescription: {
    color: GREY,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },

  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  time: {
    color: DARK_GREY,
    fontSize: 12.5,
    marginLeft: 5,
  },

  arrowContainer: {
    paddingTop: 17,
    paddingLeft: 3,
  },

  footer: {
    marginHorizontal: 8,
    marginTop: 24,
    paddingTop: 25,
    paddingBottom: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.12)",
  },

  footerTitle: {
    color: WHITE,
    fontSize: 21,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 7,
  },

  footerDescription: {
    color: GREY,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    maxWidth: "88%",
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.985 }],
  },
});
