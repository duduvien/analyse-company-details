import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './nav.css';

export default class Nav extends Component {
    static propTypes = {
        links: PropTypes.array.isRequired,
        isRightAligned: PropTypes.bool,
    };
    static defaultProps = {
        isRightAligned: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            isDropdownVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }
    setDropdownVisibility(isVisible) {
        const eventAction = isVisible
            ? 'addEventListener'
            : 'removeEventListener';
        document[eventAction]('click', this.handleClick, false);
        this.setState({
            isDropdownVisible: isVisible,
        });
    }
    handleClick(e) {
        if (!this.dropdownNode.contains(e.target)) {
            this.setDropdownVisibility(false);
        }
    }

    render() {
        const { links, isRightAligned } = this.props;
        const { isDropdownVisible } = this.state;

        return (
            <ul
                className={classNames({
                    [styles.container]: true,
                    [styles.isRightAligned]: isRightAligned,
                })}
            >
                {links.map(link => {
                    const hasChildren = !!link.childLinks.length;
                    const clickHandler = hasChildren
                        ? e => {
                              if (!isDropdownVisible) {
                                  this.setDropdownVisibility(true);
                              }
                              e.preventDefault();
                          }
                        : link.handleOnClick;

                    return (
                        <li
                            key={link.text}
                            className={classNames({
                                [styles.item]: true,
                                [styles.itemHasDropdown]: hasChildren,
                                [styles.itemShowDropdown]:
                                    hasChildren && isDropdownVisible,
                            })}
                            data-automation="Header"
                        >
                            <a
                                className={classNames({
                                    [styles.link]: true,
                                    [styles.linkIsActive]: link.isActive,
                                    [styles.linkHideOnMobile]:
                                        link.hideOnMobile,
                                })}
                                onClick={clickHandler}
                                href={link.href}
                                title={link.title}
                                data-hj-masked={link.shouldMask}
                            >
                                <span>{link.text}</span>
                            </a>
                            {hasChildren && (
                                <ul
                                    className={styles.dropdownList}
                                    ref={node => {
                                        this.dropdownNode = node;
                                    }}
                                >
                                    {link.childLinks.map(
                                        childLink => (
                                            <li key={childLink.text}>
                                                <a
                                                    className={
                                                        styles.dropdownLink
                                                    }
                                                    href={childLink.href}
                                                    title={childLink.title}
                                                >
                                                    {childLink.text}
                                                </a>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
