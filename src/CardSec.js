import React from "react";
import Card from "./Card";

const CardSec=()=>(

    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="Example1" Btntitle="Click Me" Imgsource="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="col-4">
          <Card Btntitle="Click Me" Paratitle="Some quick example text" />
          </div>
          <div className="col-4">
           <Card title="Example3" Imgsource="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
        </div>
      </div>
    </section>

)
export default CardSec;