import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import anderw from './assets/anderw.gif';
import anderw_smile from './assets/anderw-smile.gif';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

      <div>
        <Image
          src={anderw}
          onMouseEnter = {e => (e.currentTarget.src=anderw_smile)}
          onMouseLeave = {e => (sleep(1000), e.currentTarget.src=anderw)}
        />
      </div>
    </div>
  );
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

export default App;
