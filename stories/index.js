import React from 'react';
import { storiesOf } from '@storybook/react';
import "semantic-ui-css/semantic.css";
import { action } from '@storybook/addon-actions';
import Header from '../src/common/component/Header/Header';
import Tabs from '../src/common/component/Tabs/Tabs';
import CompanyReview from '../src/pages/CompanyReview/CompanyReview';

storiesOf('Header', module)
    .add('with text', () => (
        <Header />
    ));

storiesOf('Tabs', module)
.add('Blob style', () => (
    <Tabs></Tabs>
));

storiesOf('CompanyReview', module)
.add('graph', () => (
    <CompanyReview />
));