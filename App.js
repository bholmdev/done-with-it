import { StyleSheet, View, Text } from 'react-native';

export default function App() {
    return (
       <View
            style={{
                backgroundColor: "#fff",
                flex: 1
            }}
       >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    flex: 2
                }}
            />
            <View
                style={{
                    backgroundColor: "gold",
                    flex: 1
                }}
            />
            <View
                style={{
                    backgroundColor: "tomato",
                    flex: 1
                }}
            />
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue",
        alignItems: "center",
        justifyContent: "center"
    },
});
