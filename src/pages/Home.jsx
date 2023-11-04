import React from "react";
import { Container,Button    } from "react-bootstrap";
import "../styles/Home.css";
const Home = () => {
  return <Container>
    <h1>Welcome to our website</h1>
     <center><p>We are here to serve you</p></center>
    <Button variant="primary" type="submit">
          Get Started
        </Button>
  </Container>;
};

export default Home;
