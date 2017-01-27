import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
//import './requests.js'
//CSS
import './InfoBar.scss';

const data = {
  Bytes: null,
  Files: null,
  ETA: "0h0m0s"
};

const url = 'http://localhost:8080/info';
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    // information.Bytes = data.Bytes;
    // information.Files = data.Files;
    // information.ETA = data.ETA;
})
.catch(error => console.error(error));

class InfoBar extends Component {
  render() {
    return (
      <div className="InfoBar">
        <Grid>
          <Row>
            <Col>
              <h3>Información</h3>
            </Col>
            <Col>
              <h3>{data.Bytes} GB</h3>
            </Col>
            <Col>
              <h3>{data.Files} Archivos</h3>
            </Col>
            <Col>
              <h3>Tiempo: {data.ETA}</h3>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default InfoBar;
