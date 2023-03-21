// import style from '../src/styles/main.module.css';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </RecoilRoot>
  ),
];
