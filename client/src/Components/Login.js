import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const Backend=process.env.REACT_APP_BACKEND_NAME

  axios.defaults.baseURL = Backend;
  


  useEffect(() => {

    
    const validateToken = async () => {
      try {
        const data = new URLSearchParams();
        data.append("token", localStorage.getItem("token"));
        axios.defaults.headers.common["Authorization"]=localStorage.getItem("token");

        const response = await axios.post("/validateToken", data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        const jsonData = response.data;

        if (jsonData.status === "Success") {
          dispatch({ type: "login", data: jsonData.data });
          navigate("/TopNavigate");
        } else {
          alert(jsonData.msg);
        }
      } catch (error) {
        console.error("Token validation error:", error);
        alert("Something went wrong. Please try again.");
      }
    };

    if (localStorage.getItem("token")) {
      validateToken();
    }
  }, [dispatch, navigate]);

  const onLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const data = new URLSearchParams();
      data.append("email", emailInputRef.current.value);
      data.append("password", passwordInputRef.current.value);

      const response = await axios.post("/login", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const jsonData = response.data;

      if (jsonData.status === "Success") {
        dispatch({ type: "login", data: jsonData.data });
        localStorage.setItem("token", jsonData.data.token); // Save token
        navigate("/TopNavigate");
      } else {
        alert(jsonData.msg);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Email</label>
          <input ref={emailInputRef} type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input ref={passwordInputRef} type="password" name="password" required />
        </div>
        <div>
          <button type="button" onClick={onLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      <div>
        <p>
          Don't have an account? <Link to="/Form">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
