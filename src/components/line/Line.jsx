import React from "react"
import styled from "styled-components"

const LineComp = styled.div`
  height: 1px;
  background: black;
  width: ${props=>props.$width}px;
  display: block;
  margin: 0 auto;
  margin-top: ${props=>props.$mt}px;
  margin-bottom: ${props=>props.$mb}px;
  @media (max-width: 760px) {
    margin-top: 10px;
    margin-bottom: ${props=>props.$mb?`${30}px`:0};
  }
`
const Line = ({ width, mt,mb }) => {
  return <LineComp $width={width} $mt={mt} $mb={mb}></LineComp>
}

export default Line
