import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Success Screen</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Hình minh họa */}
        <Image
          source={{ uri: "https://via.placeholder.com/200" }} // Thay bằng URL hình minh họa thực tế
          style={styles.illustration}
        />
        <Text style={styles.successTitle}>Payment Success, YAYY!</Text>
        <Text style={styles.successMessage}>
          we will send order details and invoice in your contact no. and
          registered email
        </Text>
        <TouchableOpacity style={styles.checkDetails}>
          <Text style={styles.checkDetailsText}>Check Details</Text>
          <Ionicons name="arrow-forward" size={20} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      {/* Nút Download Invoice */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    color: "#808080",
    textAlign: "center",
    marginBottom: 20,
  },
  checkDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkDetailsText: {
    fontSize: 16,
    color: "#1E90FF",
    marginRight: 5,
  },
  downloadButton: {
    backgroundColor: "#1E90FF",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SuccessScreen;
