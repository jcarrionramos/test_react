import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
//CSS
import './InfoBar.scss';

class InfoBar extends Component {
  render() {
    return (
      <div className="InfoBar">
        <Grid fuid>
          <Row>
            <Col xOffset={6}>
              <h3>Información</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 xOffset={6} >5/30 GB</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 xOffset={6} >300 Archivos</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 xOffset={6}>Tiempo: 15h 3m 6s</h3>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default InfoBar;
