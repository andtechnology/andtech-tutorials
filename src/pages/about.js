import React from "react"
import { Container, Image, Row, Col, Button, Card} from 'react-bootstrap';
import SEO from "../components/seo"
import "../style/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const SecondPage = () => (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">&#38;TECH Tutorials</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="/">Home</a>
        <a class="nav-item nav-link" href="/about">About</a>
        <a class="nav-item nav-link" href="/tutorials">Tutorials</a>
        <a class="nav-item nav-link" href="/">Contact</a>
      </div>
    </div>
  </nav>
  <div className="main">
    <SEO title="About" />
    <Container fluid>
      <Row>
        <Col>
          <h1>About</h1>
          <p>Learn more about our purpose!</p>
          <Button href="https://www.andtech.io/" variant="dark">Main Website →</Button>{' '}
        </Col>
      </Row>
    </Container>
  </div>
  <div className="subheader">
  <Container className="align-left" fluid>
      <h2>Our Rationale</h2>
      <p className="description">&TECH is a new way to learn and apply technology by combining tech with other disciplines like art, music, sports, and more.
      We believe that the future lies in the individuals who are able to take what they are passionate about and conflate it with technology.</p>
      <p className="description">We operate under some guiding principles:</p>
      <h3>Team Based</h3>
      <p className="description">We believe the best way to build cool things is with a group of cool people, not alone. That's why all of our challenges require at least a pair of people to work on, but suggested to have more. Everyone gets to learn from each other and - let's be honest - the real world requires teamwork, so why not start building those skills now? </p>
      <h3>Endless Application</h3>
      <p className="description">We believe tech means nothing without application to something. That's why all of our challenges are tied to the ampersand: art&TECH, sports&TECH, music&TECH. Tech is everywhere and not going away, so why not pursue something you love and use tech to make it too cooler? </p>
      <h3>Continuous Learning</h3>
      <p className="description">We believe the best way to stay ahead is to never stop learning new things. That's why all of our challenges have learning opportunities embedded throughout their lifecycle, whether it's to learn how to code M a language or how to use a new tool or device. Tech evolves every day and there's always going to be something new to learn and use, so why not embrace the continuous learning mindset? </p>
      <h3>Hackathons</h3>
      <p className="description">We believe community is what makes tech so successful and attractive. That's why all the work you do on your challenges throughout the year culminates to the annual Hack&TECH event to showcase your work, meet other &TECHers, and improve, hack, and build cool things in 24 hours. Hackathons are the chance to be in one place with a bunch of cool people building awesome things, so why not join? </p>
    </Container>
  </div>
  <div className="footer-div">
    <p className="footer">Made with 🎾 by Chris Pondoc and the &#38;TECH team.</p>
  </div>
  </>
)

export default SecondPage
