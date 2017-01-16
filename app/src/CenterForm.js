import React, {Component} from 'react'
import {DatePicker,Grid, Row, Col, Modal, Navbar, Button, Navitem, Checkbox, Popover, Tooltip, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import './CenterForm.scss';

const spanishDayLabels = ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'];
const spanishMonthLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const wapperDivStyle = { border: '1px solid #ccc' };
const scrollingDivStyle = { padding: '10px', height: '70px', overflow: 'auto' };

const DateForm = React.createClass({
  getInitialState() {
    return {
      date: new Date().toISOString(),
      previousDate: null,
      focused: false
    };
  },
  handleChange(value) {
    this.setState({
      date: value
    });
  },
  render() {
    const LabelISOString = new Date().toISOString();
    return <Grid>
        <Row>
          <Col>
            <FormGroup>
              <ControlLabel>DD-MM-YYYY</ControlLabel>
              <DatePicker dateFormat="DD-MM-YYYY" onChange={this.handleChange} value={this.state.date} />
              <HelpBlock>Help</HelpBlock>
            </FormGroup>
          </Col>
        </Row>
      </Grid>;
    }
});

const CustomControl = React.createClass({
  displayName: 'CustomControl',

  render() {
    const {
      value,
      placeholder,
      ...rest,
    } = this.props;

    return <Button {...rest}>{value || placeholder}</Button>;
  },
});

const SuperButton = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="medium"
          onClick={this.open}
        >
          Confirmar
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Confrimación de la recuperación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Aceptar</Button>
            <Button bsStyle="danger" onClick={this.close}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class CenterForm extends Component {
  render(){
    return(
      <div className="CenterForm">
          <Row>
            <Col>
              <h3>Recupación</h3>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="Agregar Archivos"
                help="Los archivos seleccionados serán los más proximos a las fecha solicitada"
                />
              <Checkbox inline>Incluir archivos eliminados</Checkbox><br/>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Motivo de la recuperación</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="1">Se me quemo el pc</option>
                  <option value="2">No sé que sucedió</option>
                  <option value="3">Tanto te importa?</option>
                  <option value="4">brp</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea" help="Holi">
                <ControlLabel>Otro motivo</ControlLabel>
                <FormControl componentClass="textarea" placeholder="escriba una razón." />
              </FormGroup>
              <SuperButton />
            </Col>
          </Row>
      </div>
    );
  }
}

export default CenterForm;
