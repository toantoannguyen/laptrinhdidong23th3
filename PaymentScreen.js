import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = ({ route }) => {
  const navigation = useNavigation();
  const { totalPrice } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Main Content */}
      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutTitle}>Checkout</Text>
        <Text style={styles.totalPrice}>${totalPrice.toLocaleString()}</Text>
        <Text style={styles.gstText}>Including GST (18%)</Text>
      </View>

      {/* Payment Methods */}
      <View style={styles.paymentMethods}>
        <TouchableOpacity style={[styles.methodButton, styles.selectedMethod]}>
          <Ionicons
            name="card"
            size={20}
            color="#fff"
            style={styles.methodIcon}
          />
          <Text style={[styles.methodText, { color: "#fff" }]}>
            Credit card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.methodButton}>
          <Ionicons
            name="logo-apple"
            size={20}
            color="#000"
            style={styles.methodIcon}
          />
          <Text style={styles.methodText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Card number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="5261 4141 0151 8472"
            editable={false}
          />
          <View style={styles.cardIcons}>
            <Ionicons name="card" size={20} color="#FF8C00" />
            <Ionicons
              name="scan"
              size={20}
              color="#808080"
              style={styles.scanIcon}
            />
          </View>
        </View>

        <Text style={styles.label}>Cardholder name</Text>
        <TextInput style={styles.input} value="Christie Doe" editable={false} />

        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput
              style={styles.input}
              value="06 / 2024"
              editable={false}
            />
          </View>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>CVV / CVC</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value="915" editable={false} />
              <Ionicons name="help-circle" size={20} color="#808080" />
            </View>
          </View>
        </View>

        <Text style={styles.infoText}>
          We will send you an order details to your email after the successful
          payment
        </Text>
      </View>

      {/* Pay Button */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate("Success")}
      >
        <Ionicons
          name="lock-closed"
          size={20}
          color="#fff"
          style={styles.payIcon}
        />
        <Text style={styles.payButtonText}>Pay for the order</Text>
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
  checkoutContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  checkoutTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF8C00",
    marginVertical: 5,
  },
  gstText: {
    fontSize: 14,
    color: "#808080",
  },
  paymentMethods: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  methodButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  selectedMethod: {
    backgroundColor: "#32CD32",
  },
  methodIcon: {
    marginRight: 10,
  },
  methodText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  cardIcons: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  scanIcon: {
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInputContainer: {
    width: "48%",
  },
  infoText: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
    marginVertical: 20,
  },
  payButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32CD32",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  payIcon: {
    marginRight: 10,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PaymentScreen;
