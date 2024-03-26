import { useState } from "react";
import { FORMDATA } from "../Pages/Form";

const useValidation = (formData: FORMDATA) => {
  // const [error, setError] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   number: "",
  //   password: "",
  //   confirmPassword: "",
  //   age: "",
  //   gender: "",
  //   interest: [],
  //   birthDate: "",
  // });

  let error: any = {};

  if (formData.firstName.length == 0) {
    error.firstName = "Enter First name";
  } else if (formData.firstName.length > 0) {
    error.firstName = "";
  }

  if (formData.lastName.length == 0) {
    error.lastName = "Enter Last name";
  } else if (formData.lastName.length > 0) {
    error.lastName = "";
  }

  if (formData.email.length == 0) {
    error.email = "Enter email";
  } else if (formData.firstName.length > 0) {
    error.email = "";
  }

  if (formData.number.length == 0) {
    error.number = "Enter Number";
  } else if (formData.number.length > 0) {
    error.number = "";
  }

  if (formData.password.length == 0) {
    error.password = "Enter Passowrd";
  } else if (formData.firstName.length > 0) {
    error.password = "";
  }

  if (formData.confirmPassword.length == 0) {
    error.confirmPassword = "Confirm password";
  } else if (formData.confirmPassword.length > 0) {
    formData.password === formData.confirmPassword
      ? (error.confirmPassword = "")
      : (error.confirmPassword = "Password Dosent Match");
  }

  if (formData.age.length == 0) {
    error.age = "Enter Age";
  } else if (formData.firstName.length > 0) {
    error.age = "";
  }

  if (formData.gender.length == 0) {
    error.gender = "Enter Your Gender";
  } else if (formData.gender.length > 0) {
    error.gender = "";
  }

  if (formData.interest.length == 0) {
    error.interest = "Select At leat one";
  } else if (formData.interest.length > 0) {
    error.interest = "";
  }

  if (formData.birthDate.length == 0) {
    error.birthDate = "Enter Birth date";
  } else if (formData.birthDate.length > 0) {
    error.birthDate = "";
  }

  return { error };
};
export default useValidation;
