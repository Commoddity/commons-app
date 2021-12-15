import { useState } from "react";
import { InputChangeEventDetail } from "@ionic/react";
import { useFormik, FormikErrors } from "formik";

import { SignUpInput, useSignUp } from "~auth";
import { UserUtils } from "~utils";
import { FormValues, SignUpTemplateProps } from "./template";

export const useSignUpPage = (): SignUpTemplateProps => {
  const signUp = useSignUp();

  const [loading, setLoading] = useState<boolean>(false);

  const validate = (values: FormValues): FormikErrors<FormValues> | undefined => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.emailAddress) {
      errors.emailAddress = "Email is required";
    } else if (!UserUtils.isValidEmail(values.emailAddress)) {
      errors.emailAddress = "Invalid email address";
    }
    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (!UserUtils.isValidName(values.firstName)) {
      errors.firstName = "First name contains invalid characters";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (!UserUtils.isValidName(values.lastName)) {
      errors.lastName = "Last name contains invalid characters";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!UserUtils.isValidPassword(values.password)) {
      errors.password = "Invalid password";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password confirmation must match password";
    }

    console.log({ errors });

    return errors;
  };
  const { values, errors, handleChange, handleSubmit, setFieldError } = useFormik({
    initialValues: {
      emailAddress: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    validateOnChange: false,
    onSubmit: async (values: SignUpInput) => {
      console.log({ values });
      try {
        setLoading(true);
        await signUp(values);
      } catch (error: any) {
        setLoading(false);
        console.log({ error });
        if (error.code === "NotAuthorizedException") {
          setFieldError("emailAddress", "Invalid email address or password");
        } else {
          setFieldError("emailAddress", "Something went wrong");
        }
      }
    },
  });

  const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) =>
    handleChange(event);

  return {
    values,
    errors: {
      emailAddress: errors.emailAddress,
      firstName: errors.firstName,
      lastName: errors.lastName,
      password: errors.password,
      confirmPassword: errors.confirmPassword,
    },
    loading,
    handleInputChange,
    handleSubmit,
  };
};
