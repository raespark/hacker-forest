import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

const mapStateToProps = ({ tools: { hasToolEnabled, currentTool } }) => ({
    hasToolEnabled,
    currentTool
});

const ToolContainer = (props) => {
    const { className, children, hasToolEnabled, currentTool, dispatch, ...rest } = props;
    const toolClassName = hasToolEnabled ? `tool-${currentTool.name.toLowerCase()}` : null;
    return (
        <div className={classnames(toolClassName, className)} {...rest}>
            {children}
        </div>
    );
}

export default connect(mapStateToProps)(ToolContainer);