import AppButton from "./AppButton";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
        />
    )
};

export default SubmitButton;