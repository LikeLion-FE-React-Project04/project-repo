import { ProductDetailPopUp } from './ProductDetailPopUp.jsx';

export default {
  title: 'components/ProductDetailPopUp',
  component: ProductDetailPopUp,
  tags: ['autodocs'],
  args: { ...ProductDetailPopUp.defaultProps },
};

export const Inquiry = {};

export const Review = {
  args: {
    uiType: "review",
  },
};
