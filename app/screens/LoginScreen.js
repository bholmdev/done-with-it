import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import { useState } from "react";
import AppButton from "../components/AppButton"

const LoginScreen = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/images/logo-red.png")}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton
                title="Login"
                onPress={() => console.log(email, password)}
            />
        </Screen>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;