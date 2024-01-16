import React from "react"
import styled from "styled-components"
const Coffe = styled.div`
  margin-bottom: ${(props) => props.$mb}px;
  text-align: center;
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`
const CoffeLine = ({ mb, black }) => {
  return (
    <Coffe $mb={mb}>
      <img src={black?"./images/Line.png":"./images/LineW.png"} alt="line" />
      <img className="mx-4" src={black?"./images/coffeImg.png":"./images/coffeImgWhite.png"} alt="cooffe" />
      <img src={black?"./images/Line.png":"./images/LineW.png"} alt="line" />
    </Coffe>
  )
}

export default CoffeLine
