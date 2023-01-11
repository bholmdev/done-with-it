import { StyleSheet, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <Button
                color="blue"
                title="Click Me"
                onPress={() => Alert.prompt("My title", "My message", text => console.log(text))}/>
        </SafeAreaView>
    );
}
const containerStyle = { backgroundColor: "orange" }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
