import React, { useState, useEffect } from "react";
import "./style/Header.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Image } from "react-bootstrap";
import shahzaib from "./assets/images/team/shahzaib.png";
import hassan from "./assets/images/team/hassan.png";
import { Button } from "react-bootstrap";

const Header = () => {
  const apiData = [
    {
      name: "Muhammad Shahzaib Balouch",
      image: shahzaib,
      role: "MERN Stack Developer",
    },
    {
      name: "Muhammad Hassan Tahir",
      image: hassan,
      role: "MERN Stack Developer",
    },
  ];
  return (
    <div className="h-96 bg-image-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-1">
            <h1 className="text-gray-900 font-bold fs-1">
              Hire An Augmented Team of Professionals
            </h1>
            <p className="my-2 font-style-header-para">
              Arwa Technologies workbench helps you expand your team with the
              right talent, roadmap, and industry experience to swiftly
              transform your vision into reality.
            </p>
            <Button className="bg-gray-900 text-gray-100 mt-4 px-5 fs-5 py-2 fw-normal hover:text-gray-900 hover:bg-gray-100 border-2 border-black">Let's Talk</Button>
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
                    <Image src={item.image} alt={item.name} />
                    <Carousel.Caption className="d-none d-lg-block">
                      <h3 className="text-black fw-bold m-0 text-start">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 fw-normal m-0 p-0 text-start">
                        {item.role}
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
