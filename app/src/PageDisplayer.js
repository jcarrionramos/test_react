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
                                    <td><div className="icheckbox_square-green checked" style="position: relative;"><input type="checkbox" className="i-checks" checked="" style="position: absolute; opacity: 0;"/><ins className="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td>
                                    <td>Contract with Zender Company
                                        <br/>
                                        <small><i className="fa fa-clock-o"></i> Created 14.08.2015</small>
                                    </td>
                                    <td>
                                        <span className="pie" style="display: none;">1/5</span><svg className="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 15.60845213036123 5.52786404500042 L 8 8" fill="#62cb31"></path><path d="M 15.60845213036123 5.52786404500042 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#edf0f5"></path></svg>
                                    </td>
                                    <td><strong>20%</strong></td>
                                    <td>Jul 14, 2013</td>
                                    <td><a href=""><i className="fa fa-check text-success"></i></a></td>
                                </tr>
                                <tr>
                                    <td><div className="icheckbox_square-green" style="position: relative;"><input type="checkbox" className="i-checks" style="position: absolute; opacity: 0;"/><ins className="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td>
                                    <td>There are many variations of passages
                                        <br/>
                                        <small><i className="fa fa-clock-o"></i> Created 21.07.2015</small>
                                    </td>
                                    <td>
                                        <span className="pie" style="display: none;">1/4</span><svg className="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 16 8 L 8 8" fill="#62cb31"></path><path d="M 16 8 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#edf0f5"></path></svg>
                                    </td>
                                    <td><strong>40%</strong></td>
                                    <td>Jul 16, 2013</td>
                                    <td><a href=""><i className="fa fa-check text-navy"></i></a></td>
                                </tr>
                                <tr>
                                    <td><div className="icheckbox_square-green checked" style="position: relative;"><input type="checkbox" className="i-checks" checked="" style="position: absolute; opacity: 0;"/><ins className="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td>
                                    <td>Contrary to popular belief
                                        <br/>
                                        <small><i className="fa fa-clock-o"></i> Created 12.06.2015</small>
                                    </td>
                                    <td>
                                        <span className="pie" style="display: none;">0.52/1.561</span><svg className="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 14.933563796318165 11.990700825968545 L 8 8" fill="#62cb31"></path><path d="M 14.933563796318165 11.990700825968545 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#edf0f5"></path></svg>
                                    </td>
                                    <td><strong>75%</strong></td>
                                    <td>Jul 18, 2013</td>
                                    <td><a href=""><i className="fa fa-check text-navy"></i></a></td>
                                </tr>
                                <tr>
                                    <td><div className="icheckbox_square-green" style="position: relative;"><input type="checkbox" className="i-checks" style="position: absolute; opacity: 0;"/><ins className="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td>
                                    <td>Gamma project
                                        <br/>
                                        <small><i className="fa fa-clock-o"></i> Created 06.03.2015}</small>
                                    </td>
                                    <td>
                                        <span className="pie" style="display: none;">226/360</span><svg className="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 1 1 2.2452815972907922 13.55726696367198 L 8 8" fill="#62cb31"></path><path d="M 2.2452815972907922 13.55726696367198 A 8 8 0 0 1 7.999999999999998 0 L 8 8" fill="#edf0f5"></path></svg>
                                    </td>
                                    <td><strong>16%</strong></td>
                                    <td>Jul 22, 2013</td>
                                    <td><a href=""><i className="fa fa-check text-navy"></i></a></td>
                                </tr>
                                </tbody>
        </table>
      </div>
    );
  }
}
export default PageDisplayer;
