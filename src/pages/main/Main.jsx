import React from "react"
import "../main/main.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import CardList from "../../components/cardList/CardList"
import Content from "../../components/content/Content"
import TitleContent from "../../components/TitleContent/TitleContent"
import CoffeLine from "../../components/coffeLine/CoffeLine"
import styled from "styled-components"
const Section = styled.section`
  padding-top: 80px;
  @media (max-width: 760px) {
    padding-top: 20px;
  }
`
const Main = ({ dataLang, lang, page, setPages,setCard,card }) => {
  const pageTitle = lang.promoPage.aboutUs.pageTitle
  const text = lang.promoPage.aboutUs.text
  const name = lang.promoPage.ourBest.name
  return (
    <>
      <Section className="main text-center">
        <TitleContent>{pageTitle}</TitleContent>
        <CoffeLine mb={40} black={true} />
        {text.map((item) => (
          <Content key={item.key} mb={25} width={622} pading={16}>
            {item.p}
          </Content>
        ))}
      </Section>
      <section className="main main-card text-center ">
        <TitleContent className="main__title">{name}</TitleContent>
        {/* best - если true отобразить половину списка */}
        <CardList
          dataLang={dataLang}
          best={true}
          main={false}
          width={900}
          page={page}
          setPages={setPages}
          setCard={setCard}
          card={card}
        />
      </section>
    </>
  )
}

export default Main
