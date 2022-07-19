import * as yup from "yup";

export const advancedSchema = yup.object().shape({
 
  selectPackage: yup.string().required("Required"),
  fullName: yup.string()
  .min(5, "Name at least five character")
  .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Email is Required"),

  contactNumber: yup
    .string()
    .max(10, "contact Number must be Ten Digits")
    .min(10, "contact Number must be Ten Digits")
    .required("Required"),
  address: yup
    .string()
    .max(100, "maximum 100 character")
    .required("Address is Required"),
  zipCode: yup
    .string()
    .min(6, "Pin Code must be Six Digits")
    .max(6, "Pin Code must be Six Digits")
    .required("Pin Code Required"),

  specialDemand: yup.string(),

  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
