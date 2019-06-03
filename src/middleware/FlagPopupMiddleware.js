import * as actions from 'actions';

export default store => next => action => {
    if (action.type === "COLLECT_FLAG") {
        store.dispatch(actions.showFlagPopup())
        setTimeout(() => store.dispatch(actions.hideFlagPopup()), 10000);
    }
    next(action);
};