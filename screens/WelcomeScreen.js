import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import BACKGROUNDIMAGE from "../assets/images/background.jpg";
import LOGO from "../assets/images/logo-red.png";
import colors from "../config/colors";

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            style={styles.background}
            source={BACKGROUNDIMAGE}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
                <Text>Sell What You Don't Need</Text>
                </View>
            <View
                style={styles.loginButton}
            >

            </View>
            <View
                style={styles.registerButton}
            >

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
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary
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
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    },
});

export default WelcomeScreen;