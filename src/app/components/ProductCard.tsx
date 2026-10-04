
import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
} from "react-native";

import { faPlus, faHeart as fh } from '@fortawesome/free-solid-svg-icons/';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons/';
import { useState } from "react";
import { ProductCardProps } from "../navigation/types";


function toggle(onFavorite?: (product: any) => void, product?: any, favorite?: boolean) {
    onFavorite?.(product)
    favorite = !favorite
    console.log("Favorite toggled:", favorite);
    return favorite;
}

export default function ProductCard({
    product,
    onAdd,
    onFavorite,
    onPress
}: ProductCardProps) {

    let isFavorite = false;
    const [favorite, setFav] = useState(isFavorite);
    return (
        <View style={styles.card}>

            {/* Favorite */}
            <Pressable
                style={styles.favorite}
                onPress={() => {
                    isFavorite = toggle(onFavorite, product, isFavorite)
                    setFav(isFavorite)
                }}
            >
                <FontAwesomeIcon icon={ favorite ? faHeart : fh } size={18} color="#18211C" />

            </Pressable>

            {/* Product image */}
            <Pressable
                accessibilityRole="button"
                onPress={() => onPress?.(product)}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                {/* Product information */}
                <Text
                    style={styles.name}
                    numberOfLines={1}
                >
                    {product.name}
                </Text>

                <Text style={styles.price}>
                    ₹{product.price}
                </Text>
            </Pressable>

            {/* Add button */}
            <Pressable
                style={styles.addButton}
                onPress={() => onAdd?.(product)}
            >
                <FontAwesomeIcon icon={faPlus} size={21}
                    color="#FFFFFF" />
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,

        minHeight: 190,

        marginHorizontal: 5,
        marginBottom: 10,

        padding: 8,

        backgroundColor: "#FFFFFF",

        borderWidth: 1,
        borderColor: "#E7E9E4",

        borderRadius: 13,
    },

    favorite: {
        position: "absolute",

        right: 8,
        top: 8,

        zIndex: 2,

        width: 27,
        height: 27,

        borderRadius: 14,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(255,255,255,0.9)",
    },

    imageContainer: {
        height: 105,

        justifyContent: "center",
        alignItems: "center",

        marginBottom: 4,
    },

    image: {
        width: "85%",
        height: "85%",
    },

    name: {
        marginTop: 3,

        fontSize: 11,
        fontWeight: "500",

        color: "#18211C",
    },

    price: {
        marginTop: 4,

        fontSize: 13,
        fontWeight: "700",

        color: "#18211C",
    },

    addButton: {
        position: "absolute",

        right: 8,
        bottom: 8,

        width: 27,
        height: 27,

        borderRadius: 14,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#285943",
    },
});