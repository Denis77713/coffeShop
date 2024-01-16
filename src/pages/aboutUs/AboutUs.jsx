import React from "react"
import CardList from "../../components/cardList/CardList"
import Search from "../../components/search/Search"
import Sort from "../../components/sort/Sort"
import styled from "styled-components"
import Line from "../../components/line/Line"
import ImgAndText from "../../components/ImgAndText/ImgAndText"

const WrapperContainer = styled.div`
  max-width: 832px;
  margin: 0 auto;
  padding: 0 16px;
`

const Label = styled.label`
  color: #000;
  text-align: center;
  font-family: Merienda;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const WrapperSearch = styled.label`
  display: flex;
  justify-content: space-between;
  width: 732px;
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 48px;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    margin-top: 30px;
  }
`
const SearchContainer = styled.div`
  /* margin-bottom: 28px; */
  label {
    margin-right: 19px;
  }
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 10px;
    }
  }
`
const SortContainer = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-right: 35px;
  }
  @media (max-width: 530px) {
    flex-direction: column;
    label {
      margin-bottom: 10px;
    }
  }
`

const AboutUs = ({
  dataLang,
  getFilterCards,
  getSort,
  data,
  mainData,
  buttonArr,
  setButtonArr,
  page,
  setPages,
  setCard,
  card,
  sortPerem
}) => {
  const filters = mainData.ourCoffeePage.filterSection.captions
  const text = mainData.ourCoffeePage.text
  const img = mainData.ourCoffeePage.img
  const title = mainData.ourCoffeePage.sectionTitle

  return (
    <>
      <WrapperContainer>
        <ImgAndText text={text} mainData={mainData} img={img} title={title} />
        <Line width={240} mt={60} />
        <WrapperSearch>
          <SearchContainer>
            <Label>{filters.text}</Label>
            <Search getFilterCards={getFilterCards} mainData={mainData} />
          </SearchContainer>
          <SortContainer>
            <Label>{filters.filter}</Label>
            <Sort
              data={data}
              getSort={getSort}
              buttonArr={buttonArr}
              setButtonArr={setButtonArr}
              sortPerem={sortPerem}
            />
          </SortContainer>
        </WrapperSearch>
      </WrapperContainer>
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
    </>
  )
}
export { WrapperContainer }
export default AboutUs
