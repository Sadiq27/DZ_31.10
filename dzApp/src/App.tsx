import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";

export const App = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const goBack = () => {
    
  };

  const addToFavorites = () => {

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.topButtons}>
          <TouchableOpacity onPress={goBack} style={styles.roundButton}>
            <Text style={styles.buttonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={addToFavorites} style={styles.roundButton}>
            <Text style={styles.buttonText}>{"♥"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageCarousel}>
          <Image
            source={require('./assets/img1.png')}
            style={styles.productImage}
          />
          <Image
            source={require('./assets/img2.png')}
            style={styles.productImage}
          />
        </View>

        <Text style={styles.title}>Men's Harrington Jacket</Text>
        <Text style={styles.price}>$148</Text>

        <View style={styles.selector}>
          <Text style={styles.selectorLabel}>Size</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>S</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.selector}>
          <Text style={styles.selectorLabel}>Color</Text>
          <TouchableOpacity style={styles.dropdown}>
            <View style={styles.colorDot} />
          </TouchableOpacity>
        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.selectorLabel}>Quantity</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityNumber}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.description}>
          Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you comfort and style.
        </Text>

        <TouchableOpacity style={styles.addToBagButton}>
          <Text style={styles.addToBagText}>Add to Bag</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    alignItems: "center",
    padding: 20,
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#333",
  },
  imageCarousel: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  productImage: {
    width: 150,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    color: "#6B7280",
    marginTop: 5,
  },
  selector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  dropdown: {
    width: 60,
    height: 40,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 16,
  },
  colorDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#B4B4B4",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 18,
  },
  quantityNumber: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 20,
    textAlign: "center",
  },
  addToBagButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 30,
  },
  addToBagText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

