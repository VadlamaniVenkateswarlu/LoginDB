import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



function Deshboard() {
  // Get user data directly from store
  const user = useSelector((store) => store.data); // updated from `loggedUser`
 const Backend=process.env.REACT_APP_BACKEND_NAME
  const deleteProfile = async () => {
    try {
      const reqOptions = {
        method: "DELETE", // Fixed typo from "methode"
      };

      const url = `${Backend}/deleteProfile?email=${user?.email}`;
      const response = await fetch(url, reqOptions);
      const jsonData = await response.json();
      console.log(jsonData);
      alert(jsonData.msg);
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete profile.");
    }
  };

  if (!user || !user.firstName) {
    return <div>Loading user data...</div>; // Or redirect to login
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={deleteProfile}>Delete Data</button>
      <h2>
        {user.firstName} {user.lastName}
        <br />
        <img
          src={`${Backend}/${user.profilePic}`}
          alt="Profile"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </h2>
      <Link to="/TopNavigate">Go to Top Navigation</Link>
    </div>
  );
}

export default Deshboard;
