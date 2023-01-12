import { Text, View } from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AppText from './app/components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
        </View>
    );
};
