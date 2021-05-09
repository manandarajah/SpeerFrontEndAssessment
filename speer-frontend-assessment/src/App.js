import logo from './logo.svg';
import './App.css';
import Screen from './Components/Screen';
import Section from './Components/Section';
import {InputGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App() {

  function getMouseInfo(e) {
    //console.log(e.pageX + " " + e.pageY);
  }

  function hoverButton(e) {
    var x = e.pageX - e.target.offsetLeft;
  	var y = e.pageY - e.target.offsetTop;

    /*var x = e.pageX;
    var y = e.pageY;*/

    //console.log(e.pageX + " " + e.pageY);

  	e.target.style.setProperty('--x', x + 'px');
  	e.target.style.setProperty('--y', y + 'px');

    //console.log(e.target.style.getPropertyValue("--x") + " " + e.target.style.getPropertyValue("--y"));
  }

  return (
    <div onMouseMove={getMouseInfo} className="App">
      <Screen id="pricing" backgroundColor="#1a1a1a">
        <h1>PRICING</h1>
        <p>Test out our app today! Choose from three subscription based payment models</p>
        <Row>
          <Col>
            <h3>Basic<br/>------<br/>Monthly</h3>
            <h1>$9</h1>
            <ul>
              <li>Very good</li>
              <li>Amazing</li>
              <li>Perfect Job</li>
              <li>Love this</li>
              <li>It's so good</li>
              <li>Features</li>
            </ul>
            <Button onMouseMove={hoverButton} size="lg" style={{backgroundColor: "#ff3333"}}>Select</Button>
          </Col>
          <Col>
            <h3>Advanced<br/>------<br/>Yearly</h3>
            <h1>$99</h1>
            <ul>
              <li>Very good</li>
              <li>Even Amazing</li>
              <li>Perfect Job</li>
              <li>Love this more</li>
              <li>It's so so good</li>
              <li>More Features</li>
            </ul>
            <Button onMouseMove={hoverButton} size="lg" style={{backgroundColor: "#ffcc66"}}>Select</Button>
          </Col>
          <Col>
            <h3>Pro<br/>------<br/>Yearly</h3>
            <h1>$120</h1>
            <ul>
              <li>Very very good</li>
              <li>Even more</li>
              <li>Perfect Job</li>
              <li>Love this more</li>
              <li>It's so so good</li>
              <li>More Features</li>
            </ul>
            <Button onMouseMove={hoverButton} size="lg" style={{backgroundColor: "#00cccc"}}>Select</Button>
          </Col>
        </Row>
      </Screen>
      <Screen id="main">
        <Section id="hero"></Section>
        <Section id="red" backgroundColor="#ff3333"></Section>
        <Section id="yellow" backgroundColor="#ffff66"></Section>
      </Screen>
      <Screen id="payment" backgroundColor="#7300e6">
        <h1>Payments</h1>
        <p><i class="fas fa-envelope"></i> support@experienceconcerts.co</p>
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
        <h1>EXP|CON</h1>
        <p>2021 All Rights Reserved | Speer Technologies Icorporated</p>
      </Screen>
    </div>
  );
}

export default App;
