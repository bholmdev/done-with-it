import "react-native-gesture-handler";
import Screen from ".//app/components/Screen";
import { useState } from "react";
import { Text, TextInput } from "react-native";


export default function App() {
    const [firstName, setFirstName] = useState("");

    return (
        <Screen>
            <Text>{firstName}</Text>
            <TextInput
                secureTextEntry
                clearButtonMode="always"
                maxLength={5}
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