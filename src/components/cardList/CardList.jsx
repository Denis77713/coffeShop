import React from "react"
import Card from "../card/Card"
import styled from "styled-components"
const MainContainer = styled.div`
  margin-top: 25px;
  max-width: ${(props) => props.$width}px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 252px 252px 252px;
  justify-content: space-between;
  /* padding: 0 16px; */
  @media (max-width: 760px) {
    grid-template-columns: 252px 252px;
    justify-content: center;
    margin-top: 0;
  }
  @media (max-width: 530px) {
    grid-template-columns: 220px;
  }
`
const CardList = ({
  dataLang,
  best,
  main,
  width,
  setPages,
  setCard,
}) => {
  let filterCards = dataLang
  if (best === true) {
    filterCards = dataLang.filter((item) => item.best === true)
  }
  const cards = filterCards.map((item, index) => (
    <Card
      dataLang={item}
      key={index}
      main={main}
      setPages={setPages}
      setCard={setCard}
    />
  ))
  return <MainContainer $width={width}>{cards}</MainContainer>
}

export default CardList
