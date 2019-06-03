import React from 'react';
import Icofont from 'react-icofont';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

import './FlagPopup.scss';

const mapStateToProps = ({ ui: { flagPopupVisible } }) => ({
    flagPopupVisible
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

const flagPopup = (props) => {
    return (
        <div className={classnames("flag-popup", {active: props.flagPopupVisible})} onClick={props.actions.hideFlagPopup}>
            <Icofont icon="flag-alt-1" size={6} />
            <strong>Flag acquired!</strong>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(flagPopup);