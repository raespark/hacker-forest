import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './ScrewdriverDiv.scss';

const mapStateToProps = ({ tools: { hasToolEnabled, currentTool } }) => ({
    hasToolEnabled,
    currentTool
});

const onScrewdriverDivClick = (hasToolEnabled, currentTool, enabled, onScrew) => {
    if (enabled && hasToolEnabled && currentTool.name === "Screwdriver" && typeof(onScrew) === 'function') {
        onScrew();
    }
}

const ScrewdriverDiv = (props) => {
    const { enabled, className, children, onClick, onScrew, hasToolEnabled, currentTool, dispatch, ...rest } = props;

    const memoizedOnClick = useCallback(
        (...args) => {
            onScrewdriverDivClick(hasToolEnabled, currentTool, enabled, onScrew);
            if (typeof (onClick) === 'function') { onClick(...args) };
        },
        [hasToolEnabled, currentTool, enabled, onClick, onScrew]
    )

    return (
        <div className={classnames("screwdrivable", className)} onClick={memoizedOnClick} {...rest}>
            {children}
        </div>
    );
}

export default connect(mapStateToProps)(ScrewdriverDiv);