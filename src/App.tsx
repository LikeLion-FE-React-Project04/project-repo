import classes from './App.module.css';

interface Props {
  [key: string]: unknown;
}

function App(props: Props): JSX.Element {
  return (
    <div>
      <h1 className={classes.red}>React 테스팅 라이브러리</h1>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import testPng from '../assets/test.png';
// import testSvg from '../assets/react.svg';
// import { ReactComponent as TestSvgComponent } from '../assets/react.svg';

// const App = ({ message: initialMessage }) => {
//   const [message] = useState(initialMessage ?? 'hello React *^^*');

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//       {testPng}
//       {testSvg}
//       <TestSvgComponent></TestSvgComponent>

//     </div>
//   );
// };

// export default App;
