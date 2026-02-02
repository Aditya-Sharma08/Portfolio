import "./ContactFormStyles.css";
import { Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      console.log(process.env.REACT_APP_API_URL);
      await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        message: formData.message,
      });

      setSuccess("Message sent successfully 😊");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <Form className="form-con" onSubmit={handleSubmit}>
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Row className="row">
          <Col lg={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </Col>

          <Col lg={6}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </Col>
        </Row>

        <Row className="row">
          <Col lg={12}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Col>
        </Row>

        <Row className="row">
          <Col lg={12}>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
            />
          </Col>
        </Row>
        <Row className="row" id="btn">
          <Col lg={12}>
            <Button variant="warning" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" /> Sending...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ContactForm;
