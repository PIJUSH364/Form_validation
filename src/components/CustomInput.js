import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
     <div className="text_field_deatils">
          <input
            {...field}
            {...props}
            className={`form_field${meta.touched && meta.error ? "input-error" : ""}`}
          />
          {meta.touched && meta.error && <div className="error">{meta.error}</div>}
      </div>
    </>
  );
};
export default CustomInput;
