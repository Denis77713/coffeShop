import React from "react"
import styled from "styled-components"
const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  background: rgba(255, 255, 255, 0.65);
  padding: 22px 20px;
  position: relative;
  margin: 0 16px;
  margin-top: ${(props) => (props.$main ? 16 : 0)}px;
  margin-bottom: ${(props) => (props.$main ? 42 : 0)}px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  min-height: ${(props) => (props.$main ? 260 : 240)}px;
  cursor: pointer;
  img {
    max-width: 167px;
    max-height: 130px;
    background-size: contain;
  }
  strong {
  }
  @media (max-width: 760px) {
    margin: 16px;
  }
  @media (max-width: 530px) {
    margin: 0;
    margin-bottom: 20px;
  }
`
const WrapperImg = styled.div`
  text-align: center;
  width: 167px;
  display: block;
  height: 130px;
  margin: 0 auto;
  margin-bottom: 14px;
`
const Origin = styled.p`
  color: #000;
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`
const P = styled.p`
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`
const WrapperContent = styled.div`
  text-align: end;
`
const Card = ({ dataLang, main, setPages, setCard }) => {
  const images = `./images/${dataLang.image}`
  const text = dataLang.name
  const price = dataLang.price
  //
  //
  function Card() {
    setCard(dataLang)
    setPages("product")
  }
  return (
    <CardProduct $main={main} onClick={Card}>
      <div>
        <WrapperImg>
          <img src={images} alt={text} />
        </WrapperImg>
        <P className="card-text">{text}</P>
      </div>
      <WrapperContent>
        {main ? <Origin>{dataLang.origin}</Origin> : ""}
        <strong className="card-prise">{price}</strong>
      </WrapperContent>
    </CardProduct>
  )
}

export default Card
