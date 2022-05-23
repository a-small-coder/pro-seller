import React from 'react';
import './Title.scss'

function Title(props) {
    let className = "heading"
    className = props.wrapperClass != null ? props.wrapperClass + ` ${className}` : className
    let dote = ""
    if (props.type === 'heading') {
        dote = ` _dote`
    }
    switch (props.heading_lvl) {
        case 1:
            return (
                <div className={className}>
                    <h1 className={'heading__title' + dote}>
                        {props.children}
                    </h1>
                </div>
            )

        case 2:
            return (
                <div className={className}>
                    <h2 className={'heading__title' + dote}>
                        {props.children}
                    </h2>
                </div>
            )

        case 3:
            return (
                <div className={className}>
                    <h3 className={'heading__title' + dote}>
                        {props.children}
                    </h3>
                </div>
            )

        default:
            return (
                <div className={className}>
                    <h3 className='heading__title'>
                        {props.children}
                    </h3>
                </div>
            )
    }
}

export default Title;