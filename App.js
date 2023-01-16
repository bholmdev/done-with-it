import "react-native-gesture-handler";
import Screen from ".//app/components/Screen";
import { Text, TextInput } from "react-native";
import { useState } from "react";


export default function App() {
    const [firstName, setFirstName] = useState("");

    return (
        <Screen>
            <Text>{firstName}</Text>
            <TextInput
                secureTextEntry
                clearButtonMode="always"
                keyboardType="numeric"
                onChangeText={text => setFirstName(text)}
                placeholder="First Name"
                style={{
                    borderBottomColor: "#ccc",
                    borderBottomWidth: 1
                }}
            />
        </Screen>
    );
};
