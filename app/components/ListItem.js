import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors.js";
import AppText from "./AppText/AppText.js";

const ListItem = ({ title, subTitle, image, onPress }) => {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={image}
                />
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500"
    }
})

export default ListItem;