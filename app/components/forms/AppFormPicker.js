import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ items, name, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
        <AppPicker
            item={items}
            onSelectItem={(item) => setFieldValue(name, item)}
            placeholder={placeholder}
            selectedItem={values[name]}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}  />
        </>
    )
};

export default AppFormPicker;