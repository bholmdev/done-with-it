import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import BACKGROUNDIMAGE from "../app/assets/images/background.jpg";
import LOGO from "../app/assets/images/logo-red.png";
import AppButton from "../components/AppButton";

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={BACKGROUNDIMAGE}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70
    },
    logo: {
        width: 100,
        height: 100
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
});

export default WelcomeScreen;