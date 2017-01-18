import React, {Component} from 'react';
import HeaderPage from './HeaderPage';
import PageSidebar from './PageSidebar';
import CenterForm from './CenterForm';
import InfoBar from './InfoBar';
//CSS
import './Page.scss';
import {Grid, Row, Col} from 'react-bootstrap';

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
