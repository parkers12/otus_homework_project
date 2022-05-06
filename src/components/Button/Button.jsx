import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

const Button = ({
    children,
    onClick,
    className,
    disabled,
    active,
    ...attrs
}) => {

    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const classes = classNames (
        'button',
        className,
        { active },
    );

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
            {...attrs}
            className = {classes}
            disable = {disabled}
            onClick = {onClickAction}
        >
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    disable: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: '',
    onClick: () => {},
    className: undefined,
    disable: false,
    active: false,
};

export default Button;
