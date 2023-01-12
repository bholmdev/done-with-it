import { Text, View } from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text
                style={{
                   fontSize: 30,
                   fontFamily: "Roboto",
                   fontStyle: "italic",
                   fontWeight: "bold",
                   color: "tomato",
                   textTransform: "capitalize",
                   textAlign: "justify",
                   lineHeight: 30
                }}
            >
                I love React Native! This is my first react native app!  Here is some more text!
            </Text>
        </View>
    );
};
