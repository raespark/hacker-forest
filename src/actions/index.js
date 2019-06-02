import { createAction } from 'redux-actions';

export const toggleTool = createAction("TOGGLE_TOOL", (tool) => ({tool}));
export const showToolDescription = createAction("SHOW_TOOL_DESCRIPTION", (tool) => ({name: tool.name, description: tool.description}));
export const hideToolDescription = createAction("HIDE_TOOL_DESCRIPTION");