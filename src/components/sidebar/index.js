import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import * as actions from 'actions';

import Icofont from 'react-icofont';
import TreeSvg from './tree';
import Links from 'content/links';
import Tools from 'content/tools';
import './sidebar.scss';

const mapStateToProps = ({ tools: { hasToolEnabled, currentTool, toolName, toolDescription } }) => ({
    hasToolEnabled,
    currentTool,
    toolName,
    toolDescription
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="section title">
                <h1 className="cursor">hacker-forest</h1>
            </div>
            <div className="section links">
                <ul>
                    {Links.map(link => <li key={link.name}><a href={link.route}>{link.name}</a></li>)}
                </ul>
            </div>
            <div className="section tools">
                <div className="background">
                    <TreeSvg />
                </div>
                <div className="tool-list">
                    {Tools.map(tool =>
                        <div key={tool.name}
                            className={classnames("tool", { active: props.currentTool && props.currentTool.name === tool.name })}
                            title={tool.name}
                            onMouseOver={() => { props.actions.showToolDescription(tool) }}
                            onMouseOut={() => { props.actions.hideToolDescription() }}
                            onClick={() => { props.actions.toggleTool(tool) }}>
                            <Icofont icon={tool.icon} size="3" />
                        </div>
                    )}
                </div>
                <div className="tool-description">
                    <h2>{props.toolName}</h2>
                    <p>{props.toolDescription}</p>
                </div>
            </div>
            <div className="section flags">
                <div className="flag active">
                    <Icofont icon="flag-alt-1" size="2" />
                </div>
                <div className="flag active">
                    <Icofont icon="flag-alt-1" size="2" />
                </div>
                <div className="flag inactive">
                    <Icofont icon="flag-alt-1" size="2" />
                </div>
                <div className="flag inactive">
                    <Icofont icon="flag-alt-1" size="2" />
                </div>
                <div className="flag inactive">
                    <Icofont icon="flag-alt-1" size="2" />
                </div>
                <div className="flag inactive">
                    <Icofont icon="flag-alt-1" size="2" />
                </div>
            </div>
            <div className="section timer">
                <h1>10<span className="colon"></span>00</h1>
            </div>

        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);