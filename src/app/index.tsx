import { Text, View, StyleSheet, Pressable, FlatList } from "react-native";

export default function Index() {
  const data = [
    {id: 1, name: "Item 1"},
    {id: 2, name: "Item 2"},
    {id: 3, name: "Item 3"},
  ]
  return (
    <View style={styles.container}>
      <Text>Nashta Wala</Text>
      <Pressable>
        <Text onPress={() => alert("Button pressed!")}>Button</Text>
      </Pressable>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={
          ({ item }) => <Text>{item.name}</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
