import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import 'bootstrap/dist/css/bootstrap.css';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.js
configure(requireContext('../src', true, /\.stories\.(js|ts|jsx|tsx)$/), module);
addDecorator(withKnobs);
