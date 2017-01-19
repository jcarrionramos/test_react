import React, {Component} from 'react';
import HeaderPage from './HeaderPage/HeaderPage.js';
import PageSidebar from './PageSidebar/PageSidebar.js';
import CenterForm from './CenterForm/CenterForm.js';
import InfoBar from './InfoBar/InfoBar.js';
import {Grid, Row, Col} from 'react-bootstrap';
import './Page.scss';

class Page extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <HeaderPage />
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSidebar />
          </Col>
          <Col>
            <CenterForm />
          </Col>
          <Col>
            <InfoBar />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Page;
