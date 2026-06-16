import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning ☀️</Text>
            <Text style={styles.name}>Anas</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={{ fontSize: 22 }}>👤</Text>
          </View>
        </View>

        {/* Hero Card */}
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>
            Today's Productivity Score
          </Text>

          <Text style={styles.score}>
            87%
          </Text>

          <Text style={styles.heroText}>
            You're ahead of yesterday. Keep your momentum alive.
          </Text>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryText}>
              Start Focus Session
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}

        <View style={styles.statsRow}>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>91%</Text>
            <Text style={styles.statLabel}>Consistency</Text>
          </View>

        </View>

        {/* AI Coach */}

        <View style={styles.aiCard}>
          <Text style={styles.cardTitle}>
            🤖 AI Coach
          </Text>

          <Text style={styles.cardText}>
            You are most productive between 9AM and 11AM.
          </Text>

          <Text style={styles.cardText}>
            Complete your React Native task first.
          </Text>
        </View>

        {/* Mood Section */}

        <Text style={styles.sectionTitle}>
          How are you feeling?
        </Text>

        <View style={styles.moodRow}>
          <TouchableOpacity style={styles.mood}>
            <Text style={styles.emoji}>😴</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mood}>
            <Text style={styles.emoji}>🙂</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mood}>
            <Text style={styles.emoji}>⚡</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mood}>
            <Text style={styles.emoji}>🔥</Text>
          </TouchableOpacity>
        </View>

        {/* Tasks */}

        <Text style={styles.sectionTitle}>
          Today's Focus
        </Text>

        <View style={styles.taskCard}>

          <Text style={styles.task}>
            ✅ React Native Learning
          </Text>

          <Text style={styles.task}>
            ⏳ Workout - 30 mins
          </Text>

          <Text style={styles.task}>
            ⏳ Portfolio Improvements
          </Text>

        </View>

        {/* Progress */}

        <Text style={styles.sectionTitle}>
          Weekly Progress
        </Text>

        <View style={styles.progressCard}>
          <Text style={styles.progressText}>
            Completed 24 of 30 planned tasks
          </Text>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navIcon}>📊</Text>

        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

        <Text style={styles.navIcon}>🤖</Text>
        <Text style={styles.navIcon}>👤</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#071330",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },

  greeting: {
    color: "#A6B4D0",
    fontSize: 15,
  },

  name: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 4,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27,
    backgroundColor: "#11224D",
    justifyContent: "center",
    alignItems: "center",
  },

  heroCard: {
    backgroundColor: "#4F7DFF",
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 24,
  },

  heroTitle: {
    color: "#EAF0FF",
    fontSize: 16,
  },

  score: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "bold",
    marginVertical: 10,
  },

  heroText: {
    color: "#EAF0FF",
    lineHeight: 22,
  },

  primaryButton: {
    marginTop: 20,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 15,
  },

  primaryText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#4F7DFF",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#11224D",
    borderRadius: 25,
    padding: 22,
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#A6B4D0",
    marginTop: 8,
  },

  aiCard: {
    backgroundColor: "#11224D",
    margin: 20,
    padding: 20,
    borderRadius: 25,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  cardText: {
    color: "#A6B4D0",
    marginTop: 10,
    lineHeight: 22,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
  },

  moodRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  mood: {
    backgroundColor: "#11224D",
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  emoji: {
    fontSize: 28,
  },

  taskCard: {
    backgroundColor: "#11224D",
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 20,
  },

  task: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },

  progressCard: {
    backgroundColor: "#11224D",
    margin: 20,
    padding: 20,
    borderRadius: 25,
  },

  progressText: {
    color: "#fff",
    marginBottom: 15,
  },

  progressBar: {
    height: 12,
    backgroundColor: "#1B2E5F",
    borderRadius: 10,
  },

  progressFill: {
    width: "80%",
    height: "100%",
    backgroundColor: "#4F7DFF",
    borderRadius: 10,
  },

  bottomNav: {
    height: 85,
    backgroundColor: "#0C1A3C",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#1B2E5F",
  },

  navIcon: {
    fontSize: 22,
  },

  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4F7DFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
  },

  plus: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});