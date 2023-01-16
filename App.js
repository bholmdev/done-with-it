import { Switch } from "react-native";
import "react-native-gesture-handler";
import Screen from ".//app/components/Screen";
import { useState } from "react";

export default function App() {
    const [isNew, setIsNew] = useState(false);

    return (
        <Screen>
            <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
        </Screen>
    );
};