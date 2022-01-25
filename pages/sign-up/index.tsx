import { Formik, Form, Field, FormikValues, FormikTouched, FormikErrors } from "formik";
import { FC, useState } from "react";
import CustomField from "../../components/CustomField/CustomField";
import Step2 from "./Step2";

interface FormValues {
  zipCode?: string;
  label?: string;
  password?: string;
  confirmPassword?: string;
  agree?: string;
}

export interface IStep {
  handleBlur: (e: any) => void,
  handleChange: (e: any) => void,
  values: FormikValues,
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>
}

const Index: FC = () => {
  const initialValues: FormValues = {zipCode: '', label: '', password: '', confirmPassword: '', agree: 'agree'};
  const [step, setStep] = useState(1);

  const returnZipForm = () => <>
  </>

  const onClickButtonNext = () => {
    setStep(prev => prev + 1);
  }
  const returnStep = ({handleBlur, handleChange, values, errors, touched}: IStep) => {
    switch (step) {
      case 1:
        return <>
          <CustomField
            name="zipCode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.zipCode}
            placeholder="Zip code"
            errors={errors?.zipCode}
            touched={touched.zipCode}
          />
        </>
      case 2:
        return <Step2 handleBlur={handleBlur} handleChange={handleChange} values={values} errors={errors}
                      touched={touched}/>
    }
  }
  return (
    <div className="layout-two-elements">
      <div>
        <div>PAWSTATIC</div>
      </div>
      <div>
        <h1>First, let's make sure we serve your</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: FormValues = {};
            if (!values.zipCode) {
              errors.zipCode = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
            <Form onSubmit={handleSubmit}>
              {
                returnStep({handleBlur, handleChange, values, errors, touched})
              }

              <div>
                <button onClick={onClickButtonNext} className="secondary-border" disabled={isSubmitting}>
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Index;