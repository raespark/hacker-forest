import React from 'react';

import Icofont from 'react-icofont';

import utils from 'utils';
import classnames from 'classnames';

const Flags = (props) => {
    return (
        
            <div className="section flags">
                {
                    utils.range(5).map(i => 
                        <div key={`flag-${i}`} className={classnames("flag", {active:props.collectedFlags > i})}>
                            <Icofont icon="flag-alt-1" size="2" />
                        </div>
                    )
                }
                <div className={classnames("flag", "special", {active: props.collectedFlags === 6})}>
                    <Icofont icon="flag-alt-1" size="2" />
                </div>
            </div>
    );
}

export default Flags;