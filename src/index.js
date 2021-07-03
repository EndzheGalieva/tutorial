import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div class=''>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world')
//   );
// };

ReactDom.render(<Greeting />, document.getElementById('root'));
