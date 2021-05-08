import logo from './logo.svg';
import './App.css';
import Section from './Components/Section';

function App() {
  return (
    <div className="App">
      <Section id="section1" backgroundColor="#1a1a1a"></Section>
      <Section id="section2" backgroundColor="#ff3333"></Section>
      <Section id="section3" backgroundColor="#7300e6">
        <h1>Payments</h1>
      </Section>
    </div>
  );
}

export default App;
