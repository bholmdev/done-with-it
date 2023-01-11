import { StyleSheet, Platform, SafeAreaView, Button, StatusBar } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Click Me"
                onPress={() => console.log("button pressed")}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});
