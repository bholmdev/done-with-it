import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../../app/config/colors"

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View styles={styles.container}>
        {icon && <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
        />}
        <TextInput style={styles.textInput} {...otherProps} />
    </View>
  )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.dark
    }
})

export default AppTextInput;