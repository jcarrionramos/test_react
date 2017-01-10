import React, {Component} from 'react';

//CSS
import './HeaderPage.scss';
import {Grid, Row, Col} from 'react-bootstrap';

class HeaderPage extends Component {
  render() {
    return (
      <div className="HeaderPage">
        <Grid fluid={true}>
          <Row>
            <Col md={12}>
              <ol className="breadcrumb"/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HeaderPage;
