
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";


type CategoryCardProps = {
  category: {
    id: string;
    name: string;
    image: string;
  };
  onPress?: (category: any) => void;
};

export default function CategoryCard({
  category,
  onPress,
}: CategoryCardProps) {
  return (
    <Pressable
      style={styles.container}
    //   onPress={() => onPress?.(category)}
    >
      <View style={styles.imageContainer}>
        <Image
        //   source={{ uri: category.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.name}>
        {/* {category.name} */}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 78,
    marginRight: 10,
  },

  imageContainer: {
    height: 65,
    borderRadius: 10,
    backgroundColor: "#F5F4EF",

    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 52,
    height: 52,
  },

  name: {
    marginTop: 7,

    fontSize: 10,
    color: "#18211C",
    textAlign: "center",
  },
});