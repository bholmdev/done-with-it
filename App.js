import { StyleSheet, View, Text } from 'react-native';

export default function App() {
    return (
       <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}
       >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: 100,
                    height: 300,
                    alignSelf: "flex-start"
                }}
            />
            <View
                style={{
                    backgroundColor: "gold",
                    width: 100,
                    height: 200
                }}
            />
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 100,
                    height: 100
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
