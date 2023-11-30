import React, { useState, useEffect } from "react";
import "./style/Header.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Image } from "react-bootstrap";

const Header = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token =
        "Bearer patwGx3Ovz28I95Uc.2e5c6d15266973756153627c76dcb3d15ac295b123f949f61b4eb25f94be6c5a";
      const url = "https://api.airtable.com/v0/apphTYmhT1i33AyN9/team";

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: token,
          },
        });
        setApiData(response.data.records);
        console.log(apiData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-96 bg-image-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-1">
            <h1 className="text-blue-400 font-bold fs-1">sdnfk</h1>
          </div>
          <div className="col-lg-7 order-2">
            <Carousel
              autoPlay={true}
              interval={2000}
              controls={false}
              indicators={false}
              fade
            >
              {apiData.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Image
                      src={item.fields.image}
                      alt={item.fields.name}
                    />
                    <Carousel.Caption className="d-none d-lg-block">
                      <h3 className="text-black fw-bold m-0 text-start">
                        {item.fields.name}
                      </h3>
                      <p className="text-gray-400 fw-normal m-0 p-0 text-start">
                        {item.fields.role}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
