import React from 'react';
import { StyleRoot } from 'radium';
import {Treebeard, decorators} from 'react-treebeard';

import data from './data';
import getAuth from './requests';

import styles from './styles';
import * as filters from './filter';

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';
const auth_key = '6f9536809658ceda12ae071783417d656e997409c83254dc85d391516abb0d7d66069bc77f68a0d30d77e261332a7e09429d96cd7909fbc00e46fef005d8737f';
const repo_id = 'df0e7d994366eaeed2b977c1782afcfa16129671df2188661968f47e8646eba1a479f4bfdc2f8ae83a73f1dea3fe08f010663d7637d904fcfd32a0970952e9c7';

// Example: Customising The Header Decorator To Include Icons
decorators.Header = (props) => {
    const style = props.style;
    const iconType = props.node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = { marginRight: '5px' };
    return (
        <div style={style.base}>
            <div style={style.title}>
              <input
                type="checkbox"
              />
                <i className={iconClass} style={iconStyle}/>
                {props.node.name}
            </div>
        </div>
    );
};

class NodeViewer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = styles.viewer;
        let json = JSON.stringify(this.props.node, null, 4);
        if(!json){ json = HELP_MSG; }
        return (
            <div style={style.base}>
                {json}
            </div>
        );
    }
}

NodeViewer.propTypes = {
    node: React.PropTypes.object
};

class TreePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
        function appender(t, n) {
          return function appendTree(children) {

            children.sort(function(a, b) {
              return a.Name.localeCompare(b.Name);
            });

            for (var i = 0; i < children.length; i++) {
              if (children[i].Type === 0) {
                n.children.push({name: children[i].Name,
                  id: children[i].Id,
                  toggled: false,
                  children: []
                });
              } else {
                n.children.push({name: children[i].Name,
                  id: children[i].Id,
                  toggled: false
                });
              }
            }

            t.setState({data: t.state.data});
          };
        }

        if (node.children.length === 0) {
          getAuth('https://zifre.cloner.cl/api/children?id=' + node.id + '&version=99999999&repo_id=' + repo_id, auth_key, appender(this, node), console.log);
        }
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }
    onFilterMouseUp(e){
        const filter = e.target.value.trim();
        if(!filter){ return this.setState({data}); }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }
    render(){
        return (
            <StyleRoot>
                <div style={styles.searchBox}>
                    <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-search"></i>
                        </span>
                        <input type="text"
                            className="form-control"
                            placeholder="Search the tree..."
                            onKeyUp={this.onFilterMouseUp.bind(this)}
                        />
                    </div>
                </div>
                <div style={styles.component}>
                    <Treebeard
                        data={this.state.data}
                        onToggle={this.onToggle}
                        decorators={decorators}
                    />
                </div>
                <div style={styles.component}>
                    <NodeViewer node={this.state.cursor}/>
                </div>
            </StyleRoot>

        );
    }
}

export default TreePicker;
