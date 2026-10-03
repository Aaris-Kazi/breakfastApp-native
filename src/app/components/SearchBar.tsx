
import {
    View,
    TextInput,
    StyleSheet,
} from "react-native";


import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
};

export default function SearchBar({
    value,
    onChangeText,
}: SearchBarProps) {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={19} color="#89918B" />


            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Search for milk, bread, eggs..."
                placeholderTextColor="#89918B"
                style={styles.input}
                returnKeyType="search"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 42,
        marginHorizontal: 20,
        marginBottom: 14,
        paddingHorizontal: 13,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#F3F4F0",
        borderRadius: 22,
    },

    input: {
        flex: 1,
        marginLeft: 8,

        fontSize: 12,
        color: "#18211C",
    },
});