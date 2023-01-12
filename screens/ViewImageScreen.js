import { StyleSheet, Image, View } from "react-native";
import CHAIR from "../app/assets/images/chair.jpg";
import colors from "../config/colors";

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={styles.closeIcon}
            >

            </View>
            <View
                style={styles.deleteIcon}
            >

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
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 60,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
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