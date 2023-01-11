import { StyleSheet, View, Text } from 'react-native';

export default function App() {
    return (
       <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
            }}
       >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: 100,
                    height: 100
                }}
            />
            <View
                style={{
                    backgroundColor: "gold",
                    width: 100,
                    height: 100,
                    top: 20,
                    left: 20,
                    position: "absolute"
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
