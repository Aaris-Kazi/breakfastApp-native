
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  View
} from "react-native";

import { Ionicons } from "@react-native-vector-icons/ionicons/static";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

import {
  categories,
  products,
} from "../../data/products";
import CategoryCard from "../components/CategoryCard";
import LocationHeader from "../components/LocationHeaders";
import SearchBar from "../components/SearchBar";

type HomeScreenProps = {
  navigation: {
    replace: (screen: string) => void
  }
}

type CategoryCardProps = {
    id: string;
    name: string;
    image: string;
  };

type ProductProps = {
    id: string;
    name: string;
    price: number;
    image: string;
};
const { width, height } = Dimensions.get("window");


export default function HomeScreen({ navigation }: HomeScreenProps) {

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {

    if (!search.trim()) {
      return products;
    }

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [search]);

  const handleLocationPress = () => {
    Alert.alert(
      "Delivery Location",
      "Location selector will be implemented here."
    );
  };

  const handleCategoryPress = (category: CategoryCardProps) => {
    console.log("Category:", category.name);
  };

  const handleAddProduct = (product: ProductProps) => {
    Alert.alert(
      "Added to cart",
      `${product.name} added to your cart.`
    );
  };

  const handleFavorite = (product: ProductProps) => {
    console.log("Favorite:", product.name);
  };

  return (
    // <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        {/* Header */}
        <LocationHeader
          onLocationPress={handleLocationPress}
        />

        {/* Search */}
        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >

          {/* Hero banner */}
          <Pressable style={styles.hero}>

            <View style={styles.heroContent}>

              <Text style={styles.heroTitle}>
                Fresh essentials{"\n"}
                delivered to your home
              </Text>

              <Pressable style={styles.shopButton}>
                <Text style={styles.shopButtonText}>
                  Shop Now
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={14}
                  color="#FFFFFF"
                />
              </Pressable>

            </View>

            <Image
              source={require("../../../assets/images/bannerHero.png")}
              style={styles.heroImage}
              resizeMode="cover"
            />

          </Pressable>


          {/* Categories */}
          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Categories
            </Text>

            <Pressable>
              <Text style={styles.seeAll}>
                See all
              </Text>
            </Pressable>

          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onPress={handleCategoryPress}
              />
            ))}
          </ScrollView>


          {/* Products */}
          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Popular Products
            </Text>

            <Pressable>
              <Text style={styles.seeAll}>
                See all
              </Text>
            </Pressable>

          </View>


          {filteredProducts.length === 0 ? (

            <View style={styles.empty}>
              <Ionicons
                name="search-outline"
                size={35}
                color="#89918B"
              />

              <Text style={styles.emptyText}>
                No products found
              </Text>
            </View>

          ) : (

            <View style={styles.productGrid}>

              {filteredProducts.map((product) => (

                <View
                  key={product.id}
                  style={styles.productWrapper}
                >
                  <ProductCard
                    product={product}
                    onAdd={handleAddProduct}
                    onFavorite={handleFavorite}
                  />
                </View>

              ))}

            </View>

          )}

        </ScrollView>

      </View>

  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#FAF8F3",
  },

  container: {
    flex: 1,
    backgroundColor: "#FAF8F3",
  },

  content: {
    paddingHorizontal: 15,
    paddingBottom: 100,
  },

  /* Hero */

  hero: {
    height: 145,

    overflow: "hidden",

    borderRadius: 13,

    backgroundColor: "#E7EADF",

    marginBottom: 22,

    position: "relative",
  },

  heroContent: {
    position: "absolute",
    // opacity: 0.9,

    zIndex: 2,

    left: 15,
    top: 16,
  },

  heroTitle: {
    fontSize: 15,
    lineHeight: 19,

    fontWeight: "700",

    color: "#18211C",
  },

  shopButton: {
    marginTop: 12,

    alignSelf: "flex-start",

    paddingHorizontal: 13,
    height: 29,

    borderRadius: 15,

    backgroundColor: "#285943",

    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  shopButtonText: {
    color: "#FFFFFF",

    fontSize: 10,
    fontWeight: "600",
  },

  heroImage: {
    position: "absolute",

    left: 0,
    top: 0,

    width: "100%",
    height: "100%",

    opacity: 0.8,
  },

  /* Sections */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 11,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",

    color: "#18211C",
  },

  seeAll: {
    fontSize: 11,
    fontWeight: "500",

    color: "#285943",
  },

  /* Categories */

  categoryList: {
    paddingBottom: 22,
  },

  /* Products */

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",

    marginHorizontal: -5,
  },

  productWrapper: {
    width: "50%",
  },

  empty: {
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 50,
  },

  emptyText: {
    marginTop: 10,

    color: "#89918B",
    fontSize: 13,
  },

});