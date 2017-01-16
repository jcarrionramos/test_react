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
          <PageSidebar />
          <CenterForm />
          <InfoBar />
        </Row>
      </Grid>
    );
  }
}

export default Page;
