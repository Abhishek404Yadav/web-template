import React from "react"

const Card = ({title="Card title",Btntitle="Go Somewhere",Paratitle="There is nothing much to say ",Imgsource="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})=>{
    return(
        <div className="card" style={{width: '18rem'}}>
        <img
          src={Imgsource}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {Paratitle}
          </p>
          <a href="#" className="btn btn-success">{Btntitle}</a>
        </div>
      </div>
    )
}
export default Card