import React from "react"
import Navigation from "../navigation/Navigation"
import styled from "styled-components"
import TitleHeader from "../titleHeader/TitleHeader"
import Language from "../language/Language"
// import headerImg from "./images/"

const HeaderNav = styled.div`
  background-image: url("./images/header.png");
  background-size: cover;
  background-repeat: no-repeat;
`
const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 25px 16px 0;
  margin: 0 auto;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`
const TitleWrapper = styled.div`
  padding-bottom: 66px;
  @media (max-width: 760px) {
    padding-bottom: 10px;
  }
`
const Header = ({
  children,
  page,
  setPages,
  lang,
  setLang,
  left,
  setLeft,
  setFilterData,
  card,
  setCard,
}) => {
  return (
    <HeaderNav>
      <NavigationWrapper>
        <Navigation
          mb={60}
          bool={true}
          page={page}
          setPages={setPages}
          lang={lang}
          left={left}
          setLeft={setLeft}
          isMain={"rgb(138, 168, 178)"}
        />
        <Language
          page={page}
          setLang={setLang}
          setFilterData={setFilterData}
          card={card}
          setCard={setCard}
        />
      </NavigationWrapper>
      <TitleWrapper>
        <TitleHeader>{children}</TitleHeader>
      </TitleWrapper>
    </HeaderNav>
  )
}

export default Header
