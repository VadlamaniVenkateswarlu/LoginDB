import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function TopNavigate() {
  const storeOBj = useSelector((store) => {
    console.log(store);
    return store.data;
  });

  const Backend=process.env.REACT_APP_BACKEND_NAME

  return (
    <>
      <nav>
        <Link to="/Deshboard">Dashboard</Link> 
        <Link to="/Tasks">Tasks</Link> 
        <Link to="/SignOut">Sign Out</Link>
        <Link to="/UpdateData">Update Data</Link> 
        <Link to="/">Logout</Link>
      </nav>

      <div>
        <h1>Dashboard</h1>
        
          <h2>
            {storeOBj.firstName} {storeOBj.lastName}
            <br />
            <img
              src={`${Backend}/${storeOBj.profilePic}`}
              alt="Profile"
              
            />
          </h2>
        
      </div>
    </>
  );
}

export default TopNavigate;
