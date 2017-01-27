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
//import './TreePicker.js';
import './CenterForm.scss';

import {Treebeard} from 'react-treebeard';
function GETTunnel(url, auth, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(url));
    xhr.setRequestHeader('Cloner_key', auth);
    xhr.onload = function() {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        error(xhr);
      }
    };
    xhr.send();
}

const data = {
    name: 'Root',
    toggled : true,
    children: []
};

let undoneRequests = 1;

function appendTree(tree) {
  return function(children) {
    for (let i = 0; i < children.length; i++){
      LoadTree(children[i], tree);
    }
    undoneRequests--;
    checkFinished(tree);
  }
}

function LoadTree(child, tree) {
  const treeChild = {
     name: child.Name
  };
  tree.children.push(treeChild);
  if (child.Type === 1){
    return;
  }
  treeChild.children = []
  undoneRequests++;
  GETTunnel('https://zifre.cloner.cl/api/children?id='+ child.Id +'&version=99999999&repo_id=51b7d8f0c0541ff5d6679e5be86a1b162038840e4149633b581431b4d4f44e183982238a81cf94d2da2ce4498204beb8c622886c099629a13db780821d81bdbc',
                           '6f9536809658ceda12ae071783417d656e997409c83254dc85d391516abb0d7d66069bc77f68a0d30d77e261332a7e09429d96cd7909fbc00e46fef005d8737f',
                           appendTree(treeChild),
                           console.log);
}

function checkFinished(tree) {
  if (undoneRequests === 0) {
    console.log(data);
  }
}

GETTunnel('https://zifre.cloner.cl/api/children?id=c506515ff13c4893ab4d7eac28a1c6e6343e72088a9d06bbb6f7c911117b55851747c50643391cf56013edd35a8cea89fa23d98a492c23da859f7252645b063f&version=99999999&repo_id=51b7d8f0c0541ff5d6679e5be86a1b162038840e4149633b581431b4d4f44e183982238a81cf94d2da2ce4498204beb8c622886c099629a13db780821d81bdbc',
                         '6f9536809658ceda12ae071783417d656e997409c83254dc85d391516abb0d7d66069bc77f68a0d30d77e261332a7e09429d96cd7909fbc00e46fef005d8737f',
                         appendTree(data),
                         console.log);

class TreePicker extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
      if(this.state.cursor){
        this.state.cursor.active = false;
      }
      node.active = true;
      if(node.children){
        node.toggled = toggled;
      }
      this.setState({ cursor: node });
    }
    render(){
        return (
            <Treebeard data={data} onToggle={this.onToggle}/>
        );
    }
}

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
    return  <FormGroup>
              <ControlLabel>Seleccione una Fecha</ControlLabel>
              <DatePicker id="datepicker" value={this.state.value} onChange={this.handleChange} />
            </FormGroup>;
  }
});

const ModularTree = React.createClass({
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
        <FormGroup controlId="ModularTree">
            <ControlLabel>Agregar Archivos</ControlLabel><br/>
            <Button  bsSize="small" onClick={this.open}>
              Seleccionar...
            </Button>
            <HelpBlock>
              Los archivos seleccionados serán los más proximos a las fecha solicitada
            </HelpBlock>
        </FormGroup>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <h3>Seleccione los archivo</h3>
          </Modal.Header>
          <Modal.Body>
            <TreePicker />
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Aceptar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

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
              {this.state.value === "4" &&  <OtherReason />}
           </div>
        );
     }
});

const ConfirmButton = React.createClass({
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
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
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
              <ModularTree /><hr/>
              <Checkbox inline>Incluir archivos eliminados</Checkbox><hr/>
              <ReasonForm /><hr/>
            </Col>
          </Row>
          <Row>
            <Col className="button">
              <ConfirmButton />
            </Col>
          </Row>
      </div>
    );
  }
}

export default CenterForm;
