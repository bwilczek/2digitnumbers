import Table from 'react-bootstrap/Table';

function Cell({ myNumber, content, solutionNumber, useColors }) {
  let displayContent = myNumber <= solutionNumber ? content : ' '
  let style = {}
  let digit10 = parseInt(solutionNumber / 10)
  let tens = digit10 * 10
  if(useColors) {
    if(myNumber > tens && myNumber <= solutionNumber) {
      // last row
      style['backgroundColor'] = '#ff00ff'
      style['borderRightWidth'] = '5px'
    } else if (myNumber <= tens) {
      // first rows
      style['backgroundColor'] = '#ffff00'
      style['borderBottomWidth'] = '5px'
    }
  }
  return (
    <td style={style} datamynumber={myNumber} className="fixed50x50">{displayContent}</td>
  )
}

export default function NumbersTable({ solutionNumber, content, useColors }) {
  let cellForIndex = (o) => { return <Cell key={o} myNumber={o} content={content} solutionNumber={solutionNumber} useColors={useColors}/> }

  return (
    <Table bordered hover className="fixedWidth500">
      <tbody>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+1))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+11))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+21))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+31))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+41))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+51))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+61))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+71))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+81))}
        </tr>
        <tr>
          {[...Array(10).keys()].map((o, _i) => cellForIndex(o+91))}
        </tr>
      </tbody>
    </Table>
  )
}
