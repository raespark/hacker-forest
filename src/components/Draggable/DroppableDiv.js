import React, {useCallback} from 'react';
import classnames from 'classnames';

const onDragEnterHandler = (onDragEnter, e) => {
    e.preventDefault();
    if (e.dataTransfer.getData("type") === "draggable-div" && typeof (onDragEnter) === 'function') {
        onDragEnter(e.dataTransfer.getData("draggableId"));
    }
}

const onDragLeaveHandler = (onDragLeave, e) => {
    e.preventDefault();
    if (e.dataTransfer.getData("type") === "draggable-div" && typeof (onDragLeave) === 'function') {
        onDragLeave(e.dataTransfer.getData("draggableId"));
    }
}

const onDragOverHandler = (e) => {
    e.preventDefault();
}

const onDropHandler = (onDrop, e) => {
    if (e.dataTransfer.getData("type") === "draggable-div" && typeof (onDrop) === 'function') {
        onDrop(e.dataTransfer.getData("draggableId"));
    }
}

const Droppable = (props) => {
    const { enabled, className, children, dispatch, onDrop, onDragEnter, onDragLeave, ...rest } = props;

    const memoizedOnDrop = useCallback(
        (...args) => {
            if (enabled) {
                onDropHandler(onDrop, ...args);
            }
        },
        [enabled, onDrop]
    )

    const memoizedOnDragEnter = useCallback(
        (...args) => {
            if (enabled) {
                onDragEnterHandler(onDragEnter, ...args);
            }
        },
        [enabled, onDragEnter]
    )

    const memoizedOnDragLeave = useCallback(
        (...args) => {
            if (enabled) {
                onDragLeaveHandler(onDragLeave, ...args);
            }
        },
        [enabled, onDragLeave]
    )

    return (
        <div onDrop={memoizedOnDrop} onDragEnter={memoizedOnDragEnter} onDragLeave={memoizedOnDragLeave} onDragOver={enabled ? onDragOverHandler : () => {}} className={classnames("droppable", className)} {...rest}>
            {children}
        </div>
    );
}

export default Droppable;