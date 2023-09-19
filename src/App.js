import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const firstNameInput = (e) => {
    setData({ ...data, firstName: e.target.value });
  };
  const lasNameInput = (e) => {
    setData({ ...data, lastName: e.target.value });
  };
  const emailInput = (e) => {
    setData({ ...data, email: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Congratulations you have registeres");
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handlesubmit}>
        {submitted ? <div>Successfully registered</div> : ""}
        <input
          value={data.firstName}
          onChange={firstNameInput}
          className="form-field"
          placeholder="firstName"
        />
        {submitted && !data.firstName ? <span>Please Enter name</span> : ""}

        <input
          value={data.lastName}
          onChange={lasNameInput}
          className="form-field"
          placeholder="lastName"
        />
        {submitted && !data.lastName ? <span>Enter the last name</span> : ""}
        <input
          value={data.email}
          onChange={emailInput}
          className="form-field"
          placeholder="email"
        />
        {submitted && !data.email ? <span>enter email</span> : ""}
        <button className="form-field" type="submit">
          Regiser Here
        </button>
      </form>
    </div>
  );
}
