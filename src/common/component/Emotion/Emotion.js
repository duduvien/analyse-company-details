import React from 'react';
import { Header } from 'semantic-ui-react';

import ExcitedIcon from '../ExcitedIcon/ExcitedIcon';
import HappyIcon from '../HappyIcon/HappyIcon';
import SadIcon from '../SadIcon/SadIcon';
import BoredIcon from '../BoredIcon/BoredIcon';
import AngryIcon from '../AngryIcon/AngryIcon';
import FearIcon from '../FearIcon/FearIcon';
import SarcasmIcon from '../SarcasmIcon/SarcasmIcon';
import styles from './emotion.css';

const getEmotionIcon = (type) => {
    switch(type) {
        case 'excited':
            return (<ExcitedIcon className={styles.icon} svgClassName={styles.iconSvg}/>);
        case 'happy':
            return (<HappyIcon className={styles.icon} svgClassName={styles.iconSvg}/>);
        case 'sad':
            return (<SadIcon className={styles.icon} svgClassName={styles.iconSvg}/>);
        case 'bored':
            return (<BoredIcon className={styles.icon} svgClassName={styles.iconSvg}/>);
        case 'angry':
            return (<AngryIcon className={styles.icon} svgClassName={styles.iconSvg}/>);
        case 'fear':
            return (<FearIcon className={styles.icon} svgClassName={styles.iconSvg}/>);
        case 'sarcasm':
            return (<SarcasmIcon className={styles.icon} svgClassName={styles.iconSvg}/>);
                   
        default:
            return null;
    }
}
const Emotion = ({ emotion }) => (
    <div className={styles.container}>
        {getEmotionIcon(emotion.type)}
        <div className={styles.infoContainer}>
            <h4 className={styles.percentage}>{Math.ceil(emotion.percentage)}%</h4>
            <p className={styles.feeling}>Feel {emotion.type}</p>
        </div>
    </div>
);

export default Emotion;
