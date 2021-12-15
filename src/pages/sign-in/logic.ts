import { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputChangeEventDetail } from "@ionic/react";
import { useFormik, FormikErrors } from "formik";

import { SignInInput, useSignIn } from "~auth";
import { UserUtils } from "~utils";
import { FormValues, SignInTemplateProps } from "./template";

export const useSignInPage = (): SignInTemplateProps => {
  const history = useHistory();
  const navigate = (path: string): void => history.push(`/${path}`);
  const signIn = useSignIn();

  const [loading, setLoading] = useState<boolean>(false);

  const validate = (values: FormValues): FormikErrors<FormValues> | undefined => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.emailAddress) {
      errors.emailAddress = "Email is required";
    } else if (!UserUtils.isValidEmail(values.emailAddress)) {
      errors.emailAddress = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!UserUtils.isValidPassword(values.password)) {
      errors.password = "Invalid password";
    }

    return errors;
  };
  const { values, errors, handleChange, handleSubmit, setFieldError } = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    validate,
    validateOnChange: false,
    onSubmit: async (values: SignInInput) => {
      console.log({ values });
      try {
        setLoading(true);
        await signIn(values);
      } catch (error: any) {
        setLoading(false);
        if (
          error.code === "NotAuthorizedException" &&
          error.message === "User is disabled."
        ) {
          setFieldError("emailAddress", "Your account is awaiting approval.");
        } else if (error.code === "NotAuthorizedException") {
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
    navigate,
    values,
    errors: { emailAddress: errors.emailAddress, password: errors.password },
    loading,
    handleInputChange,
    handleSubmit,
  };
};
