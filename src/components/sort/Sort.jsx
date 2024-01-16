import React from "react"
import styled from "styled-components"
import "../../App.scss"
const Buttom = styled.button`
  background: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  width: 75px;
  height: 30px;
  flex-shrink: 0;
  color: #000;
  border: none;
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
const Sort = ({ data, getSort, buttonArr, setButtonArr,sortPerem }) => {
  //
  // Это sortPerem и buttonArr, у 1 name меняется, у 2 нет
  // sortPerem это изначальное состояние buttonArr
  // buttonArr меняется только через setButtonArr. Смена языка с ним не работает
  // Поэтому name от sortPerem, все остальное от setButtonArr
  /* [
    {"name":"Колумбия","click":false,"id":0},
    {"name":"Кения","click":false,"id":1},
    {"name":"Бразилия","click":true,"id":2},
    {"name":"Гана","click":false,"id":3}
  ]
 */
  // Меняет текст в кнопках, когда меняется язык
  buttonArr.map((item,index) => {
    let sortId = sortPerem[index].id
    let sortName = sortPerem[index].name
    if(sortId === item.id){
      item.name = sortName
    }
    return item
  });

// 
// 
  function getValue(e) {
    const ButtomValue = e.target.value
    const newBtn = buttonArr.filter((item) => item.name === ButtomValue)
    newBtn[0].click = !newBtn[0].click
    const id = newBtn[0].id
// 

    //
    setButtonArr([
      ...buttonArr.slice(0, id),
      ...newBtn,
      ...buttonArr.slice(id + 1),
    ])
    getSort(ButtomValue)
  }
  return (
    <div>
      {buttonArr.map((item, index) => (
        <Buttom
          className={item.click?"buttonActive":"button"}
          key={index}
          value={item.name}
          onClick={getValue}
        >
          {item.name}
        </Buttom>
      ))}
    </div>
  )
}

export default Sort
