import React from "react";
import { Formik, Form } from "formik";
import { CustomInput } from "./CustomInput";
import * as Yup from "yup";

export const Signup = () => {
  const validate = Yup.object({
    fullName: Yup.string()
      .max(30, "Must be 30 character or less")
      .required("Required"),

    email: Yup.string().email("email is invalid").required("email is required"),

    contactNumber: Yup.string()
      .min(10, "Contact Number Must Be Ten digits")
      .max(10, "Contact Number Must Be Ten digits")
      .required("contact is required"),

    address: Yup.string().required("Address required"),

    zipCode: Yup.string()
      .min(6, "zipCode must be Six digits")
      .max(6, "zipCode must be Six digits")
      .required("Pin No is required"),

    // password: Yup.string()
    //   .min(6, "Password Must be at least 6 characters")
    //   .required("Password is required"),

    // confirmPassword: Yup.string()
    //   .oneOf(
    //     [Yup.ref("password"), null],
    //     "password must be  match with ConfirmPassword"
    //   )
    //   .required("Confirm Password is required"),
  });

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        contactNumber: "",
        specialDemand: "",
        address: "",
        zipCode: "",
        jobType: "",
        // password: "",
        // confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <div>
          <Form>
            <h4 className="">package booking form</h4>
            <CustomInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Your Full Name"
            ></CustomInput>

            <CustomInput
              label="First Name"
              name="email"
              type="email"
              placeholder="Your email add"
            ></CustomInput>
            <CustomInput
              label="Contact Number"
              name="contactNumber"
              type="number"
              placeholder="Your contact number(Whatsup)"
            ></CustomInput>
            <CustomInput
              label="Your Address"
              name="address"
              type="text"
              placeholder="your full address"
            ></CustomInput>
            <CustomInput
              label="Your Pin No"
              name="zipCode"
              type="number"
              placeholder="Pin No."
            ></CustomInput>
            <CustomInput
              label="Any Special Demand About Package"
              name="specialDemand"
              type="text"
              placeholder="Any Special Demand About Package(Addons)"
            ></CustomInput>

            <button className="btn_submit" type="submit">
              Submit
            </button>
            {/* <button className="btn btn-danger mt-3 ml-3" >
              Reset
            </button> */}
          </Form>
        </div>
      )}
    </Formik>
  );
};

// export default Signup;
// {
//   /* <h1 className="my-4 font-weight-bold .display-4">Register form</h1> */
// }
