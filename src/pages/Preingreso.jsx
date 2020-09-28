import React, { Component } from "react";
import "./Style/preingresoStyles.css"

import { Button } from "react-bootstrap";
export default class Preingreso extends Component {
  render() {
    return (
      <>
        <center>
          <br />
          <div className="container">
          <div className="row d-flex justify-content-center align-items-center pre-container">
          <div className="border p-3">
          <Button variant="primary" action="" size="lg" disabled>
            USUARIO
          </Button>{" "}
          <br />
          <br />
          <Button variant="primary" size="lg" disabled>
            ADMINISTRADOR
          </Button>{" "}
          </div>
          </div>
          </div>
        </center>
      </>
    );
  }
}
