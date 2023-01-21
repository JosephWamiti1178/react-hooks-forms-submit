import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <input
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        /* checked instead of value */
        checked={props.newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
