import React, {useCallback} from 'react';
import classnames from 'classnames';

const onDragStart = (draggableId, e) => {
    e.dataTransfer.setData("type", "draggable-div");
    e.dataTransfer.setData("draggableId", draggableId);
}

const DraggableWrapper = (props) => {
    const { enabled, className, children, draggableId, ...rest } = props;

    const memoizedOnDragStart = useCallback(
        (...args) => {
            if (enabled === true) {
                onDragStart(draggableId, ...args);
            }
        },
        [enabled, draggableId]
    )

    return (
        <div draggable={enabled} onDragStart={memoizedOnDragStart} className={classnames("draggable", className)} {...rest}>
            {children}
        </div>
    );
}

export default DraggableWrapper;