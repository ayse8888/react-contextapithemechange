import React from 'react'
import './styles.css'
import {cardDatas} from '../data/cardData'
import Card from './Card'

function Home(){
   const colSize = "4"
   const cardList = cardDatas.map(item => (
    <div className={`col-sm-${colSize} my-5`}>
    <Card id={item.id} name={item.name} url={item.url} text={item.text}/>
    </div>))

  return(
       <div className ="home">
          <h3>CHRISTMAS CELEBRATIONS FROM THE WORLD</h3>
          <div className="row">{cardList}</div>
        </div>
  )
}

export default Home