import { useState } from "react";
import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "../../navigation/types";

import { faArrowLeft, faPlus, faMinus, faHeart as fh } from '@fortawesome/free-solid-svg-icons/';
import { faHeart } from '@fortawesome/free-regular-svg-icons/';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


type ProductDetailsProps = NativeStackScreenProps<AppStackParamList, "ProductDetails">;

export default function ProductPage({ navigation, route }: ProductDetailsProps) {
    const { product } = route.params;

    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);

    const increaseQuantity = () => {
        setQuantity((current) => current + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((current) => Math.max(1, current - 1));
    };

    const totalPrice = product.price * quantity;

    const handleAddToCart = () => {
        Alert.alert(
            "Added to Cart",
            `${quantity} × ${product.name} added to your cart.`
        );
    };

    return (
        // <SafeAreaView style={styles.safeArea}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
        >
            {/* Header */}
            <View style={styles.header}>
                <Pressable
                    style={styles.headerButton}
                    onPress={() => navigation.goBack()}
                >
                    <FontAwesomeIcon icon={faArrowLeft} size={22}
                        color="#18211C" />
                    {/* <Ionicons
                        name="arrow-back"
                        size={22}
                        color="#18211C"
                    /> */}
                </Pressable>

                <Pressable
                    style={styles.headerButton}
                    onPress={() => setFavorite(!favorite)}
                >
                    <FontAwesomeIcon icon={favorite ? fh : faHeart} size={23}
                        color={favorite ? "#B94A48" : "#18211C"}
                    />
                </Pressable>
            </View>

            {/* Product Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                    resizeMode="contain"
                />
            </View>

            {/* Product Information */}
            <View style={styles.productInfo}>
                <Text style={styles.productName}>
                    {product.name}
                </Text>

                <Text style={styles.price}>
                    ₹{product.price}
                </Text>

                <Text style={styles.description}>
                    Fresh and nutritious milk, perfect for your
                    everyday needs.
                </Text>
            </View>

            {/* Quantity */}
            <View style={styles.quantityContainer}>
                <Pressable
                    style={styles.quantityButton}
                    onPress={decreaseQuantity}
                >
                    <FontAwesomeIcon icon={faMinus} size={18}
                        color="#18211C"
                    />
                </Pressable>

                <Text style={styles.quantity}>
                    {quantity}
                </Text>

                <Pressable
                    style={styles.quantityButton}
                    onPress={increaseQuantity}
                >
                    <FontAwesomeIcon icon={faPlus} size={18}
                        color="#18211C"
                    />
                </Pressable>
            </View>

            {/* Add to Cart */}
            <Pressable
                style={styles.addToCartButton}
                onPress={handleAddToCart}
            >
                <Text style={styles.addToCartText}>
                    Add to Cart
                </Text>

                <Text style={styles.totalPrice}>
                    ₹{totalPrice}
                </Text>
            </Pressable>
        </ScrollView>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FAF8F3",
    },

    scrollContent: {
        paddingBottom: 30,
    },

    header: {
        height: 58,
        paddingHorizontal: 20,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerButton: {
        width: 40,
        height: 40,

        borderRadius: 20,

        alignItems: "center",
        justifyContent: "center",
    },

    imageContainer: {
        marginHorizontal: 20,

        height: 330,

        borderRadius: 18,

        backgroundColor: "#F7F8F5",

        alignItems: "center",
        justifyContent: "center",

        overflow: "hidden",
    },

    productImage: {
        width: "90%",
        height: "90%",
    },

    productInfo: {
        paddingHorizontal: 26,
        paddingTop: 22,
    },

    productName: {
        fontSize: 22,
        fontWeight: "700",
        color: "#18211C",
    },

    price: {
        marginTop: 5,

        fontSize: 20,
        fontWeight: "700",

        color: "#18211C",
    },

    description: {
        marginTop: 12,

        fontSize: 13,
        lineHeight: 19,

        color: "#5F6862",

        maxWidth: 330,
    },

    quantityContainer: {
        marginTop: 25,
        marginLeft: 26,

        width: 105,
        height: 38,

        borderRadius: 19,

        borderWidth: 1,
        borderColor: "#E2E6E1",

        backgroundColor: "#FFFFFF",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 5,
    },

    quantityButton: {
        width: 30,
        height: 30,

        borderRadius: 15,

        alignItems: "center",
        justifyContent: "center",
    },

    quantity: {
        fontSize: 15,
        fontWeight: "600",
        color: "#18211C",
    },

    addToCartButton: {
        marginHorizontal: 26,
        marginTop: 18,

        height: 50,

        borderRadius: 25,

        backgroundColor: "#285943",

        alignItems: "center",
        justifyContent: "center",
    },

    addToCartText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFFFFF",
    },

    totalPrice: {
        position: "absolute",

        right: 18,

        fontSize: 13,
        fontWeight: "600",

        color: "#FFFFFF",
    },
});