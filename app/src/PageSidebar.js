import React, {Component} from 'react';

//CSS
import './PageSidebar.scss';
import {Glyphicon} from 'react-bootstrap';

class PageSidebar extends Component {
  render() {
    return (
      <div className="PageSidebar">
      <ul>
        <li><a href="">
          <Glyphicon glyph="file" /> Solicitar</a></li>
        <li><a href=""><Glyphicon glyph="tag" /> Registro</a></li>
      </ul>
      </div>
    );
  }
}

export default PageSidebar;
