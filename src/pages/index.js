import React from "react"
import { Container, Image, Row, Col, Button, Card} from 'react-bootstrap';
import MaleProgrammer from '../images/male-programmer.png'
import Team from '../images/andtechteam.jpg'
import SEO from "../components/seo"
import "../style/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const IndexPage = () => (
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
        <a class="nav-item nav-link" href="mailto:hello@andtech.io">Contact</a>
      </div>
    </div>
  </nav>
  <div className="main">
    <SEO title="Home" />
    <Container fluid>
      <Row>
        <Col>
          <h1>Create anything with tech!</h1>
          <p>Explore friendly tutorials to computer programming with applications in sports, art, and more!</p>
          <Button href="/tutorials" variant="dark">Get Started →</Button>{' '}
          <br />
        </Col>
      </Row>
    </Container>
    <br />
  </div>
  <div className="subheader">
  <Container fluid>
    <Row>
        <Col className="align-left">
          <h2>Read simple tutorials on basic programming projects</h2>
          <p>Not sure where to start? Complete our "Hello World" projects. Feeling more advanced? Try out our more complex projects involving web design and data science.</p>
          <Button href="/tutorials" variant="dark">Browse →</Button>{' '}
        </Col>
        <br />
        <Col className="align-center">
          <Image height="500px" src={MaleProgrammer} />
        </Col>
      </Row>
    </Container>
  </div>
  <br />
  <div className="subheader">
  <Container fluid>
    <Row>
        <Col className="align-center">
          <h2>A focus on different disciplines</h2>
          <p>At &#38;TECH, we strive to focus on the intersection of technology with other subjects. Here's a few:</p>
        </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <Card body>
          <h3>Sports 🏀</h3>
          <p>Learn how to build sports analytics tools using Python and data science libraries!</p>
        </Card>
      </Col>
      <Col>
        <Card body>
          <h3>Art 🎨</h3>
          <p>Learn how to make fancy computer drawings using the one and only Processing language.</p>
        </Card>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <Card body>
          <h3>Literature 📚</h3>
          <p>Use simple data mining techniques to track different word statistics about your favorite book or article.</p>
        </Card>
      </Col>
      <Col>
        <Card body>
          <h3>Music 🎶</h3>
          <p>Create your own music generated sounds using the Chuck programming language.</p>
          </Card>
      </Col>
    </Row>
    </Container>
  </div>
  <br />
  <div className="subheader">
  <Container fluid>
    <Row>
        <Col className="align-center">
          <Image height="500px" src={Team} />
        </Col>
        <Col className="align-right">
          <h2>By students, for students</h2>
          <p>Our team of high school students, college students, and recent grads understand the struggle when coding. Thus, we made our tutorials from the perspective of us hacking things together.</p>
          <Button href="/about" variant="dark">← About Us</Button>{' '}
        </Col>
      </Row>
    </Container>
  </div>
  <div className="main">
    <Container fluid>
      <Row>
        <Col>
          <h1>Got any questions?</h1>
          <p>We're always happy to help the next generation of computer scientists! Feel free to reach out to us below.</p>
          <Button href="mailto:hello@andtech.io" variant="dark">Contact →</Button>{' '}
          <br />
        </Col>
      </Row>
    </Container>
    <br />
  </div>
  <div className="footer-div">
    <p className="footer">Made with 🎾 by Chris Pondoc and the &#38;TECH team.</p>
  </div>
  </>
)

export default IndexPage
