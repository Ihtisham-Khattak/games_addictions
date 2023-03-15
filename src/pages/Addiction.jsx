import React from "react";
import { Col, Row } from "react-bootstrap";
// import AddictionImg from "../assets/addiction.jpg";
import GamerAvatar from "../assets/Gamer_Avatar.png";

const Addiction = () => {
  return (
   
      <Row className="m-5 p-5">
        <Col xs={4} md={6} className="py-5">
          <h1 className="text-white">Best Game Playing Today.</h1>
          <p className="text-white">
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir.
          </p>
          <button className="btn btn-primary d-inline-block" type="button">
            Button
          </button>
        </Col>

        <Col xs={6} md={6}>
          <img src={GamerAvatar} alt="gaming" />
        </Col>
      </Row>
  );
};

export default Addiction;
