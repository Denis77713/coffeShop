import { useState } from "react"
import "./App.scss"
import Main from "./pages/main/Main"
import AboutUs from "./pages/aboutUs/AboutUs"
import "bootstrap/dist/css/bootstrap.min.css"
import data from "./db/db"
import Navigation from "./components/navigation/Navigation"
import CoffeLine from "./components/coffeLine/CoffeLine"
import MainHeader from "./components/header/MainHeader"
import Header from "./components/header/Header"
import Product from "./pages/product/Product"
import ForYourPleasure from "./pages/ForYourPleasure/ForYourPleasure"

function App() {
  // Языки
  // const rus = data.rus
  const eng = data.eng
  // const esp = data.esp
  //
  // Переключатель страниц
  const [page, setPages] = useState("main")
  // Переключатель языка
  const [lang, setLang] = useState(eng)
  // Бургер меню
  let [left, setLeft] = useState(-321)

  // Фильтрация
  const [filterData, setFilterData] = useState(eng.cards)
  //
//  
// 
  // Создает кнопки для сортировки
  function getButtonSort() {
    const arr = lang.cards.map(item=>item.origin)
    const newData = Array.from(new Set(arr))
    const ButtonArr = []
    for (let i = 0; i <= newData.length; i++) {
      if (newData[i] !== undefined) {
        ButtonArr.push({ name: newData[i], click: false, id: i })
      }
    }
    return ButtonArr
  }
  // 
  // 
  const sortPerem = getButtonSort()
  const [buttonArr, setButtonArr] = useState(sortPerem)
  //
  // Сортировка
  let [sorting, setSorting] = useState(lang.cards)
  function getSort() {
    //
    // Возвращает кнопки со значением true
    const newArr = buttonArr.filter((item) => item.click === true)
    //
    // В mainArr будут карточки отфильтрованные по кнопкам у которых значение true
    const mainArr = []
    for (let i = 0; i < newArr.length; i++) {
      //
      const sortArr = lang.cards.filter((item) =>
        item.origin
          .toLocaleLowerCase()
          .includes(newArr[i].name.toLocaleLowerCase())
      )
      mainArr.push(...sortArr)
    }
    //
    // Если mainArr пуст, вернет изнчальные данные
    if (mainArr.length !== 0) {
      setSorting(mainArr)
      setFilterData(mainArr)
    } else {
      setSorting(lang.cards)
      setFilterData(lang.cards)
    }
  }
  // Фильтрация
  function getFilterCards(value) {
    // Фильтрует отсортированный массив
    const sottData = sorting.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
    setFilterData(sottData)
  }
  // Данные карточки
  const [card, setCard] = useState("")
  // Смена страниц
  function Pages() {
    switch (page) {
      case "main":
        return (
          <Main
            dataLang={lang.cards}
            lang={lang}
            page={page}
            setPages={setPages}
            setCard={setCard}
            card={card}
          />
        )
      case "about-us":
        return (
          <AboutUs
            dataLang={filterData}
            getFilterCards={getFilterCards}
            getSort={getSort}
            data={lang.cards}
            mainData={lang}
            buttonArr={buttonArr}
            setButtonArr={setButtonArr}
            page={page}
            setPages={setPages}
            setCard={setCard}
            card={card}
            sortPerem={sortPerem}
          />
        )
      case "product":
        return <Product card={card} />
      case "ForYourPleasure":
        return (
          <ForYourPleasure
            lang={lang}
            dataLang={filterData}
            page={page}
            setPages={setPages}
            setCard={setCard}
            card={card}
          />
        )
      default:
        return (
          <Main page={page} setPages={setPages} setCard={setCard} card={card} />
        )
    }
  }
  function getHeader() {
    switch (page) {
      case "main":
        return (
          <MainHeader
            className="header"
            page={page}
            setPages={setPages}
            lang={lang}
            setLang={setLang}
            left={left}
            setLeft={setLeft}
          />
        )
      case "about-us":
        return (
          <Header
            className="header"
            page={page}
            setPages={setPages}
            lang={lang}
            setLang={setLang}
            left={left}
            setLeft={setLeft}
            setFilterData={setFilterData}
            card={card}
            setCard={setCard}
          >
            {lang.ourCoffeePage.pageTitle}
          </Header>
        )
      case "product":
        return (
          <Header
            className="header"
            page={page}
            setPages={setPages}
            lang={lang}
            setLang={setLang}
            left={left}
            setLeft={setLeft}
            setFilterData={setFilterData}
            card={card}
            setCard={setCard}
          >
            {lang.ourCoffeePage.pageTitle}
          </Header>
        )
      case "ForYourPleasure":
        return (
          <Header
            className="header"
            page={page}
            setPages={setPages}
            lang={lang}
            setLang={setLang}
            left={left}
            setLeft={setLeft}
            setFilterData={setFilterData}
            card={card}
            setCard={setCard}
          >
            {lang.forYourPleasurePage.pageTitle}
          </Header>
        )
      default:
        return (
          <MainHeader
            className="header"
            page={page}
            setPages={setPages}
            lang={lang}
            setLang={setLang}
            left={left}
            setLeft={setLeft}
          />
        )
    }
  }
  // Смена страниц
  const renderPage = Pages()
  const renderHeader = getHeader()
  return (
    <div className="App">
      <header>{renderHeader}</header>
      {/*  Смена страниц */}
      <main className="main">{renderPage}</main>
      <footer className="footer">
        <Navigation
          mb={30}
          bool={false}
          page={page}
          setPages={setPages}
          lang={lang}
        />
        <CoffeLine mb={20} black={true} />
      </footer>
    </div>
  )
}

export default App
