import { StyleSheet, Image, View } from "react-native";
import CHAIR from "../assets/images/chair.jpg";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={styles.closeIcon}
            >
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View
                style={styles.deleteIcon}
            >
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={CHAIR}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: "absolute",
        top: 60,
        left: 30
    },
    deleteIcon: {
        position: "absolute",
        top: 60,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ViewImageScreen;