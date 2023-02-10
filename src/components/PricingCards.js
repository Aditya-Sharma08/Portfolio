import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PricingCardsStyles.css"
import tindog from "../assets/tindog.png";
import fuzzy from "../assets/fuzzyClustering.png";
import flipkart from "../assets/flipkart.png";

function PricingCards() {
  return (
    <div className="pricing-container">
        <CardGroup>
    <Card className="cards" bg="dark" style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={fuzzy} />
        <Card.Title style={{marginTop : "20px"}}>Card Title</Card.Title>
        <Card.Text>
        Fuzzy Clustering Visualizer is a web app for visualizing a bunch of different sorting algorithms.
        </Card.Text>
        <Button href="https://adisince2002.github.io/fuzzy-k-Clustering/" variant="warning">Visit Web App</Button>
      </Card.Body>
    </Card>
    <Card className="cards" bg="dark" style={{ width: '18rem' }}>
      <Card.Body> 
      <Card.Img variant="top" src={tindog} />
        <Card.Title style={{marginTop : "20px"}}>Tindog</Card.Title>
        <Card.Text>
        Tindog is an online dating and geosocial networking application for dogs.
        </Card.Text>
        <Button href="https://adisince2002.github.io/tindog/" variant="warning">Visit Web App</Button>
      </Card.Body>
    </Card>
    <Card className="cards" bg="dark" style={{ width: '18rem' }}>
      <Card.Body> 
      <Card.Img variant="top" src={flipkart} />
        <Card.Title style={{marginTop : "20px"}}>Flipkart Landing Page</Card.Title>
        <Card.Text>
        Landing Page of an E-Commerce website. I've worked on sliding images of promotional products.
        </Card.Text>
        <Button href="https://adisince2002.github.io/Flipkart-Landing-Page/" variant="warning">Visit Web App</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </div>
  );
} 

export default PricingCards; 