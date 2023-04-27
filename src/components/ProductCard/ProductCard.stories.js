import ProductCard from './ProductCard.jsx';

export default {
  title: 'components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  args: { ...ProductCard.defaultProps },
};

export const Primary = {
  args: {
    product: {
      id: 'product-rksk',
      name: '[대구 반할만떡] 유부호만두',
      description: '유부로 속을 든든히 채운 군만두',
      price: 6900,
      saleRatio: 0.24,
      salePrice: 5244,
      image: {
        thumbnail: 'assets/product/ubuho/thumbnail.jpg',
        view: 'ubuho/detail-view.jpg',
        banner: 'ubuho/detail-banner.jpg',
        info: 'ubuho/detail-info.jpg',
        alt: '유부호 만두',
      },
      stock: 3,
      category: '샐러드ㆍ간편식',
      karlyOnly: 'false',
      brand: '대구 반할만떡',
    },
  },
};
