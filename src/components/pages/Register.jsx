import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { Container, Row, Col, FormGroup, Form, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/images/register.png";
import userIcon from "../../assets/images/user.png";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // Success or error message
  const [error, setError] = useState(false); // To track error state
  const navigate = useNavigate(); // For navigation after successful registration

  // Handle input changes
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message
    setError(false); // Reset error state

    try {
      const response = await axios.post("http://localhost:4000/api/auth/register", credentials);
      const { message } = response.data;

      setMessage(message); // Show success message
      setError(false);

      // Redirect to home page after a delay
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError(true);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="Register Illustration" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User Icon" />
                </div>

                <h2>Register</h2>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      value={credentials.username}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>

                {/* Display success or error message */}
                {message && (
                  <p className={error ? "error-message" : "success-message"}>
                    {message}
                  </p>
                )}

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
