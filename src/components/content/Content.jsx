import React from "react"
import styled from "styled-components"

const TextContent = styled.p`
  max-width: ${(props) => props.width}px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => props.$mb}px;
  padding: 0 ${(props) => props.$pading}px;
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`
const Content = ({ children, mb, width,pading }) => {
  return (
    <TextContent className="main__text" $mb={mb} width={width} $pading = {pading}>
      {children}
    </TextContent>
  )
}

export default Content
