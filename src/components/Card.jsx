import React from 'react'

const style = {
    width : "18rem",
}

const Card = ({id,name,url,text}) => {
    console.log()
    return (
        <div className="card mx-auto" style={style}>
          <img height="200" src={url} className="card-img-top w-100" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
          </div>
      </div>
    )
}

export default Card;