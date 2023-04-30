const esbuildLoader = {
  test: /\.jsx?$/i,
  exclude: /node_modules/,
  use: {
    loader: 'esbuild-loader',
    options: {
      loader: 'jsx', // JSX를 사용하지 않는 경우 제거
      target: 'es2015', // 컴파일 할 구문
    },
  },
};

const tsEsbuildLoader = {
  test: /\.tsx?$/i,
  exclude: /node_modules/,
  use: {
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx', // tsx가 필요하지 않은 경우 'ts'로 설정
      target: 'es2015', // 컴파일 할 구문
    },
  },
};

let obj = {};

obj.esbuildLoader = esbuildLoader;
obj.tsEsbuildLoader = tsEsbuildLoader;

module.exports = obj