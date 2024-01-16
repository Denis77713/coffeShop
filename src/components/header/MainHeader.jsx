import React from "react"
import Navigation from "../navigation/Navigation"
import styled from "styled-components"
import CoffeLine from "../coffeLine/CoffeLine"
import TitleHeader from "../titleHeader/TitleHeader"
import Language from "../language/Language"
const HeaderContainer = styled.div`
  max-width: 1200px;
  padding: 26px 16px 203px;
  margin: 0 auto;
  @media (max-width: 760px) {
    padding-bottom: 20px;
  }
`
const ImageHeader = styled.div`
  background-image: url("./images/mainHeader.png");
  background-repeat: no-repeat;
  background-size: cover;
`
const SubtitleText = styled.p`
  text-align: center;
  color: #fff;
  font-family: Merienda;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const MoreButton = styled.button`
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
  display: block;
  margin: auto;
  padding: 4px 40px;
`
const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`
const MainHeader = ({ page, setPages, lang, setLang,left,setLeft }) => {
  const pageSubtitle = lang.promoPage.pageSubtitle.map((item, index) => (
    <SubtitleText key={index}>{item.name}</SubtitleText>
  ))
  return (
    <ImageHeader>
      <HeaderContainer>
        <NavigationWrapper>
          <Navigation
            mb={112}
            bool={true}
            page={page}
            setPages={setPages}
            lang={lang}
            left={left}
            setLeft={setLeft}
            isMain={"rgb(156, 136, 91)"}
          />
          <Language page={page} setLang={setLang}  />
        </NavigationWrapper>
        <TitleHeader>{lang.promoPage.pageTitle}</TitleHeader>
        <CoffeLine mb={30} black={false} />
        {pageSubtitle}
        <MoreButton>More</MoreButton>
      </HeaderContainer>
    </ImageHeader>
  )
}

export default MainHeader
