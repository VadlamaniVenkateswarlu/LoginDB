import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Form() {

  const Backend=process.env.REACT_APP_BACKEND_NAME

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const ageInputRef = useRef();
  const countryInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const profilePicInputRef = useRef();
  const genderInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [profilePicPath, setProfilePicPath] = useState("./Images/download.jpg");

  const onSignupFormData = async () => {
    try {
      const data = new FormData();
      data.append("firstName", firstNameInputRef.current.value);
      data.append("lastName", lastNameInputRef.current.value);
      data.append("age", ageInputRef.current.value);
      data.append("email", emailInputRef.current.value);
      data.append("password", passwordInputRef.current.value);
      data.append("phoneNumber", phoneNumberInputRef.current.value);
      data.append("gender", genderInputRef.current.value);
      data.append("country", countryInputRef.current.value);

      const file = profilePicInputRef.current.files[0];
      if (file) {
        data.append("profilePic", file);
      }

      const reqOptions = {
        method: "POST",
        body: data,
      };

      const response = await fetch(`${Backend}/signUp`, reqOptions);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert(result.msg || "Signup successful!");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please check the console for more info.");
    }
  };

  return (
    <div className="App">
      <form>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef} type="text" name="firstName" />
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef} type="text" name="lastName" />
        </div>
        <div>
          <label>Age</label>
          <input ref={ageInputRef} type="number" name="age" />
        </div>
        <div>
          <label>Gender</label>
          <input ref={genderInputRef} type="text" name="gender" />
        </div>
        <div>
          <label>Phone Number</label>
          <input ref={phoneNumberInputRef} type="text" name="phoneNumber" />
        </div>
        <div>
          <label>Country</label>
          <input ref={countryInputRef} type="text" name="country" />
        </div>
        <div>
          <label>Profile Picture</label>
          <input
            type="file"
            ref={profilePicInputRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const selectedImagePath = URL.createObjectURL(file);
                setProfilePicPath(selectedImagePath);
              }
            }}
          />
          <br />
          <img src={profilePicPath} alt="Preview" width="100" />
        </div>
        <div>
          <label>Email</label>
          <input ref={emailInputRef} type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input ref={passwordInputRef} type="password" name="password" />
        </div>
        <div>
          <button type="button" onClick={onSignupFormData}>
            Submit as FormData (file upload)
          </button>
        </div>
      </form>
      <div>
        <p>
          I don't have an account?{" "}
          <Link to="/">Please Signup Your Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Form;
