import { Text } from 'react-native';
import styles from "./styles"

const AppText = ({ children, style }) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
};

export default AppText;