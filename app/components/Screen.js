import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

const Screen = ({ children }) => {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
});

export default Screen;