import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Block } from './01-layout'

const Container = styled.div`
  display: grid;
  height: 100%;
  background: lightgrey;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
`

const Cell = Block.extend`
  grid-column: ${props => `${props.x} / ${props.x + 1}`};
  grid-row: ${props => `${props.y} / ${props.y + 1}`};
  background: #81D4FA;
`

class Example extends PureComponent {
  state = { x: 1, y: 1 }

  render() {
    const { x, y } = this.state
    return <Container>
      <Cell x={x} y={y}>
        <button onClick={() => this.setState({ x: x - 1 })}>⬅</button>
        <button onClick={() => this.setState({ y: y - 1 })}>⬆</button>
        <button onClick={() => this.setState({ x: x + 1 })}>➡</button>
        <button onClick={() => this.setState({ y: y + 1 })}>⬇</button>
        <div>x={x} y={y}</div>
      </Cell>
    </Container>
  }
}

export default Example
