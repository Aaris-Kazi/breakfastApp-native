import { useEffect } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Leaf from '../components/SVGs/Leaf'
import type { AppStackParamList } from '../../navigation/types'

type SplashScreenProps = NativeStackScreenProps<AppStackParamList, 'Splash'>

const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('home');
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
     <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FAF8F3"
      />

      {/* Logo + Brand */}
      <View style={styles.brandContainer}>
        <View style={styles.logoContainer}>
          <Leaf />
        </View>

        <Text style={styles.logoText}>
          Nära
        </Text>

        <Text style={styles.tagline}>
          Everyday essentials,{"\n"}
          closer to you.
        </Text>
      </View>

      {/* Hero Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/splash-grocery.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>

      {/* Loading */}
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="small"
          color="#285943"
        />
      </View>

      {/* Bottom spacing */}
      <View style={styles.bottomSpace} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F3",
    alignItems: "center",
  },

  brandContainer: {
    alignItems: "center",
    paddingTop: height * 0.16,
    zIndex: 2,
  },

  logoContainer: {
    height: 58,
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    fontSize: 42,
    fontWeight: "700",
    color: "#10251C",
    letterSpacing: -1.5,
    marginTop: 2,
  },

  tagline: {
    marginTop: 20,
    fontSize: 19,
    lineHeight: 27,
    color: "#10251C",
    textAlign: "center",
    fontWeight: "400",
  },

  imageContainer: {
    position: "absolute",
    // left: 0,
    // right: 0,
    // bottom: 0,
    height: height * 1.55,
    overflow: "hidden",
  },

  heroImage: {
    width: width,
    height: height * 1.05,
  },

  loadingContainer: {
    position: "absolute",
    bottom: 65,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 248, 243, 0.85)",
  },

  bottomSpace: {
    flex: 1,
  },
});

export default SplashScreen