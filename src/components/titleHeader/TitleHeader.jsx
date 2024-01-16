import React from "react"
import styled from "styled-components"

const HeaderTitle = styled.h1`
color: #FFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Merienda;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;

`
const TitleHeader = ({ children }) => {
  return <HeaderTitle>{children}</HeaderTitle>
}

export default TitleHeader
