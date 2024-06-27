import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import NumbersTable from './NumbersTable'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { sample } from 'lodash-es'

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let bgColor10 = '#F9FFB9'
let bgColor1 = '#C8FFB9'
let solutionDigitSize = '60px'

function formatSolution(solutionNumber) {
  let digit10 = parseInt(solutionNumber / 10)
  let digit1 = solutionNumber % 10
  if(solutionNumber > 9) {
    return <span><span style={{fontSize: solutionDigitSize, backgroundColor: bgColor10}}>{digit10}</span><span style={{fontSize: solutionDigitSize, backgroundColor: bgColor1}}>{digit1}</span></span>
  } else {
    return <span style={{fontSize: solutionDigitSize, backgroundColor: bgColor1}}>{digit1}</span>
  }
}

function App() {
  let icons = ["🍏", "⚽", "🐱", "🐶", "🚌", "🚗", "🚀", "🚄", "🚂", "🚒", "🚕", "🚚", "🛴", "🚤",
    "🥝", "🍍", "🍎", "🍓", "🏰", "🏡", "🏭", "🌲", "🌳", "🌴", "🎁", "🧩", "🏅", "🎵", "🎸", "🎻"
  ]
  const [solutionNumber, setSolutionNumber] = useState(randomIntFromInterval(1,99))
  const [useColors, setUseColors] = useState(false)
  const [displaySolution, setDisplaySolution] = useState(false)
  const [icon, setIcon] = useState(sample(icons))

  const newNumber = () => {
    setSolutionNumber(randomIntFromInterval(1,99))
    setIcon(sample(icons))
  }

  return (
    <div className="App">
      <Container fluid>
        <Row xs="auto">
          <Col>
            <NumbersTable solutionNumber={solutionNumber} content={icon} useColors={useColors}/>
          </Col>
          <Col style={{textAlign: 'left'}}>
            <Stack gap={3}>
              <div><Button style={{width: '200px'}} onClick={newNumber}>Nowa liczba</Button></div>
              <div><Button style={{width: '200px'}} onClick={() => setUseColors(!useColors)}>Kolorowanie</Button></div>
              <div><Button style={{width: '200px'}} onClick={() => setDisplaySolution(!displaySolution)}>Pokaż rozwiązanie</Button></div>
              <div><span style={{visibility: displaySolution ? 'visible' : 'hidden'}}>{formatSolution(solutionNumber)}</span></div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
