import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
    <Form
      firstName={firstName}
      lastName={lastName}
      newsletter={newsletter}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleNewsletterChange={handleNewsletterChange}
    />
    <DisplayData firstName={firstName} lastName={lastName} newsletter={newsletter}  />
    </div>
  );
}

export default ParentComponent;