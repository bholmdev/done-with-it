import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors"
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText
                    numberOfLines={1}
                    style={styles.title}
                >
                    {title}
                </AppText>
                <AppText
                    numberOfLines={2}
                    style={styles.subTitle}
                >
                    {subTitle}
                </AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    }
});

export default Card;