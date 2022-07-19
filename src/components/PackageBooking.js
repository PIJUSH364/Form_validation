import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

const PackageBooking = () => {
  return (
    <Formik
      initialValues={{
        selectPackage: "",
        fullName: "",
        email: "",
        contactNumber: "",
        address: "",
        zipCode: "",
        specialDemand: "",
        acceptedTos: false,
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2 className="title_heading">Package Booking Form</h2>

          <CustomInput
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Your Full Name"
          ></CustomInput>

          <CustomInput
            label="Email Address"
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
            label="Your Area Code"
            name="zipCode"
            type="number"
            placeholder="Pin Code."
          ></CustomInput>

          <CustomSelect
            label="Select Package"
            name="selectPackage"
            placeholder="selectPackage"
          >
            <option value="">Choose</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </CustomSelect>

          <CustomInput
            label="Any Special Demand About Package"
            name="specialDemand"
            type="text"
            placeholder="Any Special Demand About Package(Addons)"
          ></CustomInput>

          <CustomCheckbox
            className="CustomCheckbox"
            type="checkbox"
            name="acceptedTos"
          />
          <button className="btn_sub" disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default PackageBooking;
