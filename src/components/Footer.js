<<<<<<< HEAD
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterStyles.css";

function HeaderAndFooterExample() {
  return (
    <Card bg="dark" className="text-center card-footer">
      <Card.Header>Aditya AKA Bad Programmer</Card.Header>
      <Card.Body className="social-links">
        <Card.Text>
          <FontAwesomeIcon className="fa" icon={faInstagram} />
          <a href="https://instagram.com/adityakahanhai_?igshid=ZmZhODViOGI=">Instagram</a>
          <FontAwesomeIcon className="fa" icon={faGithub} /> 
          <a href="https://github.com/AdiSince2002">Github</a>
          <FontAwesomeIcon className="fa" icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/adityasharma008/">LinkedIn</a>
          <FontAwesomeIcon className="fa" icon={faTwitter} />
          <a href="https://twitter.com/login?lang=en">Twitter</a>
        </Card.Text> 
        <Button variant="light">Connect with me on my social media platforms or send me a mail on @adityasharma08official@gmail.com</Button>
      </Card.Body>
      <Card.Footer className="text-muted">@ 2023 Aditya Sharma</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;
=======
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterStyles.css";

function HeaderAndFooterExample() {
  return (
    <Card bg="dark" className="text-center card-footer">
      <Card.Header>Aditya AKA Bad Programmer</Card.Header>
      <Card.Body className="social-links">
        <Card.Text>
          <FontAwesomeIcon className="fa" icon={faInstagram} />
          <a href="https://instagram.com/adityakahanhai_?igshid=ZmZhODViOGI=">Instagram</a>
          <FontAwesomeIcon className="fa" icon={faGithub} /> 
          <a href="https://github.com/AdiSince2002">Github</a>
          <FontAwesomeIcon className="fa" icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/adityasharma008/">LinkedIn</a>
          <FontAwesomeIcon className="fa" icon={faTwitter} />
          <a href="https://twitter.com/login?lang=en">Twitter</a>
        </Card.Text> 
        <Button variant="light">Connect with me on my social media platforms or send me a mail on @adityasharma08official@gmail.com</Button>
      </Card.Body>
      <Card.Footer className="text-muted">@ 2023 Aditya Sharma</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;
>>>>>>> master
