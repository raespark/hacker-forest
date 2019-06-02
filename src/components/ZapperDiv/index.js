import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './ZapperDiv.scss';

const mapStateToProps = ({ tools: { hasToolEnabled, currentTool } }) => ({
    hasToolEnabled,
    currentTool
});

const onZapperDivClick = (hasToolEnabled, currentTool, onZap) => {
    if (hasToolEnabled && currentTool.name === "Zapper" && typeof(onZap) === 'function') {
        onZap();
    }
}

const ZapperDiv = (props) => {
    const { className, children, onClick, onZap, hasToolEnabled, currentTool, dispatch, ...rest } = props;

    const memoizedOnClick = useCallback(
        (...args) => {
            onZapperDivClick(hasToolEnabled, currentTool, onZap);
            if (typeof (onClick) === 'function') { onClick(...args) };
        },
        [hasToolEnabled, currentTool, onClick, onZap]
    )

    return (
        <div className={classnames("zappable", className)} onClick={memoizedOnClick} {...rest}>
            {children}
        </div>
    );
}

export default connect(mapStateToProps)(ZapperDiv);