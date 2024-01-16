import React from "react"
import styled from "styled-components"
import TitleContent from "../../components/TitleContent/TitleContent"
import CoffeLine from "../../components/coffeLine/CoffeLine"
import Content from "../../components/content/Content"

const Img = styled.img`
  @media (max-width: 760px) {
    display: none;
  }
`
const InndeContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: 70px;
  @media (max-width: 760px) {
    justify-content: center;
    margin-right: 0px;
    margin-top: 20px;
  }
`
const TextWrapper = styled.div`
  max-width: 346px;
`
const ImgAndText = ({ text, mainData, img, title, alt }) => {
  const newAlt = img.slice(0,-4)
  return (
    <InndeContainer>
      <Img src={`./images/${img}`} alt={alt ? alt : newAlt} />
      <div>
        <TitleContent mt={10}>{title}</TitleContent>
        <CoffeLine mb={40} black={true} />
        <TextWrapper>
          {text.map((item, index) => (
            <Content
              className="text-main"
              key={index}
              mb={0}
              width={"auto"}
              pading={0}
            >
              {item.p ? item.p : item}
            </Content>
          ))}
        </TextWrapper>
      </div>
    </InndeContainer>
  )
}

export default ImgAndText
