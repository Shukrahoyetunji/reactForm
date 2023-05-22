import PersonalInfo from './Component/ReactForm/PersonalInfo';
import './App.css';
import { useState } from "react"

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    state: "",
    country: "",
    lGA: "",
    dateofBirth: "",
    stateofWork: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: " Should not be less than 3 characters",
      label: "FirstName",
      pattern: "^[A-za-z0-9]{3,100}$",
      required: true,
      


    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Should not be less than 3 characters",
      label: "Last Name",
      pattern: "^[A-za-z0-9]{3,100}$",
      required: true


    },
    {
      id: 3,
      name: "middleName",
      type: "text",
      placeholder: "Middle Name",
      errorMessage: "Should not be less than 3 characters ",
      label: "Middle Name",
      pattern: "^[A-za-z0-9]{3,100}$",
      // required:true

    },
    {
      id: 4,
      name: "dob",
      type: "date",
      placeholder: "DOB",
      label: "Date of Birth"

    },
    {
      id: 5,
      name: "gender",
      type: "text",
      placeholder: "Gender",
      errorMessage: "Either Male or Female",
      required: true,
      label: "Gender",
      pattern: "^(?:Male|male|Female|female)$"

    },
    {
      id: 6,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a Valid Email Address",
      label: "Email",
      required: true


    },
    {
      id: 7,
      name: "phoneNo",
      type: "text",
      placeholder: "Phone No",
      errorMessage: "Maximum of 11 Character",
      required: true,
      label: "PhoneNo",
      pattern: "^[0-9]{0,11}$",
      maxlength: "11"

    },
    {
      id: 8,
      name: "Start of Work",
      type: "date",
      placeholder: "Start of Work",
      errorMessage: "Must not include past date",
      label: "Start of Work",
      required: true,
      // minDate:"04-23-2023"

    },
    {
      id: 9,
      name: "Password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be minimum of 8 characters including 1 letter ,1 number and 1 special character ",
      label: "Password",
      pattern: "^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
      required: true,
      value: "FakePSW"

    },
    {
      id: 10,
      name: "state",
      type: "text",
      placeholder: "State",
      errorMessage: "",
      label: "State"

    },
    {
      id: 11,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "",
      label: "Country",
      required: true

    },
    {
      id: 12,
      name: "lga",
      type: "text",
      placeholder: "LGA",
      errorMessage: "",
      label: "LGA"

    }
  ];
  const inputs2 = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: " Should not be less than 3 characters",
      label: "FirstName",
      pattern: "^[A-za-z0-9]{3,100}$",
      required: true,


    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Should not be lass than 3 characters",
      label: "LasttName",
      pattern: "^[A-za-z0-9]{3,100}$",
      required: true


    },
    {
      id: 3,
      name: "middleName",
      type: "text",
      placeholder: "Middle Name",
      errorMessage: "Should not be less than 3 characters ",
      label: "MiddleName",
      pattern: "^[A-za-z0-9]{3,100}$",
      // required:true

    },
    {
      id: 4,
      name: "gender",
      type: "text",
      placeholder: "Gender",
      errorMessage: "Either Male or Female",
      required: true,
      label: "Gender",
      pattern: "^(?:Male|male|Female|female)$"

    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a Valid Email Address",
      label: "Email",
      required: true


    },
    {
      id: 6,
      name: "phoneNo",
      type: "text",
      placeholder: "Phone No",
      errorMessage: "Maximum of 11 Character",
      required: true,
      label: "PhoneNo",
      pattern: "^[0-9]{0,11}$",
      maxlength: "11"

    },

    {
      id: 7,
      name: "state",
      type: "text",
      placeholder: "State",
      errorMessage: "",
      label: "State"

    },
    {
      id: 8,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "",
      label: "Country",
      required: true

    },
    {
      id: 9,
      name: "relationship",
      type: "text",
      placeholder: "Relationship",
      errorMessage: "Must be in a relation",
      label: "Relationship",

    }
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };
  console.log(values);
  return (
    <div className='app'>
      <form>
        <h1>Registration Form</h1>
        <h2>Step 1: Personal Information</h2>
        {inputs.map(input => (
          <PersonalInfo key={input.id}{...input} value={values[input.name]} onChange={onChange} />
        ))}
        <h2>Step 2: Next of Kin Information</h2>
        {inputs2.map(input1 => (
          <PersonalInfo key={input1.id}{...input1} value={values[input1.name]} onChange={onChange}></PersonalInfo>
        ))}

      </form>
    </div>

  );
}

export default App;
