import React from 'react';

import Icofont from 'react-icofont';

import utils from 'utils';
import classnames from 'classnames';

import './Flags.scss';

const Flags = (props) => {
    return (

        <div className={classnames("flags", props.className)}>
            {
                utils.range(5).map(i =>
                    <div key={`flag-${i}`} className={classnames("flag", { active: props.collectedFlags > i })}>
                        <Icofont icon="flag-alt-1" size="2" />
                    </div>
                )
            }
            {
                utils.range(Math.max(props.collectedFlags - 5, 0), 5).map(i =>
                    <div key={`flag-${i}`} className={classnames("flag", "special", { active: props.collectedFlags > i })}>
                        <Icofont icon="flag-alt-1" size="2" />
                    </div>
                )
            }
        </div>
    );
}

export default Flags;