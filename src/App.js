import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NumbersTable from './NumbersTable'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function formatSolution(solutionNumber) {
  let digit10 = parseInt(solutionNumber / 10)
  let digit1 = solutionNumber % 10
  return <span><span style={{backgroundColor: '#ffff00'}}>{digit10}</span><span style={{backgroundColor: '#ff00ff'}}>{digit1}</span></span>
}

function App() {
  // 🍏 ⚽ 🐱 🐶 🚌
  const [solutionNumber, setSolutionNumber] = useState(randomIntFromInterval(1,99))
  const [useColors, setUseColors] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <NumbersTable solutionNumber={solutionNumber} content={"🍏"} useColors={useColors}/>
          </Col>
          <Col>
            <Button onClick={() => setSolutionNumber(randomIntFromInterval(1,99))}>Nowa liczba</Button>
            <Button onClick={() => setDisplaySolution(!displaySolution)}>Pokaż rozwiązanie</Button>
            <Button onClick={() => setUseColors(!useColors)}>Kolorowanie</Button>
            <span style={{visibility: displaySolution ? 'visible' : 'hidden'}}>Rozwiązanie to {formatSolution(solutionNumber)}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
