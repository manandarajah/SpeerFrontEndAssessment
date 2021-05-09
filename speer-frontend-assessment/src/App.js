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
    /*var x = e.pageX - e.target.offsetLeft;
  	var y = e.pageY - e.target.offsetTop;*/

    var x = e.pageX - 90;
    var y = e.pageY - 700;

    //centers the animation point
    switch (e.target.id) {
      case "advanced":
        x -= 530;
        break;
      case "pro":
        x -= 1060;
        break;
      case "pricingbtn":
        x -= 600;
        y -= 200;
        break;
      case "redtry":
        x -= 490;
        y -= 250;
        break;
      case "reddemo":
        x -= 690;
        y -= 250;
        break;
      case "yellowtry":
        x -= 490;
        y -= 290;
        break;
      case "yellowdemo":
        x -= 690;
        y -= 290;
        break;
    }

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
              <li><i class="fas fa-angle-right"></i> Very good</li>
              <li><i class="fas fa-angle-right"></i> Amazing</li>
              <li><i class="fas fa-angle-right"></i> Perfect Job</li>
              <li><i class="fas fa-angle-right"></i> Love this</li>
              <li><i class="fas fa-angle-right"></i> It's so good</li>
              <li><i class="fas fa-angle-right"></i> Features</li>
            </ul>
            <Button id={"basic"} onMouseMove={hoverButton} size="lg" style={{backgroundColor: "#ff3333"}}>
              <span>Select</span>
            </Button>
          </Col>
          <Col>
            <h3>Advanced<br/>------<br/>Yearly</h3>
            <h1>$99</h1>
            <ul>
              <li><i class="fas fa-angle-right"></i> Very good</li>
              <li><i class="fas fa-angle-right"></i> Even Amazing</li>
              <li><i class="fas fa-angle-right"></i> Perfect Job</li>
              <li><i class="fas fa-angle-right"></i> Love this more</li>
              <li><i class="fas fa-angle-right"></i> It's so so good</li>
              <li><i class="fas fa-angle-right"></i> More Features</li>
            </ul>
            <Button id={"advanced"} onMouseMove={hoverButton} size="lg" style={{backgroundColor: "#ffcc66"}}>
              <span>Select</span>
            </Button>
          </Col>
          <Col>
            <h3>Pro<br/>------<br/>Yearly</h3>
            <h1>$120</h1>
            <ul>
              <li><i class="fas fa-angle-right"></i> Very very good</li>
              <li><i class="fas fa-angle-right"></i> Even more</li>
              <li><i class="fas fa-angle-right"></i> Perfect Job</li>
              <li><i class="fas fa-angle-right"></i> Love this more</li>
              <li><i class="fas fa-angle-right"></i> It's so so good</li>
              <li><i class="fas fa-angle-right"></i> More Features</li>
            </ul>
            <Button id={"pro"} onMouseMove={hoverButton} size="lg" style={{backgroundColor: "#00cccc"}}>
              <span>Select</span>
            </Button>
          </Col>
        </Row>
      </Screen>
      <Screen id="main">
        <Section id="hero">
          <Button id="pricingbtn" onMouseMove={hoverButton}><span>Pricing</span></Button>
        </Section>
        <Section id="red" backgroundColor="#ff3333">
          <Button id="redtry" onMouseMove={hoverButton}><span>Try Now</span></Button>
          <Button id="reddemo" onMouseMove={hoverButton}><span>See Demo</span></Button>
        </Section>
        <Section id="yellow" backgroundColor="#ffff66">
          <Button id="yellowtry" onMouseMove={hoverButton}><span>Try Now</span></Button>
          <Button id="yellowdemo" onMouseMove={hoverButton}><span>See Demo</span></Button>
        </Section>
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
        <p>2021 © All Rights Reserved | Speer Technologies Icorporated</p>
      </Screen>
    </div>
  );
}

export default App;
