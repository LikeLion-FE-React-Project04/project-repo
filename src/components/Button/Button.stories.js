import { Button } from './Button.jsx';
// import style from '../../styles/main.module.css';

export default {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { ...Button.defaultProps },
};

export const Primary = {};

export const Secondary = {
  args: {
    uiType: 'secondary',
  },
};

export const third = {
  args: {
    uiType: 'third',
  },
};

export const fourth = {
  args: {
    uiType: 'fourth',
  },
};

export const fifth = {
  args: {
    uiType: 'fifth',
  },
};



