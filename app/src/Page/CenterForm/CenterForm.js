
import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Popover from 'react-bootstrap/lib/Popover';
import FormControl from 'react-bootstrap/lib/FormControl';
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import DatePicker from 'react-bootstrap-date-picker';
import './CenterForm.scss';

const TimePicker = React.createClass({
  getInitialState: function(){
    const value = new Date().toISOString();
    return {
      value: value
    }
  },
  handleChange: function(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
  },
  componentDidUpdate: function(){
    // Access ISO String and formatted values from the DOM.
    const hiddenInputElement = document.getElementById("datepicker");
    console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
    console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
  },
  render: function(){
    return <FormGroup>
      <ControlLabel>Seleccione una Fecha</ControlLabel>
      <DatePicker id="datepicker" value={this.state.value} onChange={this.handleChange} />
    </FormGroup>;
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

const OtherReason = React.createClass({
  render: function(){
    return(
      <div><br/>
         <FormGroup controlId="formControlsTextarea">
           <ControlLabel>Otro</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Escriba el motivo de la recuperación." />
         </FormGroup>
      </div>
    );
  }
});

const ReasonForm = React.createClass({
     getInitialState: function() {
         return {
             value: '1',
         }
     },
     change: function(event){
        this.setState({value: event.target.value});
     },
     expand: function() {
       return(
         <div>
           <FormGroup controlId="formControlsTextarea">
             <ControlLabel>Otro motivo</ControlLabel>
             <FormControl componentClass="textarea" placeholder="escriba una razón." />
           </FormGroup>
         </div>
       );
     },
     render: function(){
        return(
           <div>
             <ControlLabel>Motivo de la recuperación</ControlLabel>
               <FormControl componentClass="select" onChange={this.change} value={this.state.value}>
                  <option value="1">Se quemo el pc</option>
                  <option value="2">Se quemo la marraqueta</option>
                  <option value="3">Tanto te importa?</option>
                  <option value="4">Otro</option>
              </FormControl>
              {this.state.value == "4" &&  <OtherReason />}
           </div>
        );
     }
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

class CenterForm extends Component {
  render(){
    return(
      <div className="CenterForm">

          <Row>
            <Col>
              <h3 className="title">Recupación</h3> <br/>
              <TimePicker /><hr/>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="Agregar Archivos"
                help="Los archivos seleccionados serán los más proximos a las fecha solicitada"
                /><hr/>
              <Checkbox inline>Incluir archivos eliminados</Checkbox><hr/>
              <ReasonForm /><hr/>
            </Col>
          </Row>
          <Row>
            <Col className="button">
              <SuperButton />
            </Col>
          </Row>
      </div>
    );
  }
}

export default CenterForm;
