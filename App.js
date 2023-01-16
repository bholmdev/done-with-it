import "react-native-gesture-handler";
import Screen from ".//app/components/Screen";
import { Text, TextInput } from "react-native";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";
import styles from "./app/components/AppText/styles";


export default function App() {
    const [firstName, setFirstName] = useState("");

    return (
        <Screen>
            <AppTextInput placeholder="Username" icon="email" />
        </Screen>
    );
};