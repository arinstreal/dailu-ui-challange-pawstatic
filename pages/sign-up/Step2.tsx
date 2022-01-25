import CustomField from "../../components/CustomField/CustomField";
import { FC } from "react";
import { IStep } from "./index";

const Step2: FC<IStep> = ({handleChange, handleBlur, errors, touched, values}: IStep) => {
  return (
    <>
      <CustomField
        name="label"
        label="Label"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.label}
        placeholder="Label"
        // errors={errors?.label}
        touched={touched.label}
      />
      <div className="d-flex">
        <CustomField
          name="password"
          label="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="Password"
          // errors={errors?.label}
          touched={touched.password}
        />
        <CustomField
          name="confirmPassword"
          label="Confirm password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
          placeholder="Confirm password"
          // errors={errors?.label}
          touched={touched.confirmPassword}
        />
      </div>
      <CustomField
        type="checkbox"
        name="agree"
        label="I have read the Privacy Policy and agree to the Terms of Service."
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.agree}
        // errors={errors?.label}
        touched={touched.agree}
      />
    </>

  )
}
export default Step2;