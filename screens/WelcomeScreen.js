import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";

const backgroundImage = require("../assets/images/background.jpg");
const logoImage = require("../assets/images/logo-red.png");

const WelcomeScreen = () => {
    return (
        <View style={welcomeStyles.container}>
            <ImageBackground
                style={welcomeStyles.background}
                source={backgroundImage}
            >
                <Image
                    source={logoImage}
                    style={welcomeStyles.logo}
                />
                <Text
                    style={welcomeStyles.slogan}
                >
                    Sell What You Don't Need
                </Text>
            </ImageBackground>
            <View style={welcomeStyles.loginButton}></View>
            <View style={welcomeStyles.registerButton}></View>
        </View>
    );
};

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    background: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    logo: {
        alignSelf: "center",
        top: 150,
        height: 75,
        width: 75,
    },
    slogan: {
        alignSelf: "center",
        top: 155
    },
    loginButton: {
        backgroundColor: "#fc5c65",
        height: "10%",
        width: "100%"
    },
    registerButton: {
        backgroundColor: "#4ecdc4",
        height: "10%",
        width: "100%"
    }
});

export default WelcomeScreen;