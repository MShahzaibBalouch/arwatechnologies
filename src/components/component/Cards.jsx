import React from "react";
import { Card } from "react-bootstrap";
import '../style/Cards.css';

const Cards = ({data}) => {
  return (
    <div>
      {
        data.map((item)=>{
          return <Card className="my-2 border-0 navigation-card d-flex flex-row gap-2 align-items-center py-1 px-2 m-0">
          <div className="card-image">
              <img src={item.image} alt="card" />
          </div>
          <div className="card-content">
              <p className='field-name'>{item.name}</p>
          </div>
        </Card>
        })
      }
    </div>
  );
};

export default Cards;
