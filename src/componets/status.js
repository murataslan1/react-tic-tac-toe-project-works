import React from 'react'
import styled from 'styled-components'

const StyleStatus = styled.div`
  font-size: 1.5em;
  margin: 1.5em auto;
  text-align: center;
  font-weight: bold;
`

function Status(props) {

  const {status} = props
  let text = ""

  switch(status.winner) {
    case 'Dead heat':
      text = status.winner
      break;
    default:
      if(status.winner){
        text = "Winner: " + status.winner
      } else {
        text = "Next player: " + status.turn
      }
  }

  return(
    <StyleStatus>
      {text}
    </StyleStatus>
  )
}

export default Status