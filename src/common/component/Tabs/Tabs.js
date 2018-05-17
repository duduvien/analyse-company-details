import React, { Component } from 'react';
import styles from './Tabs.css';
import Column from './components/Column';

const content = [
    {value: "test", percentage: '50'},
    {value: "test2", percentage: '30'}
];

class Tabs extends Component {
    constructor() {
        super();
        this.tiveness = ['POSITIVE', 'NEGETIVE'];
        this.state = { activeTab: 'POSITIVE' }
        this.goodContent = [
            {value: "Good work life balance"},
            {value: "Growth and flexible working hours"},
            {value: "Life balance working environment"},
            {value: "Proper delivery deadlines"},
            {value: "Good career path or career progression"},
            {value: "Learn new things to gained to gained more knowledge"},
            {value: "Unstable working process and long working hours"},
            {value: "Rewards"},
        ];
        this.badContent = [
            {value: "Having salaries that haven't increased much, but expenses that have"},
            {value: "Did not provide any training"},
            {value: "Ineffective Management and lack of training"},
            {value: "Disregarding Professional Development"},
            {value: "Heavy Workload"},
            {value: "Terrible work schedule and culture"},
            {value: "Unstable working process and long working hours"},
            {value: "Communitcation issue with the top level management"},
        ];
    }

    handleChange(event) {
        event.preventDefault();
        console.log(event.target.value);
        if(event.target.value !== this.state.activeTab) {
            this.setState({ activeTab: this.tiveness.find((item) => item !== this.state.activeTab)});
        }
    }

    render() {
        const {activeTab} = this.state;
        const isPositive =  activeTab === 'POSITIVE';

        return (
          <div>
              <div className={styles.tabHeader}>
                  <button className={`${isPositive && styles.active}`} onClick={this.handleChange.bind(this)} value="POSITIVE">
                      <div className={styles.tabTitle}> &#34;Employer of positive traits&#34; </div>
                      <div className={styles.tabTitleSub}>What employee says when they like their employer</div>
                  </button>
                  <button className={`${!isPositive && styles.activeRight}`} onClick={this.handleChange.bind(this)} value="NEGATIVE">
                      <div className={styles.tabTitle}> &#34;Employer of negative traits&#34; </div>
                      <div className={styles.tabTitleSub}>What employee says when they think their employer needs improvement</div>
                  </button>
              </div>
              <div className={styles.tabPane}>
              {
                  isPositive ? <div>
                      {
                          this.goodContent.map((item, index) => {
                              console.log('item=>', item);
                              return (
                                  <Column key={index} data={item}/>
                              );
                          })
                      }
                  </div> : <div>
                      {
                          this.badContent.map((item, index) => {
                              console.log('item=>', item);
                              return (
                                  <Column key={index} data={item} floatRight/>
                              );
                          })
                      }
                  </div>
              }
              </div>

          </div>
        );
    }
}

export default Tabs
