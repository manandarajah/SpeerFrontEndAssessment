import logo from './logo.svg';
import './App.css';
import Section from './Components/Section';
import {InputGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Section id="section1" backgroundColor="#1a1a1a"></Section>
      <Section id="section2" backgroundColor="#ff3333"></Section>
      <Section id="section3" backgroundColor="#7300e6">
        <h1>Payments</h1>
        <Row>
          <Col xs={2}>
            <InputGroup>
              <Form.Control type="number" placeholder="Price"/>
            </InputGroup>
          </Col>
          <Col xs={2}>
            <InputGroup>
              <Form.Control type="button" value="Download"/>
            </InputGroup>
          </Col>
        </Row>
      </Section>
    </div>
  );
}

export default App;
