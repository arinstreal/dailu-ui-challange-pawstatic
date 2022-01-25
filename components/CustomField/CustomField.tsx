import { Field, FieldAttributes } from "formik";
import { FC } from "react";
import styles from "./CustomField.module.scss";

interface ICustomField extends FieldAttributes<any> {
}

const CustomField: FC<ICustomField> = (
  {
    label,
    placeholder,
    validate,
    name,
    errors,
    touched,
    type = 'text',
    ...props
  }: ICustomField) => {
  const className = `${styles.customField} ${!!(errors && touched && errors) ? styles.error : ''}`;
  return (
    <div className={className}>
      {
        label &&
        <label htmlFor={name}>
          {label}
          <span className={styles.errorMessage}>
            {/*{errors.zipCode && touched.zipCode && errors.zipCode}*/}
          </span>
        </label>
      }
      <Field id={name} name={name} placeholder={placeholder} type={type} {...props}/>
    </div>
  )
}

export default CustomField