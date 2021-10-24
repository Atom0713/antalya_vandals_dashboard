import React from "react";
import { Container } from "react-bootstrap";
import RoasterBox from "../../roaster_box/roaster_box";
import gorgias from "../../../images/gorgias.png";

class Roaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          name: "Image 1",
          src: gorgias,
          desc: "This describes this image..",
        },
        {
          name: "Image 2",
          src: gorgias,
          desc: "This describes this image 2..",
        },
        {
          name: "Image 3",
          src: gorgias,
          desc: "This describes this image 3 ..",
        },
        {
          name: "Image 4",
          src: gorgias,
          desc: "This describes this image 4..",
        },
        {
          name: "Image 5",
          src: gorgias,
          desc: "This describes this image 5..",
        },
        {
          name: "Image 6",
          src: gorgias,
          desc: "This describes this image 6..",
        },
      ],
    };
  }

  render() {
    return (
      <Container fluid>
        <h1 className="text-center">Roaster</h1>
        <h2 className="text-center">Staff</h2>
        <RoasterBox key={this.state.images} images={this.state.images} />
        <h2 className="text-center">players</h2>
        <RoasterBox key={this.state.images} images={this.state.images} />
      </Container>
    );
  }
}
export default Roaster;
