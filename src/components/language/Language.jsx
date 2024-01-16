import React from "react"
import data from "../../db/db"
import styled from "styled-components"
const Button = styled.button`
  border-radius: 3px;
  border: 1px solid #fff;
  background: rgba(196, 196, 196, 0);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 4px 12px;
  margin-left: 7px;
  @media (max-width: 760px) {
    margin: 0 10px;
    margin-bottom: 20px;
  }
`
const Language = ({ page, setLang, setFilterData, card, setCard, }) => {
  const rus = data.rus
  const eng = data.eng
  const esp = data.esp
  //
  // Для перевода карточки
  function getLang(lang) {
    //
    //
    if (page === "product") {
      const langCard = lang.cards.filter((item) => item.key === card.key)
      setCard(...langCard)
    }
    if (page === "about-us") {
      setFilterData(lang.cards)
    }
    setLang(lang)
  }
  return (
    <div>
      <Button
        onClick={() => {
          getLang(eng)
        }}
      >
        eng
      </Button>
      <Button
        onClick={() => {
          getLang(rus)
        }}
      >
        рус
      </Button>
      <Button
        onClick={() => {
          getLang(esp)
        }}
      >
        esp
      </Button>
    </div>
  )
}

export default Language
