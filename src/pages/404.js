import React from "react"
import { Container, Image, Row, Col, Button, Card} from 'react-bootstrap';
import SEO from "../components/seo"
import "../style/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const NotFoundPage = () => (
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
    <SEO title="404" />
    <Container fluid>
      <Row>
        <Col>
          <h1>Oops!</h1>
          <p>Looks like you navigated to a non-existent page. Try one of the others at the top!</p>
        </Col>
      </Row>
    </Container>
  </div>
  <div className="footer-div">
    <p className="footer">Made with 🎾 by Chris Pondoc and the &#38;TECH team.</p>
  </div>
  </>
)

export default NotFoundPage