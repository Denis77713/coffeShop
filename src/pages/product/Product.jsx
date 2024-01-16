import React from "react"
import styled from "styled-components"
import CoffeLine from "../../components/coffeLine/CoffeLine"
import TitleContent from "../../components/TitleContent/TitleContent"

const Wrapper = styled.div`
  max-width: 892px;
  margin: 70px auto 0;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`
const Img = styled.img`
  width: 390px;
  height: 355px;
  @media (max-width: 920px) {
    margin-bottom: 20px;
  }
  @media (max-width: 470px) {
    max-width: 288px;
    height: auto;
  }
`
const Content = styled.div`
  max-width: 410px;
  @media (max-width: 920px) {
    margin-bottom: 20px;
  }
`
const Text = styled.div`
  display: flex;
  align-items: start;
  strong {
    margin-right: 10px;
    color: #000;
    font-family: Merienda;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: Merienda;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  }
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    strong {
      margin-bottom: 10px;
    }
  }
`
const TextPrise = styled.div`
  display: flex;
  align-items: end;
  strong {
    margin-right: 10px;
  }
  p {
    color: #000;
    font-family: Merienda;
    font-size: 24px;
    font-style: normal;
    line-height: 0px;
  }
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    strong {
      margin-bottom: 15px;
    }
  }
`

const Product = ({ card }) => {
  return (
    <Wrapper>
      <Img src={`./images/${card.image}`} alt="" />
      <Content>
        <TitleContent mt={10}>{card.name}</TitleContent>
        <CoffeLine mb={22} black={true} />
        <Text>
          <strong>Country:</strong>
          <p>{card.origin}</p>
        </Text>
        <Text>
          <strong>Description:</strong>
          <p>{card.descriptions}</p>
        </Text>
        <TextPrise>
          <strong>Price:</strong>
          <p>{card.price}</p>
        </TextPrise>
      </Content>
    </Wrapper>
  )
}

export default Product
