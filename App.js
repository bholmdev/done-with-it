import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
    return (
       <View style={styles.container}>
            <WelcomeScreen />
            <StatusBar style="auto" />
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%"
    }
});
