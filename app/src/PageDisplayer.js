import React, {Component} from 'react';

//CSS
import './PageDisplayer.scss';



class PageDisplayer extends Component{
  render(){
    return (
      <div className="PageDisplayer">
        <table className="table table-striped">
          <thead>
            <tr>
              <th colspan="2">Código</th>
              <th>Recuperación</th>
              <th>ETA</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th colspan="2">AB-12</th>
            <th>
              <div id="descripcion" className="well"></div>
            </th>
            <th>4h 32m 15s</th>
            <th>Recuperando (2/3)</th>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default PageDisplayer;
