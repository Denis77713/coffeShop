import React from "react"
import styled from "styled-components"
const House = styled.div`
  display: flex;
  align-items: end;
  p {
    margin: 0;
  }
`
const Wrapper = styled.nav`
  z-index: 3;
  position: relative;
  width: 392px;
  padding: 0 16px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: ${(props) => props.$mb}px;
  @media (max-width: 760px) {
    margin-bottom: 22px;
    flex-direction: ${(props) => (props.$bool ? "column" : "row")};
    align-items: start;
    background: ${(props) => (props.$bool ? props.$isMain : "transparent")};
    /* background: grey; */
    max-width: ${(props) => (props.$bool ? 320 : 392)}px;
    padding-top: ${(props) => (props.$bool ? 20 : 0)}px;
    position: ${(props) => (props.$bool ? "absolute" : "static")};
    right: ${(props) => props.$left}px;
    top: 0;
    /* transition: 0.5s; */
    transition: ${(props) =>
      props.$left === 0 ? 0.5 : props.$left === -320 ? 0.5 : 0}s;
  }
  @media (max-width: 385px) {
    margin-bottom: 0px;
    flex-direction: ${(props) => (props.$bool ? "column" : "column")};
    align-items: ${(props) => (props.$bool ? "" : "center")};
  }
`
const P = styled.p`
  color: ${(props) => (props.$bool ? "white" : "black")};
  margin: 0;
  cursor: pointer;
  @media (max-width: 760px) {
    padding-bottom: ${(props) => (props.$bool ? 20 : 0)}px;
    z-index: 3;
    color: ${(props) => (props.$bool ? "white" : "black")};
  }
  @media (max-width: 385px) {
    padding-bottom: ${(props) => (props.$bool ? "" : 20)}px;
  }
`
const Img = styled.img`
  @media (max-width: 760px) {
    display: none;
  }
`
const Close = styled.div`
  color: white;
  position: absolute;
  right: 20px;
  top: 10px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`
const Burger = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 5px;
  position: absolute;
  right: 16px;
  top: 16px;
  display: none;
  span {
    position: absolute;
    height: 4px;
    left: 3px;
    right: 3px;
    background: white;
    border-radius: 5px;
  }
  span:nth-child(1) {
    top: 7px;
  }
  span:nth-child(2) {
    top: 17px;
  }
  span:nth-child(3) {
    top: 27px;
  }
  @media (max-width: 760px) {
    display: block;
  }
`
const Navigation = ({
  mb,
  bool,
  page,
  setPages,
  lang,
  left,
  setLeft,
  isMain,
}) => {
  function getImage() {
    let images
    bool === true
      ? (images = "./images/coffeImgW.png")
      : (images = "./images/coffeImgB.png")
    return images
  }
  const image = getImage()
  //
  //
  function pageAndBurger(page) {
    if (bool) {
      setPages(page)
      setLeft(-320)
    } else {
      setPages(page)
    }
  }
  return (
    <>
      <Wrapper $mb={mb} $bool={bool} $left={left} $isMain={isMain}>
        <House>
          <Img src={image} alt="coffe" />
          <P
            $bool={bool}
            name="main"
            className="nav-item"
            onClick={() => {
              pageAndBurger("main")
            }}
          >
            {lang ? lang.nav[0].name : "Coffee house"}
          </P>
        </House>
        <P
          $bool={bool}
          className="nav-item"
          name="about-us"
          onClick={() => {
            pageAndBurger("about-us")
          }}
        >
          {lang ? lang.nav[1].name : "Our coffee"}
        </P>
        <P
          $bool={bool}
          className="nav-item"
          name="ForYourPleasure"
          onClick={() => {
            pageAndBurger("ForYourPleasure")
          }}
        >
          {lang ? lang.nav[2].name : "For your pleasure"}
        </P>
        {bool ? <Close onClick={() => setLeft(-320)}>X</Close> : ""}
      </Wrapper>
      {bool ? (
        <Burger onClick={() => setLeft(0)}>
          <span></span>
          <span></span>
          <span></span>
        </Burger>
      ) : (
        ""
      )}
    </>
  )
}

export default Navigation
