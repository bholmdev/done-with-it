import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors.js";
import AppText from "./AppText";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
        title,
        subTitle,
        image,
        IconComponent,
        onPress,
        renderRightActions
}) => {
    return (
        <GestureHandlerRootView>
            <Swipeable
                renderRightActions={renderRightActions}
            >
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image
                            style={styles.image}
                            source={image}
                        />}
                        <View style={styles.detailContainer}>
                            <AppText 
                                style={styles.title}
                                numberOfLines={1}
                            >
                                {title}
                            </AppText>
                            {subTitle && (
                                <AppText
                                    numberOfLines={2}
                                    style={styles.subTitle}
                                >
                                    {subTitle}
                                </AppText>
                            )}
                        </View>
                        <MaterialCommunityIcons
                            color={colors.medium}
                            name="chevron-right"
                            size={25}
                        />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailContainer: {
        flex: 1,
        marginLeft: 5,
        justifyContent: "center"
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