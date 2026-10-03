import { Stack } from "expo-router";
import { SafeAreaView, } from "react-native-safe-area-context";
import {
  StyleSheet,
} from 'react-native'

import App from "./app";

export default function RootLayout() {
  return (
  // <SafeAreaView style={styles.container}>
  //   <App />
  // </SafeAreaView>
  <App />
    // <Stack />
  );
  // return (<SafeAreaView>
  //   <Stack />
  // </SafeAreaView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});