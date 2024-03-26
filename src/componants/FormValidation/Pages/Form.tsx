import React, { useState } from "react";
import useValidation from "../ValidationHook/ValidationHook";

export interface FORMDATA {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
  interest: string[];
  birthDate: string;
}

const FormValidation: React.FC = () => {
  const [formData, setFormData] = useState<FORMDATA>({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interest: [],
    birthDate: "",
  });

  const { error } = useValidation(formData);

  const [checkBoxData, setCheckBoxData] = useState([
    { name: "coding", status: false },
    { name: "reading", status: false },
    { name: "sports", status: false },
  ]);

  let handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  let handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form submitted", formData);
  };

  let handleCheckBox = (i: number) => {
    let data = [];
    const checkedData = [...checkBoxData];
    checkedData[i].status = !checkedData[i].status;
    checkedData.map((e) => {
      if (e.status) {
        data.push(e.name);
      }
    });
    if (data.length > 0) {
      setFormData({ ...formData, interest: data });
    }
  };

  return (
    <div
      className="bg-dark"
      style={{
        color: "#fff",
        position: "fixed",
        height: "90vh",
        width: "100vw",
        overflow: "scroll",
      }}
    >
      <small>{JSON.stringify(formData)}</small>
      <br />
      <small>{JSON.stringify(checkBoxData)}</small>

      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-6 ">
              <span
                className="row justify-content-center p-2"
                style={{ border: "1px solid #fff", borderRadius: "5px" }}
              >
                <div className="card col bg-dark" style={{ border: "none" }}>
                  <div className="card-header bg-success   ">
                    <span> Registration Form</span>
                  </div>

                  <div className="form">
                    <div className="mt-2">
                      <label>First Name</label>&nbsp;&nbsp;
                      <input
                        type="text"
                        name="firstName"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.firstName && (
                        <div style={{ color: "red" }}>{error.firstName}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Last Name</label>&nbsp;&nbsp;
                      <input
                        type="text"
                        name="lastName"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.lastName && (
                        <div style={{ color: "red" }}>{error.lastName}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Email</label>&nbsp;&nbsp;
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.email && (
                        <div style={{ color: "red" }}>{error.email}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Number</label>&nbsp;&nbsp;
                      <input
                        type="number"
                        name="number"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.number && (
                        <div style={{ color: "red" }}>{error.number}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Password</label>&nbsp;&nbsp;
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.password && (
                        <div style={{ color: "red" }}>{error.password}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Confirm Password</label>&nbsp;&nbsp;
                      <input
                        type="password"
                        name="confirmPassword"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.confirmPassword && (
                        <div style={{ color: "red" }}>
                          {error.confirmPassword}
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Age</label>&nbsp;&nbsp;
                      <input
                        type="number"
                        name="age"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.age && (
                        <div style={{ color: "red" }}>{error.age}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Gender</label>&nbsp;&nbsp;
                      <select
                        name="gender"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      >
                        <option selected>Select</option>

                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"other"}>other</option>
                      </select>
                      {error.gender && (
                        <div style={{ color: "red" }}>{error.gender}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Interest</label>&nbsp;&nbsp; :
                      {checkBoxData.map((element, i) => {
                        return (
                          <>
                            <input
                              type="checkbox"
                              name={element.name}
                              onChange={() => {
                                handleCheckBox(i);
                              }}
                            />
                            {element.name}
                          </>
                        );
                      })}
                      {error.interest && (
                        <div style={{ color: "red" }}>{error.interest}</div>
                      )}
                    </div>
                    <div className="mt-2">
                      <label>Date Of Birth</label>&nbsp;&nbsp;
                      <input
                        type="date"
                        name="birthDate"
                        onChange={(e) => {
                          handleFormData(e);
                        }}
                      />
                      {error.birthDate && (
                        <div style={{ color: "red" }}>{error.birthDate}</div>
                      )}
                    </div>
                    <button type={"submit"} className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
