import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Ianno");
  const [lastName, setLastName] = useState("Chess");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const [errors, setErrors] =useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length >0) {
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
  }
  else {
    setErrors (["First name is required!"]);
  }
}

  const listOfSubmissions = submittedData.map((data, index) => {
    return(
      <div key={index}>
        {data.firstName} {data.LastName}
      </div>
    );
  });

  return (
    <>
    <form onSubmit={handleSubmit} >
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
    {listOfSubmissions}
    </>
  );
}

export default Form;
