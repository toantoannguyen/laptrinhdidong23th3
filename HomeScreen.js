import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Sử dụng thư viện icon (cần cài đặt: expo install @expo/vector-icons)

const HomeScreen = () => {
  const navigation = useNavigation();
  // Dữ liệu cho carousel "Explore More"
  const exploreData = [
    {
      id: "1",
      title: "Discover New Features",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Check Our Latest Updates",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello Toan nguyen</Text>
          <Text style={styles.subGreeting}>Welcome back!</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons
              name="search"
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="notifications"
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }} // Thay bằng URL ảnh avatar
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Your Insights Section */}
      <Text style={styles.sectionTitle}>YOUR INSIGHTS</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#E6F0FA" }]}>
          <Ionicons name="scan" size={30} color="#1E90FF" />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardValue}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#FFE4E1" }]}>
          <Ionicons name="warning" size={30} color="#FF4500" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardValue}>Counterfeited 32</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#E0FFFF" }]}>
          <Ionicons name="checkmark-circle" size={30} color="#32CD32" />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardValue}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#F5F5F5" }]}>
          <Ionicons name="calendar" size={30} color="#808080" />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardValue}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More Section */}
      <Text style={styles.sectionTitle}>EXPLORE MORE</Text>
      <FlatList
        horizontal
        data={exploreData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item.image }} style={styles.carouselImage} />
            <Text style={styles.carouselTitle}>{item.title}</Text>
            <TouchableOpacity style={styles.carouselButton}>
              <Text style={styles.carouselButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#1E90FF" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#808080" />
          <Text style={styles.navLabel}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="scan" size={24} color="#808080" />
          <Text style={styles.navLabel}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="time" size={24} color="#808080" />
          <Text style={styles.navLabel}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Cart")}
        >
          <Ionicons name="cart" size={24} color="#FF8C00" />
          <Text style={styles.navLabel}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 16,
    color: "#808080",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 10,
  },
  insightsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  card: {
    width: "48%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardValue: {
    fontSize: 14,
    color: "#808080",
  },
  carouselItem: {
    width: 200,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#E6F0FA",
    padding: 10,
    alignItems: "center",
  },
  carouselImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  carouselTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
  carouselButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  carouselButtonText: {
    color: "#fff",
    fontSize: 12,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#808080",
    marginTop: 5,
  },
});

export default HomeScreen;
