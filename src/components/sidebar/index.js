import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import * as actions from 'actions';

import Icofont from 'react-icofont';
import TreeSvg from './tree';
import Links from 'content/links';
import Tools from 'content/tools';
import Timer from 'components/Timer';
import Flags from 'components/Flags';
import './sidebar.scss';

const mapStateToProps = ({ tools: { hasToolEnabled, currentTool, toolName, toolDescription }, gameState: {collectedFlags, musicEnabled} }) => ({
    hasToolEnabled,
    currentTool,
    toolName,
    toolDescription,
    collectedFlags,
    musicEnabled
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

const Sidebar = (props) => {
    const musicTool = {
        name: props.musicEnabled ? "Mute Music" : "Unmute Music",
        description: props.musicEnabled ? "Mute the background music" : "Unmute the background music.",
        icon: props.musicEnabled ? "volume-down" : "volume-off"
    }

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
                    <div key={musicTool.name}
                        className={classnames("tool")}
                        title={musicTool.name}
                        onMouseOver={() => { props.actions.showToolDescription(musicTool) }}
                        onMouseOut={() => { props.actions.hideToolDescription() }}
                        onClick={() => { props.actions.toggleMuteMusic() }}>
                        <Icofont icon={musicTool.icon} size="3" />
                    </div>
                </div>
                <div className="tool-description">
                    <h2>{props.toolName}</h2>
                    <p>{props.toolDescription}</p>
                </div>
            </div>
            <Flags className="section" collectedFlags={props.collectedFlags}/>
            <Timer className="section" />

        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);