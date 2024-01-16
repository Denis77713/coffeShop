import React, { useState } from "react"
import styled from "styled-components"

const Input = styled.input`
  width: 180px;
  height: 30px;
  border: none;
  border-radius: 4px;
  background: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: Merienda;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

`
const Search = ({ getFilterCards, mainData }) => {
  const placeholder = mainData.ourCoffeePage.filterSection.placeholder.text
  const [inputValue, setInputValue] = useState("")

  function getInputValue(e) {
    const value = e.target.value
    setInputValue(value)
    getFilterCards(value)
  }
  return (
    <Input
      placeholder={placeholder}
      value={inputValue}
      onChange={getInputValue}
      type="text"
    />
  )
}

export default Search
