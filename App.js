import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import "react-native-gesture-handler";
import Screen from "./app/components/Screen";


export default function App() {
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            alert("You need to enable permission to access the library.");
        }
    };

    useEffect(() => {
        requestPermission();
    }, [])
    

    return (
       <Screen></Screen>
    );
};