import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import './title.scss';

const Title = ({
    children,
    className,
}) => {

    const classes = classNames (
        'title',
        className,
    );

    return (
        <div
            className = {classes}
        >
            {children}
        </div>
    )
};

Title.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
};

Title.defaultProps = {
    children: '',
    className: undefined,
};

export default Title;
