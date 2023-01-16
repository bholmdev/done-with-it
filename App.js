import { Switch } from "react-native";
import "react-native-gesture-handler";
import Screen from ".//app/components/Screen";
import { useState } from "react";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
    const [isNew, setIsNew] = useState(false);

    return (
        <Screen>
            <AppPicker icon="apps" placeholder={"Category"} />
            <AppTextInput icon="email" placeholder="email" />
        </Screen>
    );
};