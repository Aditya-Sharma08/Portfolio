import React, { Component } from "react";
import portfolioImg from "../assets/portfolio-bg.png";
import Button from 'react-bootstrap/Button';
import "./MidStyles.css"

class mid extends Component {
  render(){
    return ( 
      <div className="mid-container">
          <div className="mask">
              <img className="BGIMG" width="100%" src={portfolioImg} alt="my-img" />
          </div>
          <div className="content">
              <p>{this.props.text}</p>
              <h1>{this.props.bigText}</h1>
              <Button className="btn" href="/project" size="lg" variant="outline-warning">{this.props.btn1}</Button>
              <Button className="btn" href="/contact" size="lg" variant="outline-light">{this.props.btn2}</Button>
          </div>
      </div>   
    );  
  }
  
}
 
export default mid ;