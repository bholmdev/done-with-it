import MessagesScreen from "./app/screens/MessagesScreen";
import "react-native-gesture-handler"
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default function App() {
    return (
        <Screen>
            <Icon
                name="email"
                size={100}
                backgroundColor="red"
                iconColor="white"
            />
        </Screen>
    );
};
