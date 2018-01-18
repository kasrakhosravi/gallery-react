import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import ItemSingle from '../components/ItemSingle';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Card')} />);

storiesOf('Card', module)
  .add('single card', () => <ItemSingle id='1' img_url='https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg' title='Magical'></ItemSingle>);

