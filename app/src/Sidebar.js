import React, {Component} from 'react';

//CSS
import {Image} from 'react-bootstrap';
import './Sidebar.scss';
import logo from './logo-sidebar.png';


class Sidebar extends Component {
render() {
  return (
    <div className="Sidebar">
      <div className="brand">
        <a href="#/">
          <Image src={logo} alt="CLONER" responsive />
        </a>
      </div>

      <div className="wellcome">
        Bienvenido <span className="ng-binding">Javier Carrion</span>
      </div>

      <ul>
        <li active-menu="" className="active"><a href="#/files"><i className="fa fa-files-o"></i> Archivos</a></li>
        <li><a href="" ng-click="sharedFiles()"><i className="fa fa-share-alt"></i> Compartidos</a></li>
        <li><a href="" ng-click="support()"><i className="fa fa-ticket"></i> Soporte</a></li>
        <li><a href="" ><i className="fa fa-ticket"></i> Recuperación</a></li>
      </ul>

      <ul>
        <li><a href="" ng-click="account()"><i className="fa fa-user"></i> Cuenta</a></li>
        <li><a href="" ng-click="logout()"><i className="fa fa-power-off"></i> Salir</a></li>
      </ul>
    </div>
  );
}
}

export default Sidebar;
