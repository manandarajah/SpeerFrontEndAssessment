import logo from './logo.svg';
import './App.css';
import Screen from './Components/Screen';
import Section from './Components/Section';
import {InputGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Screen id="pricing" backgroundColor="#1a1a1a">
        <h1>Pricing</h1>
      </Screen>
      <Screen id="main">
        <Section id="hero"></Section>
        <Section id="red" backgroundColor="#ff3333"></Section>
        <Section id="yellow" backgroundColor="#ffff66"></Section>
      </Screen>
      <Screen id="payment" backgroundColor="#7300e6">
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
      </Screen>
    </div>
  );
}

export default App;
