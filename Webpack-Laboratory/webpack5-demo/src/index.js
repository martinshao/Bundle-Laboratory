import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');
  // lodash, 现在通过一个 script 引入
  element.innerHTML = _.join(['Hello ', 'webpack'], '');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
