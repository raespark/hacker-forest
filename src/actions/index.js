import { createAction } from 'redux-actions';

export const toggleTool = createAction("TOGGLE_TOOL", (tool) => ({tool}));
export const showToolDescription = createAction("SHOW_TOOL_DESCRIPTION", (tool) => ({name: tool.name, description: tool.description}));
export const hideToolDescription = createAction("HIDE_TOOL_DESCRIPTION");

export const startGame = createAction("START_GAME");
export const finishGame = createAction("FINISH_GAME");

export const timerStart = createAction("TIMER_START");
export const timerTick = createAction("TIMER_TICK");
export const timerFinished = createAction("TIMER_FINISHED");

export const collectFlag = createAction("COLLECT_FLAG");

export const toggleMuteMusic = createAction("TOGGLE_MUTE_MUSIC");

export const showFlagPopup = createAction("SHOW_FLAG_POPUP");
export const hideFlagPopup = createAction("HIDE_FLAG_POPUP");

export const finishedGhostTown = createAction("FINISHED_GHOST_TOWN");
export const finishedPetParadeCats = createAction("FINISHED_PET_PARADE_CATS");
export const finishedPetParadePassword = createAction("FINISHED_PET_PARADE_PASSWORD");