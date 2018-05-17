import React from 'react';
import styles from './Column.css';

const CommentCol = (props) => (
    <div className={styles.typewriter}>
        <p>
        Tab {props.value}
        </p>
    </div>
);

export default CommentCol;