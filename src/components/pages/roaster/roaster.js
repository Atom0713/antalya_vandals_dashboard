import React from "react";
import { Container } from "react-bootstrap";
import RoasterBox from "../../roaster_box/roaster_box";
import gorgias from "../../../images/gorgias.png";
import sefa1 from "../../../images/sefa1.png";
import ibo1 from "../../../images/ibo1.png";
import ceru1 from "../../../images/ceru1.png";
import sefa2 from "../../../images/sefa2.png";
import ibo2 from "../../../images/ibo2.png";

class Roaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          name: "Image 1",
          src: sefa1,
          desc: "This describes this image..",
        },
        {
          name: "Image 2",
          src: ibo1,
          desc: "This describes this image 2..",
        },
        {
          name: "Image 3",
          src: ceru1,
          desc: "This describes this image 3 ..",
        },
        {
          name: "Image 4",
          src: sefa2,
          desc: "This describes this image 4..",
        },
        {
          name: "Image 5",
          src: ibo2,
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
