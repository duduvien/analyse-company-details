import React, { Component } from 'react';
import styles from './Tabs.css';
import Column from './components/Column';

import Emotion from '../Emotion/Emotion';
import * as goodPhases from '../../../data/goodPhases';
import * as badPhases from '../../../data/badPhases';
import {
    goodEmotions,
    badEmotions,
} from '../../../common/helpers/getFormattedEmoji';

const content = [
    { value: 'test', percentage: '50' },
    { value: 'test2', percentage: '30' },
];

const KEYS = ['Phrases', 'ProbA', 'ProbB'];

class Tabs extends Component {
    constructor() {
        super();
        this.tiveness = ['POSITIVE', 'NEGATIVE'];
        this.state = { activeTab: 'POSITIVE', objKey: 'Phrases' };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState(this.changeDataSet), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    changeDataSet(prev) {
        if (this.state.objKey === prev.objKey) {
            const nextKey = KEYS.indexOf(this.state.objKey) + 1;
            return { objKey: KEYS[nextKey >= KEYS.length ? 0 : nextKey] };
        }
    }

    handleChange(event) {
        event.preventDefault();
        if (event.currentTarget.value !== this.state.activeTab) {
            this.setState({ activeTab: event.currentTarget.value });
        }

        return false;
    }

    render() {
        const { activeTab, objKey } = this.state;
        const isPositive = activeTab === 'POSITIVE';

        return (
            <div>
                <div className={styles.tabHeader}>
                    <button
                        className={`${isPositive && styles.active}`}
                        onClick={this.handleChange.bind(this)}
                        value="POSITIVE"
                    >
                        <div className={styles.tabTitle}>
                            {' '}
                            &#34;Employer of positive traits&#34;{' '}
                        </div>
                        <div className={styles.tabTitleSub}>
                            What employee says when they like their employer
                        </div>
                    </button>
                    <button
                        className={`${!isPositive && styles.activeRight}`}
                        onClick={this.handleChange.bind(this)}
                        value="NEGATIVE"
                    >
                        <div className={styles.tabTitle}>
                            {' '}
                            &#34;Employer of negative traits&#34;{' '}
                        </div>
                        <div className={styles.tabTitleSub}>
                            What employee says when they think their employer
                            needs improvement
                        </div>
                    </button>
                </div>
                <div className={styles.tabPane}>
                    {isPositive ? (
                        <div>
                            {goodPhases.map((item, index) => {
                                console.log('item=>', item[objKey]);
                                return (
                                    <Column
                                        key={`${item[objKey]}${index}`}
                                        data={item[objKey]}
                                    />
                                );
                            })}
                            <div className={styles.emotions}>
                                {goodEmotions.slice(0, 4).map(emotion => {
                                    return (
                                        <div className={styles.emotionContainer}>
                                            <Emotion
                                                key={emotion.type}
                                                emotion={emotion}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div>
                            {badPhases.map((item, index) => {
                                console.log('item=>', item[objKey]);
                                return (
                                    <Column
                                        key={`${item[objKey]}${index}`}
                                        data={item[objKey]}
                                        floatRight
                                    />
                                );
                            })}
                            <div className={styles.emotions}>
                                {badEmotions.slice(0, 4).map(emotion => {
                                    return (
                                        <div className={styles.emotionContainer}>
                                            <Emotion
                                                key={emotion.type}
                                                emotion={emotion}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Tabs;
