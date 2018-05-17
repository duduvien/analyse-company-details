import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './icon.css';

export default function Icon({
    markup,
    className,
    svgClassName,
    ...restProps
}) {
    const svgWithClasses = markup.replace(
        '<svg ',
        `<svg class="${classnames(styles.svg, svgClassName)}" `,
    );
    const combinedProps = {
        ...restProps,
        className: classnames(styles.root, className),
    };
    return (
        <span
            dangerouslySetInnerHTML={{ __html: svgWithClasses }} // eslint-disable-line react/no-danger
            {...combinedProps}
        />
    );
}

Icon.propTypes = {
    markup: PropTypes.string.isRequired,
    svgClassName: PropTypes.string,
    className: PropTypes.string,
};

Icon.defaultProps = {
    svgClassName: '',
    className: '',
};
