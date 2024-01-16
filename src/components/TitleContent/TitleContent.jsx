import React from "react"
import styled from "styled-components"

const Title = styled.h3`
  text-align: center;
  margin-top: ${(props) => props.$mt}px;
`
const TitleContent = ({ children, mt }) => {
  return <Title className="main__title mb-2 pb-1" $mt= {mt}>{children}</Title>
}

export default TitleContent
