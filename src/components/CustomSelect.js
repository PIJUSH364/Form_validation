import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {/* <label>{label}</label> */}
      <div className="text_field_deatils">
            <select
              {...field}
              {...props}
              className={`form_field${meta.touched && meta.error ? "input-error" : ""}`}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
      </div>
    </>
  );
};
export default CustomSelect;
