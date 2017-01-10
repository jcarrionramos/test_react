import React, {Component} from 'react';

//CSS
import './PageDisplayer2.scss';
import {Grid, Row, Col, ProgressBar, Jumbotron, Glyphicon, ButtonGroup, Button} from 'react-bootstrap';

const now = 60;

class PageDisplayer2 extends Component{
  render(){
    return (
      <Grid fluid className = "PageDisplayer2" >
        <Row>
          <Col md={2}/>
          <Col md={8}>
            <Jumbotron fluid>
              <Row className="show-grid">
                <Col md={4}>Código: AB-12 </Col>
                <Col md={4}>ETA: 5h 32m 45s</Col>
                <Col md={4}>Estados: Recuperando </Col>
              </Row>
              <Row>
                <br/><ProgressBar now={now} label={`${now}%`}/>
              </Row>
              <Row>
                <Col md={9}>
                  30/128 GB recuperados
                </Col>
                <Col>
                  <ButtonGroup bsSize="xsmall">
                    <Button><Glyphicon glyph="play"/></Button>
                    <Button><Glyphicon glyph="pause"/></Button>
                    <Button><Glyphicon glyph="trash"/></Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
          <Col md={2}/>
        </Row>
      </Grid>
    );
  }
}

export default PageDisplayer2;
