import React from 'react';
import ReactDOM from 'react-dom';
import register from './register';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<register />, div);
  ReactDOM.unmountComponentAtNode(div);
});
