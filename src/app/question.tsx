import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const TEAL = "#67D4D0";
const DARK_GREEN = "#004F4B";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

const QUESTIONS = [
  {
    question: "It’s a sunny Saturday, where are you most excited to go?",
    answers: [
      "Wander through laneways and parks on my own",
      "Join a guided heritage walking tour",
      "Head to a workshop or market where I can create something",
      "Go to a festival or event where I can meet new people",
    ],
  },
  {
    question:
      "When you arrive at the Future Play Lab event, what kind of experience would you most want to have?",
    answers: [
      "Explore the space and discover something unexpected",
      "Learn about the place and hear the stories behind it",
      "Take part in a hands-on activity and create something",
      "Meet new people and share the experience with them",
    ],
  },
  {
    question: "What kind of city experience would you remember?",
    answers: [
      "A peaceful moment somewhere unexpected",
      "A story connected to Melbourne's past",
      "Creating something with other people",
      "Sharing an experience with new people",
    ],
  },
];

export default function QuestionScreen() {
  const router = useRouter();
  const safeAreaInsets = useSafeAreaInsets();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const slideUp = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    Animated.timing(slideUp, {
      toValue: 0,
      duration: 650,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, []);

  const question = QUESTIONS[currentQuestion];

  const selectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
    setSelectedAnswer(null);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      return;
    }

    if (currentQuestion === 0) {
      setCurrentQuestion(1);
      setSelectedAnswer(null);
      return;
    }

    if (currentQuestion === 1) {
      setCurrentQuestion(2);
      setSelectedAnswer(null);
      return;
    }

    if (currentQuestion === 2) {
      if (selectedAnswer === 0) {
        router.push("/city-explorer");
        return;
      }

      if (selectedAnswer === 1) {
        router.push("/story-collector");
        return;
      }

      if (selectedAnswer === 2) {
        router.push("/urban-builder");
        return;
      }

      if (selectedAnswer === 3) {
        router.push("/culture-collector");
        return;
      }
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.blackBackground} />

      <View
        style={[
          styles.header,
          {
            paddingTop: safeAreaInsets.top,
          },
        ]}
      >
        <Pressable
          onPress={() => router.back()}
          hitSlop={10}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.backText}>login</Text>
        </Pressable>
      </View>

      <Animated.View
        style={[
          styles.questionPanel,
          {
            transform: [{ translateY: slideUp }],
          },
        ]}
      >
        <View style={styles.progressContainer}>
          {QUESTIONS.map((_, index) => (
            <Pressable
              key={index}
              onPress={() => goToQuestion(index)}
              hitSlop={10}
              style={[
                styles.progressDot,
                index === currentQuestion && styles.progressDotActive,
              ]}
            />
          ))}
        </View>

        <Text style={styles.intro}>Let us know you...</Text>

        <Text style={styles.question}>{question.question}</Text>

        <View style={styles.answersContainer}>
          {question.answers.map((answer, index) => {
            const selected = selectedAnswer === index;

            return (
              <Pressable
                key={index}
                onPress={() => selectAnswer(index)}
                style={({ pressed }) => [
                  styles.answerRow,
                  pressed && styles.answerPressed,
                ]}
              >
                <View
                  style={[
                    styles.answerCard,
                    selected && styles.answerCardSelected,
                  ]}
                >
                  <BlurView
                    intensity={selected ? 55 : 45}
                    tint="dark"
                    style={StyleSheet.absoluteFill}
                  />

                  <View
                    style={[
                      styles.glassLight,
                      selected && styles.glassLightSelected,
                    ]}
                  />

                  <Text style={styles.answerText}>{answer}</Text>
                </View>

                <View
                  style={[
                    styles.answerCircle,
                    selected && styles.answerCircleSelected,
                  ]}
                >
                  <BlurView
                    intensity={selected ? 55 : 45}
                    tint="dark"
                    style={StyleSheet.absoluteFill}
                  />

                  <View
                    style={[
                      styles.circleGlassLight,
                      selected && styles.circleGlassLightSelected,
                    ]}
                  />

                  <Text style={styles.answerLetter}>
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={handleNext}
          style={({ pressed }) => [
            styles.nextButton,
            pressed && styles.nextPressed,
          ]}
        >
          <BlurView
            intensity={45}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.nextGlassFill} />

          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      </Animated.View>

      <View style={styles.leftSideStroke} />
      <View style={styles.rightSideStroke} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK,
    overflow: "hidden",
  },

  blackBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BLACK,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 92,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    zIndex: 30,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    height: 42,
    marginLeft: 18,
    marginTop: 8,
  },

  backArrow: {
    color: WHITE,
    fontSize: 34,
    fontWeight: "300",
    lineHeight: 34,
    marginRight: 3,
  },

  backText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "400",
  },

  pressed: {
    opacity: 0.6,
  },

  questionPanel: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: SCREEN_HEIGHT * 0.705,
    backgroundColor: DARK_GREEN,
    borderTopLeftRadius: 58,
    borderTopRightRadius: 58,
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: TEAL,
    paddingHorizontal: "8.5%",
    paddingTop: 27,
    paddingBottom: 22,
    zIndex: 10,
    overflow: "hidden",
  },

  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    marginBottom: 25,
  },

  progressDot: {
    width: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: "#D7D7D7",
  },

  progressDotActive: {
    backgroundColor: TEAL,
  },

  intro: {
    color: TEAL,
    fontSize: 17,
    fontWeight: "400",
    marginBottom: 20,
  },

  question: {
    color: WHITE,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "500",
    marginBottom: 20,
  },

  answersContainer: {
    width: "100%",
    gap: 13,
  },

  answerRow: {
    width: "100%",
    height: 65,
    justifyContent: "center",
  },

  answerCard: {
    position: "absolute",
    left: 16,
    right: 0,
    height: 65,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "rgba(103, 212, 208, 0.10)",
    borderWidth: 1.5,
    borderColor: "rgba(103, 212, 208, 0.85)",
    justifyContent: "center",
    paddingLeft: 62,
    paddingRight: 18,
  },

  answerCardSelected: {
    backgroundColor: "rgba(53, 200, 184, 0.30)",
    borderColor: TEAL,
  },

  glassLight: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(103, 212, 208, 0.08)",
  },

  glassLightSelected: {
    backgroundColor: "rgba(53, 200, 184, 0.25)",
  },

  answerText: {
    color: WHITE,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "500",
    zIndex: 3,
  },

  answerCircle: {
    position: "absolute",
    left: 0,
    width: 58,
    height: 58,
    borderRadius: 29,
    overflow: "hidden",
    backgroundColor: "rgba(0, 79, 75, 0.48)",
    borderWidth: 1.5,
    borderColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },

  answerCircleSelected: {
    backgroundColor: "rgba(53, 200, 184, 0.48)",
  },

  circleGlassLight: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(103, 212, 208, 0.07)",
  },

  circleGlassLightSelected: {
    backgroundColor: "rgba(53, 200, 184, 0.25)",
  },

  answerLetter: {
    color: WHITE,
    fontSize: 21,
    fontWeight: "500",
    zIndex: 3,
  },

  answerPressed: {
    transform: [{ scale: 0.985 }],
  },

  nextButton: {
    alignSelf: "flex-end",
    width: 132,
    height: 52,
    marginTop: 20,
    borderRadius: 27,
    overflow: "hidden",
    backgroundColor: "rgba(103, 212, 208, 0.10)",
    borderWidth: 1.5,
    borderColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
  },

  nextGlassFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(103, 212, 208, 0.08)",
  },

  nextPressed: {
    transform: [{ scale: 0.97 }],
  },

  nextText: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "500",
    zIndex: 3,
  },

  leftSideStroke: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 1.5,
    height: SCREEN_HEIGHT * 0.41,
    backgroundColor: TEAL,
    zIndex: 20,
  },

  rightSideStroke: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 1.5,
    height: SCREEN_HEIGHT * 0.41,
    backgroundColor: TEAL,
    zIndex: 20,
  },
});
