
import { faChevronDown, faLocationDot} from '@fortawesome/free-solid-svg-icons/';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons/';

import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
type LocationHeaderProps = {
  onLocationPress: () => void;
};


export default function LocationHeader({ onLocationPress }: LocationHeaderProps) {
  
  return (
    <View style={styles.container}>

      <Pressable
        style={styles.location}
        onPress={onLocationPress}
      >
        <FontAwesomeIcon icon={faLocationDot} color="#285943" size={21} />

        <View style={styles.locationText}>
          <Text style={styles.deliverText}>
            Deliver to
          </Text>

          <View style={styles.addressRow}>
            <Text style={styles.address}>
              Stockholm, 113 45
            </Text>
            <FontAwesomeIcon icon={faChevronDown} color="#18211C" size={13} />
            
          </View>
        </View>
      </Pressable>

      <Pressable
        style={styles.notification}
      >
        <FontAwesomeIcon icon={faBell} size={23}
          color="#18211C" />


        <View style={styles.notificationDot} />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationText: {
    marginLeft: 7,
  },

  deliverText: {
    fontSize: 10,
    color: "#89918B",
    marginBottom: 2,
  },

  addressRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  address: {
    fontSize: 13,
    fontWeight: "600",
    color: "#18211C",
    paddingRight: 6,
  },

  notification: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#285943",
  },
});