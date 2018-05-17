import React from 'react';
import {Tab} from "semantic-ui-react";
import Column from './components/Column';

const content = [
    {value: "test"},
    {value: "test2"}
];

const panes = [
    { menuItem: 'Tab 1', render: () => (<Tab.Pane>
            {
                content.map((item, index) => {
                    console.log('item=>', item);
                    return (
                        <Column key={index} value={item.value} />
                    );
                })
            }
        </Tab.Pane> )},
    { menuItem: 'Tab 2', render: () => <Tab.Pane>
            {
                content.map((item, index) => {
                    console.log('item=>', item);
                    return (
                        <Column key={index} value={item.value} />
                    );
                })
            }
        </Tab.Pane> },
]

const TabExampleLoading = () => (
    <Tab panes={panes} />
)

export default TabExampleLoading
