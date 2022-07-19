import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="text_field_deatils">
     
      <input
        className={`form_field${meta.touched && meta.error && "is-invalid"}`}
        type="text"
        autoComplete="off"
        {...field}
        {...props}
        
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="error"
      ></ErrorMessage>
    </div>
  );
};

// {
//   /* <div className="mb-2"></div> */
// }
// className={`form-control shadow-none ${meta.touched && meta.error &&'is-invalid'}`}
