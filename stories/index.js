import React from 'react';
import { storiesOf } from '@storybook/react';
import "semantic-ui-css/semantic.css";
import { action } from '@storybook/addon-actions';
import Header from '../src/common/component/header/Header';
import Tabs from '../src/common/component/tabs/Tabs';

storiesOf('Header', module)
    .add('with text', () => (
        <Header />
    ));

storiesOf('tabs', module)
.add('first', () => (
    <Tabs></Tabs>
));