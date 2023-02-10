import "./ContactFormStyles.css";
import { Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <div className="form-container">
      <Form role="form" className="form-con">
        <Form.Group>
          <Row className="row">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Form.Label className="text-muted">First Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your first name" />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Form.Label className="text-muted">Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your last name" />
            </Col>
          </Row>
          <Row className="row">
            <Col lg={12}>
              <Form.Label className="text-muted">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
          </Row>
          <Row className="row">
            <Col lg={12}>
              <Form.Label className="text-muted">Enter your Message</Form.Label>
              <Form.Control as="textarea" placeholder="Your text here..." rows={3} />
            </Col>
          </Row>
        </Form.Group>
        <Row className="row" id="btn">
          <Col lg={12}>
        <Button variant="warning" className="button" type="submit">Submit</Button>
        </Col>
        </Row> 
      </Form>
    </div>
  );
}

export default ContactForm;
