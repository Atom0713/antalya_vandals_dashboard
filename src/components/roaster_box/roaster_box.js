import React from "react";
import { Col, Image, Row } from "react-bootstrap";

class RoasterBox extends React.Component {
  render() {
    return (
      <Row>
        {this.props.images.map(function (image, index) {
          return (
            <Col>
              <Image src={image.src} thumbnail />
              <div className="caption">
                <p>{image.desc}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default RoasterBox;
