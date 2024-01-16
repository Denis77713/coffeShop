import React from "react"
import styled from "styled-components"

const Buttom = styled.button`
  background: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  width: 75px;
  height: 30px;
  flex-shrink: 0;
  border: none;
  color: #000;
  text-align: center;
  font-family: Merienda;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 5px;
  &:first-child {
    border-radius: 4px 0px 0px 4px;
  }
  &:last-child {
    border-radius: 0px 4px 4px 0px;
  }
`
const Sort = ({ data, getSort }) => {
  function getValue(e) {
    const ButtomValue = e.target.value
    getSort(ButtomValue)
  }
  function getData() {
    let resultArr = []
    const dataArr = ["Columbia", "Kenya", "Brazil"]
    for (let i = 0; i <= dataArr.length; i++) {
      const newArr = data.filter((item) => item.origin === dataArr[i])
      newArr.forEach((item) => resultArr.push(item.origin))
    }
    return [...new Set(resultArr)]
  }
  const filterData = getData()
  return (
    <div>
      {filterData.map((item) => (
        <Buttom key={item} value={item} onClick={getValue}>
          {item}
        </Buttom>
      ))}
    </div>
  )
}

export default Sort
