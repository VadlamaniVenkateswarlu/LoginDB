import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';

function UpdateData() {
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

  const loggedUser = useSelector((store) => store.data); // ✅ Correct store path

  const Backend=process.env.REACT_APP_BACKEND_NAME

  useEffect(() => {
    if (loggedUser) {
      firstNameInputRef.current.value = loggedUser.firstName || "";
      lastNameInputRef.current.value = loggedUser.lastName || "";
      ageInputRef.current.value = loggedUser.age || "";
      emailInputRef.current.value = loggedUser.email || "";
      phoneNumberInputRef.current.value = loggedUser.phoneNumber || "";
      countryInputRef.current.value = loggedUser.country || "";
      genderInputRef.current.value = loggedUser.gender || "";
      setProfilePicPath(`${Backend}/${loggedUser.profilePic}`);
    }
  }, [loggedUser]);

  const UpdateData = async () => {
    const formData = new FormData();
    formData.append("firstName", firstNameInputRef.current.value);
    formData.append("lastName", lastNameInputRef.current.value);
    formData.append("age", ageInputRef.current.value);
    formData.append("email", emailInputRef.current.value);
    formData.append("password", passwordInputRef.current.value);
    formData.append("phoneNumber", phoneNumberInputRef.current.value);
    formData.append("gender", genderInputRef.current.value);
    formData.append("country", countryInputRef.current.value);

    if (profilePicInputRef.current.files.length > 0) {
      formData.append("profilePic", profilePicInputRef.current.files[0]);
    }

    try {
      const response = await fetch(`${Backend}/UpdateProfile`, {
        method: "PATCH",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert(result.msg);
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update data. Please try again.");
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
              const selectedImagePath = URL.createObjectURL(e.target.files[0]);
              setProfilePicPath(selectedImagePath);
            }}
          />
          <br />
          <img src={profilePicPath} alt="Profile" width="100" height="100" />
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
          <button type="button" onClick={UpdateData}>
            Update Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateData;

