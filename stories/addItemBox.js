import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AddItemBox from '../components/AddItemBox';

storiesOf('AddItemBox', module)
  .add('empty', () => {
    <AddItemBox onKeyDown={action('keyDown')} />
  });
