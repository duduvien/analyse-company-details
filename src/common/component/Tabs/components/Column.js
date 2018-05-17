import React from 'react';
import styles from './Column.css';

const CommentCol = ({data, floatRight}) => {
    console.log('THis:',data, floatRight);
    return (
    <div className={`${styles.typewriter} ${floatRight && styles.floatRight}`}>
        <p>
            {data.value}
        </p>
    </div>
)};

export default CommentCol;