import React from "react"
import ImgAndText from "../../components/ImgAndText/ImgAndText"
import CardList from "../../components/cardList/CardList"
import Line from "../../components/line/Line"
import{WrapperContainer} from "../aboutUs/AboutUs"

const ForYourPleasure = ({ lang, dataLang, page, setPages, setCard, card }) => {
  const path = lang.forYourPleasurePage.sectionAbout
  const text = path.text
  const img = path.img.name
  const title = path.sectionTitle
  const alt = path.img.alt
  return (
    <WrapperContainer>
      {
        <ImgAndText
          text={text}
          mainData={lang}
          img={img}
          title={title}
          alt={alt}
        />
      }
      <Line width={240} mt={60} mb={60} />
      <CardList
        dataLang={dataLang}
        best={false}
        main={true}
        width={832}
        page={page}
        setPages={setPages}
        setCard={setCard}
        card={card}
      />
    </WrapperContainer>
  )
}

export default ForYourPleasure
